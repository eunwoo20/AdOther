import React from 'react';
import { Grid, Container, Typography, TextField, Button ,Hidden ,Box,InputLabel,MenuItem,FormControl,Select,Paper, FormControlLabel, Radio,Checkbox } from '@mui/material';




const SignUp = () => {

  return (
    < Container maxWidth="xl" >
      <header>
        <Typography align='left'>
      <h1>Lets Start Improving Your Business</h1>
      </Typography>
      
    </header>
      <Grid container spacing={2}  >
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <div classname="sign_up" style={{padding: '50px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="h4" align='center'>
              SignUp
            </Typography>
          
          <Grid container spacing={2}>
          
          <Grid item xs={6}>
        <Paper style={{ padding: '20px' }}>
        <FormControlLabel control={<Radio color="primary"/>}   sx={{ position: 'left' }}label="Direct Adviser"/>
          <Typography variant="body2">
            Choose Direct Advertiser if you are going to advertise for your own company.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: '20px' }}>
        <FormControlLabel control={<Radio color="primary"   />}sx={{ position: 'left' }} label="Agency"/>
          <Typography variant="body1">
            Column 2 Information:
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet leo vitae pulvinar vehicula.
          </Typography>
        </Paper>
      </Grid>
    <Grid item xs={6}>
    <TextField label=" Full Name" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}><TextField label="Company Name" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}>
    <TextField label="  Company Email address" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}><TextField label="Confirm Email address" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}>
    <TextField label=" Country" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}><TextField label="Default Currency" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={6}><TextField label="Phone Number" variant="outlined" fullWidth required />
    </Grid>
    <Grid item xs={12}>
    <FormControlLabel required control={<Checkbox />} label="I Agree Terms and Conditions" />
    </Grid>
    <Grid item xs={12}>
    <FormControlLabel required control={<Checkbox />} label="I Agree to Privacy and Cookie Policy" />
    </Grid>
 <Grid item xs={12}>
 <Button type="submit" variant="contained" color="primary"> Register</Button>
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

export default SignUp;
