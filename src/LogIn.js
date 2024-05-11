import React from 'react';
import { Grid, Container, Typography, TextField, Button ,Hidden ,Box,InputLabel,MenuItem,FormControl,Select,Paper, FormControlLabel, Radio,Checkbox } from '@mui/material';




const LogIn = () => {

  return (
    < Container maxWidth="lg" >
      <header>
      <Typography variant="h4" align='center'>
              Welcome To Camera Tales Campaign Manager
            </Typography>
    </header>
      <Grid container spacing={2}  >
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <div  style={{padding: '50px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="h3" align='center'>
              Log In
            </Typography>
          <Grid container spacing={2}>
          
    <Grid item xs={12}>
    <TextField label=" Email Address" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={12}><TextField label="Password" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={12}>
    <FormControlLabel control={<Checkbox />} label="Remember me" />
    </Grid>
    
 <Grid item xs={12}>
 <Button type="submit" variant="contained" color="primary"> Submit</Button>
</Grid>
</Grid>
 </div>       
  </Grid>
        <Hidden xsDown mdDown>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <div classname="second_colomn" style={{ width:'200px' ,padding: '210px', backgroundColor: '#121212' }}>
            
            <img src="https://media-pnq1-1.cdn.whatsapp.net/v/t61.24694-24/430609823_792161406296537_4851313758644819564_n.jpg?ccb=11-4&oh=01_Q5AaIId40UrFwM7X3y6b42g5qfOGuukbmRuXTDJwg-_dRnpi&oe=6645C190&_nc_sid=e6ed6c&_nc_cat=102" alt={100}  style={{ maxWidth: '100%' }} />
          </div>
        </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default LogIn;
