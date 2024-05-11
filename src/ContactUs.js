import React from 'react';
import { Grid, Container, Typography, TextField, Button ,Hidden ,Box,InputLabel,MenuItem,FormControl,Select } from '@mui/material';



const ContactUs = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
   
  };

  return (
    < Container maxWidth="xl" >
      <header>
        <Typography align='center'>
      <h1>We are here for you</h1>
      </Typography>
      <Typography align='center' >
      <nav>
        <p>
      Cant find what you need in our Help docs? 
      <br /> Get in touch with a friendly member of 
      <br /> our team by filling out the form below 
      and <br />we will get back to you by email shortly.
      </p>
      </nav>
      </Typography>
    </header>
      <Grid container spacing={2}  >
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <div classname ="contact_us" style={{padding: '50px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="h4" align='center'>
              Get in Touch
            </Typography>
          
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ minWidth: 300 }}>
        
           <FormControl required fullWidth>
           <InputLabel id="demo-simple-select-required-label">Select a Subject</InputLabel>
               <Select
                 labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                   value={age}
                       label="Age"
                    onChange={handleChange}
                 >
                    <MenuItem value={1}>Account Support</MenuItem>
                    <MenuItem value={2}>Technical Support</MenuItem>
                  <MenuItem value={3}>Feedback</MenuItem>
                  <MenuItem value={4}>Other</MenuItem>
                  </Select>
                   </FormControl>
              </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label=" Company Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
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

export default ContactUs;
