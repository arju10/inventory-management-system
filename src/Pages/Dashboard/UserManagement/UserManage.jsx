import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Popconfirm, Table } from 'antd';
import Button from '@mui/material/Button';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

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
        className='editable-cell-value-wrap'
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
const UserManage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((user, index) => ({
          key: index.toString(),
          name: user.name,
          age: user.username,
          email: user.email,
          'Contact Person': user.name, // You can use user.name or any other field as per your requirement
          'Contact No.': '12345670', // Example contact number
          Code: `CODE-${index}`, // Example code
          'Address 1': `Address ${index}`, // Example address
        }));
        setDataSource(newData);
        setCount(newData.length);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
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

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
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
      title: 'Full Name',
      dataIndex: 'name',
      width: '15%',
      editable: false,
    },
    {
      title: 'Username',
      dataIndex: 'Contact Person',
      width: '15%',
    },
    {
      title: 'Assign Role',
      dataIndex: 'Contact No.',
    },
    {
      title: 'Organization',
      dataIndex: 'Code',
    },
    {
      title: 'Email',
      dataIndex: 'Address 1',
    },
    {
      title: 'Active',
      dataIndex: 'Address 1',
    },
    {
      title: 'Locked',
      dataIndex: 'Address 1',
    },
    {
      title: 'Topic Subscribed?',
      dataIndex: 'Address 1',
    },
  ].map((col) => ({
    ...col,
    onCell: (record) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      title: col.title,
      handleSave,
    }),
  }));

  return (
    <div>
      <div
        style={{
          paddingTop: '25px',
          paddingBottom: '25px',
          paddingLeft: '25px',
          paddingRight: '25px',
          backgroundColor: '#F8F9FC',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '10px',
          }}
        >
          <h1
            style={{
              color: '#5a5c69',
              fontSize: '20px',
              lineHeight: '34px',
              fontWeight: 'normal',
              cursor: 'pointer',
            }}
          >
            User Account
          </h1>
          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search by Name, Username or Phone'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: '#2E59D9',
              height: '32px',
              borderRadius: '3px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '30px',
              paddingRight: '30px',
              cursor: 'pointer',
            }}
          >
            <PlusCircleOutlined />
            Role Feature
          </button>
        </div>
      </div>
      <Button
        onClick={handleAdd}
        type='primary'
        style={{
          marginBottom: 16,
        }}
        variant='contained'
        color='success'
      >
        <UserAddOutlined />
        &nbsp; Add New Supplier
      </Button>
      &nbsp;
      <Button
        style={{
          marginBottom: 16,
        }}
        variant='contained'
        color='primary'
      >
        <EditOutlined />
        &nbsp; Edit Supplier
      </Button>
      &nbsp;
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

export default UserManage;
