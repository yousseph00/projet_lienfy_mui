/* eslint-disable @next/next/no-img-element */
'use client'
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { UserAuth } from '../context/AuthContext';

const loginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <section
        style={{
          backgroundImage: 'url("images/img_background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end', 
          
        }}> 
        
        <div style={{ background: '#0E1D34',opacity:'0.8', width: '50%',minHeight: '100vh', paddingTop: '10rem',  borderRadius: '8px' }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
              padding: '50px',
              borderRadius: '8px',
              maxWidth: '400px', 
              margin: 'auto' 
            }}
          > 
            <Typography variant='h2' gutterBottom style={{ textAlign: 'center', marginBottom: '20px', fontWeight:"500" }} >
              Lien<span style={{color:"#FF7F2A", }}>fy</span>
            </Typography>
            <Typography  variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px',fontWeight:"500" }}>
              Connexion <br /><span style={{color:"#6D6D6D", font:"Poppins", fontWeight:"400px",marginTop: "2px", fontSize:"18px"}}>connectez-vous et raccourcissez vos lien</span>
            </Typography>
            <Button onClick={handleSignOut} variant="outlined" color="primary" style={{color:"#000000",fontWeight:"500px",font:"poppins", marginBottom: '20px' }}>
             <img src="images/Google.png" alt="Google" style={{paddingRight:"1rem"}} /> Se connecter avec Google
            </Button>
            <form onSubmit={handleSubmit}>
              <TextField  label="Adresse email" type="email" fullWidth margin="normal" />
              <TextField label="Mot de passe" type="password" fullWidth margin="normal" />
              <Typography display="flex" justifyContent="end" color="#E52F2F" paddingBottom="20px" >Mot de passe oublié ?</Typography>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ backgroundColor: "#FF7F2A" }}>
                Se connecter
              </Button>
            </form>
            <Typography style={{ textAlign: 'center', marginTop: '5rem' }}>
             Vous n&apos;avez pas de compte ?<Link href="/Register" > 
                <span style={{color:"#FF7F2A"}}> Créez-le ici</span> </Link> 
            </Typography>
          </Box>
        </div>
      </section>
    </>
  );
};

export default loginPage;