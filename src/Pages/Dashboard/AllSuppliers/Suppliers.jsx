import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Popconfirm, Table } from 'antd';
import Button from '@mui/material/Button';
import {
    DeleteOutlined,
    EditOutlined,
    UserAddOutlined
} from '@ant-design/icons';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

const AllSuppliers = () => {
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const newData = data.map((user, index) => ({
                    key: index.toString(),
                    name: user.name,
                    age: user.username,
                    email: user.email,
                    'Contact Person': user.name, // You can use user.name or any other field as per your requirement
                    'Contact No.': '12345670', // Example contact number
                    'Code': `CODE-${index}`, // Example code
                    'Address 1': `Address ${index}`, // Example address
                }));
                setDataSource(newData);
                setCount(newData.length);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDelete = key => {
        const newData = dataSource.filter(item => item.key !== key);
        setDataSource(newData);
    };

    const handleAdd = () => {
        const newData = {
            key: count.toString(),
            name: `Shipon Sarkar ${count}`,
            age: '32',
            email: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleSave = row => {
        const newData = [...dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '30%',
            editable: false,
        },
        {
            title: 'Contact Person',
            dataIndex: 'Contact Person',
        },
        {
            title: 'Contact No.',
            dataIndex: 'Contact No.',
        },
        {
            title: 'Code',
            dataIndex: 'Code',
        },
        {
            title: 'Address 1',
            dataIndex: 'Address 1',
        },

    ].map(col => ({
        ...col,
        onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave,
        }),
    }));

    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
                variant="contained" color="success"
            ><UserAddOutlined />&nbsp;
                Add New Supplier
            </Button>&nbsp;

            <Button style={{
                marginBottom: 16,
            }} variant="contained" color="primary"><EditOutlined />&nbsp;
                Edit Supplier
            </Button>&nbsp;


            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
};

export default AllSuppliers
