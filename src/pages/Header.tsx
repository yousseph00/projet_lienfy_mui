/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { List, ListItem, } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2c3e50' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>
        <img src="/images/img_logopng.png" alt="logopng" style={{ height: '40px' }} />
        </div>
        <div style={{color:"#FFFFFF"}}>
        <List sx={{ display: 'flex', color:"#FFFFFF" }}>
      <ListItem>      
        <Typography variant="body1" style={{ color: '#FF7F2A', textDecoration: 'none' }}>Accueil</Typography>
      <ListItem>
        <Typography variant="body1" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Mes liens</Typography>  
      </ListItem>
        <Typography variant="body1" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Blog</Typography>
      </ListItem>
    </List>
        </div>
        <div >
        <Button  style={{borderColor:"#FF7F2A" ,color:"#FF7F2A", margin:"20px"}} variant="outlined">
          Se connecter
        </Button>
        <Button style={{backgroundColor: "#FF7F2A"}} variant="contained">
          S&#39;inscrire
        </Button>
        </div>           
      </Toolbar>
    </AppBar>
  );
};

export default Header;
