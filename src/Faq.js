import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const drawerWidth = 240;
const navItems = ['FAQ', 'Support', 'Log in', 'Get Started'];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Camera Tales Adv
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', pl:55,pr:40}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Camera Tales Adv
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main"  sx={{p: 2}}>
        <Toolbar />
        <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Camera Tales FAQ
      </Typography>
    
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is Camera Tales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
      
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6"> How does the campaign work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Our campaign offers various subscription packages for our video streaming platform at discounted rates. You can choose the plan that best suits your needs and enjoy unlimited streaming of our vast library of content.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What content is available on your platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        We offer a wide range of content including movies, TV shows, documentaries, and original series spanning multiple genres such as action, drama, comedy, thriller, and more. 
        Our library is regularly updated with new titles to keep our subscribers entertained.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Are there any restrictions on the content I can access?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        The availability of content may vary based on your location due to licensing agreements.
         However, we strive to provide a diverse selection of content that caters to different preferences and interests.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Can I cancel my subscription at any time? </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can cancel your subscription at any time with no commitment or hidden fees. 
        Simply log in to your account and follow the cancellation instructions, or reach out to our customer support team for assistance.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6"> How do I redeem a discount or promotional offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        To redeem a discount or promotional offer, simply follow the instructions provided during the sign-up process or enter the specified promo code at checkout. 
        The discount will be applied automatically to your subscription.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6"> Do you offer a free trial?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, we occasionally offer free trial periods for new subscribers. 
        Keep an eye out for any ongoing promotions or special offers to take advantage of our free trial and explore our platform risk-free.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Is the streaming quality consistent across different devices?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        We strive to deliver high-quality streaming experiences across a variety of devices including smartphones, tablets, computers, smart TVs, and gaming consoles. 
        However, streaming quality may vary based on factors such as your internet connection speed and device capabilities.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Can I stream content offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, select titles are available for offline viewing on compatible devices. 
        Simply download the content to your device while connected to the internet, and you can enjoy watching it later without an internet connection.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How do I contact customer support for assistance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        If you have any questions, concerns, or require assistance, our dedicated customer support team is available to help. 
        You can reach out to us via email, live chat, or phone, and we'll be happy to assist you.
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Are there any additional fees or charges associated with my subscription?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Our subscription plans are transparent, and there are no hidden fees or charges. 
        The price you see during the sign-up process is the total amount you'll pay for your selected plan, excluding any applicable taxes.
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Container>
          </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;