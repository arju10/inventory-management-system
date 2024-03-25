import { useState } from 'react';
import { Switch, FormControlLabel, TextField, Button, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

function AddNewProduct() {
  const [isCreating, setIsCreating] = useState(true);

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Add New Product</h1>
      <div style={{ textAlign: 'right' }}>
        <FormControlLabel
          label="Keep this switch on to keep creating product"
          control={<Switch checked={isCreating} onChange={(e) => setIsCreating(e.target.checked)} />}
        />
      </div>
      <form>
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Product Brand/Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Size/Variant" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Budget Code" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField required label="Measures Unit" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pack Unit" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pack Size/Qnty" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Sort Order" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Alert Qty" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Invoice Notes" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            style={{marginRight: '10px' }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            startIcon={<CancelIcon />}S
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
