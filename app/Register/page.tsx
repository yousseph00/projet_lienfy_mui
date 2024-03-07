'use client'
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { UserAuth } from '../context/AuthContext';

const RegisterPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
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
        }}
      > 
        <div style={{ background: '#0E1D34', opacity: '0.8', width: '50%', minHeight: '100vh', paddingTop: '10rem', borderRadius: '8px' }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
              padding: '50px',
              borderRadius: '8px',
              maxWidth: '400px', 
              margin: 'auto', 
            }}
          >
            <Typography variant='h2' gutterBottom style={{ textAlign: 'center', marginBottom: '20px', fontWeight:"500" }} >
              Lien<span style={{color:"#FF7F2A", }}>fy</span>
            </Typography>
            <Typography  variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '20px',fontWeight:"500" }}>
              Inscription <br /><span style={{color:"#6D6D6D", font:"Poppins", fontWeight:"400px",marginTop: "2px", fontSize:"18px"}}>connectez-vous et raccourcissez vos lien</span>
            </Typography>
            <Button onClick={handleSignIn} variant="outlined" color="primary" style={{color:"#000000",fontWeight:"500px",font:"poppins", marginBottom: '20px' }}>
             <img src="images/Google.png" alt="Google" style={{paddingRight:"1rem"}} /> S&apos;inscrire avec Google
            </Button>
            <form onSubmit={handleSubmit}>
              <TextField label="Nom complet" fullWidth margin="normal" />
              <TextField label="Adresse email" type="email" fullWidth margin="normal" />
              <TextField label="Mot de passe" type="password" fullWidth margin="normal" />
              <TextField label="Confirmation de Mot de passe" type="password" fullWidth margin="normal" />
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ backgroundColor: "#FF7F2A" }}>
                Créer mon compte
              </Button>
            </form>
          </Box>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;