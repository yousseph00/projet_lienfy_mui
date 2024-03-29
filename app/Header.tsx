/* eslint-disable @next/next/no-img-element */
import { Link, List } from '@mui/material';
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
        <div>
        <div style={{ display: 'flex',flexDirection:"row", color:"#FFFFFF" }}> 
          <List style={{display: 'flex',flexDirection:"row", gap:"10px"}}> 
          <Link href="/" style={{textDecoration:"none"}}>      
            <Typography variant="body1" style={{ color: '#FF7F2A'}}>Accueil</Typography>
          </Link>
          <Link href="/" style={{textDecoration:"none"}}>
            <Typography variant="body1" style={{ color: '#FFFFFF'}}>Mes liens</Typography>
          </Link>  
          <Link href="/" style={{textDecoration:"none"}}>
            <Typography variant="body1" style={{ color: '#FFFFFF'}}>Blog</Typography>
          </Link>
          </List>
        </div>
        </div>
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