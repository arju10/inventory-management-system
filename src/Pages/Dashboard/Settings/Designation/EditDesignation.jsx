import { useState } from 'react';
import { Switch, FormControlLabel, TextField, Button, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { ResetTvOutlined } from '@mui/icons-material';

function EditDesignation() {
  const [isCreating, setIsCreating] = useState(true);

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Update Designation</h1>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <FormControlLabel
          label="Keep this switch on to keep update product"
          control={<Switch checked={isCreating} onChange={(e) => setIsCreating(e.target.checked)} />}
        />
      </div>
      <form>
      <Grid container spacing={3}>
          <Grid item xs={4}>
          <TextField required label="Designation Name :" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Description :" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Show Order :" variant="outlined" fullWidth />
          </Grid>
         
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '50px' }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            style={{marginRight: '10px' }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            startIcon={<ResetTvOutlined/>}
            style={{marginRight: '10px', backgroundColor: 'black', color: 'white'  }}
          >
            Reset
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

export default EditDesignation;
