/* eslint-disable @next/next/no-img-element */
import { Link, List, ListItem, } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { UserAuth } from './context/AuthContext';


const Header = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppBar position="static" style={{ backgroundColor: '#2c3e50' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>
        <img src="/images/img_logopng.png" alt="logopng" style={{ height: '40px' }} />
        </div>
        <div style={{color:"#FFFFFF"}}>
        <List sx={{ display: 'flex', color:"#FFFFFF" }}>
      <ListItem> 
      <Link href="/">      
        <Typography variant="body1" style={{ color: '#FF7F2A', textDecoration: 'none' }}>Accueil</Typography>
      </Link>
      <ListItem>
        <Typography variant="body1" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Mes liens</Typography>  
      </ListItem>
        <Typography variant="body1" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Blog</Typography>
      </ListItem>
    </List>
        </div>
        <div >
        {!user ? (
          <><Link href="/login">
              <Button style={{ borderColor: "#FF7F2A", color: "#FF7F2A", margin: "20px" }} variant="outlined">
                Se connecter
              </Button>
            </Link><Link href="/Register">
                <Button style={{ backgroundColor: "#FF7F2A" }} variant="contained">
                  S&#39;inscrire
                </Button>
              </Link></>
        ) : (
          <div>
            <Button onClick={handleSignOut} style={{backgroundColor: "#FF7F2A"}} variant="contained">
            Deconnexion
          </Button>
          </div>
        )}
        
        </div>           
      </Toolbar>
    </AppBar>
  );
};

export default Header;