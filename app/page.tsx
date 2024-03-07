/* eslint-disable @next/next/no-img-element */
import { Box, TextField, Typography } from '@mui/material';
import Button from "@mui/material/Button";


export default function Home() {
  return (
    <>
    <section>
      <div style={{backgroundColor:"#f0f0f0", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:"20px",width:"100%"}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '6px', maxWidth: '100%', width: '100%' }}>
            <p style={{ lineHeight: '55px', fontSize: '5xl', color: '#000' }}>
              <span style={{ color: '#000', fontFamily: 'Poppins', textAlign: 'left', fontWeight: 'bold', fontSize:"6rem" }}>
                Simplifier vos liens pour une navigation fluide <br /> 
                grace à notre <br />
                raccourcisseur lien
              </span> 
              <span style={{ color: '#FF7F2A', fontFamily: 'Poppins', textAlign: 'left', fontWeight: 'bold',fontSize:"5rem" }}>
              fy
              </span>
            </p>
            <p style={{ lineHeight: '24px', color: '#718096', fontSize: '1.25rem' }}>
            <>
                Lienfy est le raccourcisseur d&#39;url panafricain le plus
                simple. <br />
                Raccourcissez vos liens et faciliter vos partage url.
            </>
            </p>
            <Button style={{cursor: 'pointer',marginTop:"50px",backgroundColor: "#FF7F2A", fontSize:"1.88rem",}} variant="contained">
              Commencez gratuitement
            </Button>
          </div>
          <div style={{ flex: '1', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '126px', width: '100%' }}>
            <img src="images/img_background.png" alt="454ff04e4b8d37e" style={{ flex: '1', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '126px 0 126px 0', width: '100%' }}/>
          </div>
        </div>
      </div>
      </section>
      <section>
        <Box bgcolor="#E5E7EB" display="flex" flexDirection="column" gap="21px" alignItems="center" justifyContent="flex-start" padding="45px" maxWidth="100%" margin="0 auto">
          <Typography variant="h2" color="text.primary" gutterBottom style={{fontWeight: 'bold', fontSize:"4rem"}}>
            Créez un compte et commencez à raccourcir vos liens
          </Typography>
          <Box bgcolor="#FFFFFF" border="2px solid #6B7280" display="flex" flexDirection="column" gap="65px" alignItems="flex-start" justifyContent="flex-end" maxWidth="1232px" marginBottom="10px" padding="45px" borderRadius="12px" width="100%">
            <Box display="flex" flexDirection="column" gap="9px" alignItems="flex-start" justifyContent="flex-start" marginLeft="1px" marginTop="30px" width="100%">
              <Typography variant="body1" color="text.primary" textAlign="center">
                Entrer le lien à raccourcir
              </Typography>
              <TextField
                id="link-input"
                variant="outlined"
                placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
                fullWidth
              />
            </Box>
            <Button style={{cursor: 'pointer',textAlign: 'center' , fontWeight: '500',marginTop:"50px",backgroundColor: "#FF7F2A", fontSize:"1.80rem"}} variant="contained">
              Inscrivez-vous gratuitement et commencez à raccourcir vos liens !
            </Button>
          </Box>
        </Box>
      </section> 
      <section>
      <Box bgcolor="#FFFFFF" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end" padding="28px" maxWidth="100%">
        <Box display="flex" flexDirection="column" gap="37px" alignItems="center" justifyContent="flex-start" maxWidth="1233px" marginTop="19px" marginX="auto" paddingX="20px" width="100%">
          <Box display="flex" flexDirection="column" gap="19px" alignItems="center" justifyContent="flex-start" width="100%">
            <Typography variant="h4" color="text.primary" gutterBottom>
              C’est quoi lienfy ?
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Typography variant="h5" color="text.secondary" gutterBottom>
                Lienfy simplifie le partage d&#39;URL en fournissant une solution de raccourcissement de liens rapide, sécurisée et conviviale. Explorez nos fonctionnalités pour comprendre comment Lienfy peut rendre votre expérience de partage en ligne plus efficace.
              </Typography>
              <Box height="175px" width="100%" maxWidth="100%">
                <img src="images/img_lienfy.png" alt="img_lienfy" style={{ flex: '1', maxWidth: '100%', height: 'auto', objectFit: 'cover', width: '100%' }} />
              </Box>
            </Box>
          </Box>
          <Box bgcolor="#FF9800" display="flex" flexDirection="column" gap="11px" alignItems="center" justifyContent="center" padding="7px" borderRadius="12px" width="75%" maxWidth="100%">
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Facilité
            </Typography>
            <img src="images/img_maskgroup.png" alt="maskgroup" style={{ height: '48px', width: '48px', objectFit: 'cover' }} />
            <Typography variant="body1" color="text.secondary" align="center">
              Utilisez notre raccourcisseur d&#39;URL pour rendre vos liens plus faciles à partager. Rassemblez gratuitement des statistiques et des informations sur le trafic généré par vos liens et impressionnez vos cibles avec des liens mémorables et faciles à retenir.
            </Typography>
          </Box>
          <Box display="flex" gap="19px" alignItems="center" justifyContent="space-around" width="100%">
            <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#FF9800"  position="relative" height="241px" width="100%" maxWidth="100%" borderRadius="14px">
                <Typography variant="h6" color="text.secondary" gutterBottom style={{marginTop:"15px"}}>
                  Optimisation
                </Typography>
                <img src="images/img_maskgroup_49x48.png" alt="maskgroup_One" style={{ height: '48px', width: '52px', objectFit: 'cover' }}/> 
              <Typography variant="body1" color="text.secondary" align="center" style={{ position: 'absolute', bottom: '0', left: '0', right: '0', margin: 'auto', width: '92%' }}>
                Une solution pour optimiser l&#39;information face aux limites de caractères posées par certains canaux de communication. Notre plateforme vous aide à élargir l&#39;étendue de votre message et captiver votre cible par des liens simples et attractifs
              </Typography>
            </Box>
            <Box bgcolor="#FF9800" display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding="3px" borderRadius="14px" width="100%" maxWidth="100%" marginTop="12px">
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Fiabilité
              </Typography>
              <img src="images/img_maskgroup_52x48.png" alt="maskgroup_Two" style={{ height: '48px', width: '52px', objectFit: 'cover' }} />
              <Typography variant="body1" color="text.secondary" align="center" style={{ marginTop: '12px', marginBottom: '20px', width: '100%' }}>
                Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci sont longs et/ou incluent une série de variables ambigu. Lienfy est conçue pour vous aider à renforcer la sécurité de vos privilèges en générant des liens permanents depuis une source fiable.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
    <section>
      <Box bgcolor="#E5E7EB" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" padding="45px" maxWidth="100%" width="100%">
        <Box display="flex" justifyContent="center" marginTop="5px">
          <Typography variant="h3" fontWeight="bold">Ce que disent nos visiteurs</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around" marginTop="5px">
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#FFFFFF" marginTop="50px" marginRight="50px" padding="4px" borderRadius="12px">
            <img src="images/img_ellipse1.png" alt="ellipseOne" style={{ height: '97px', width: '97px', borderRadius: '50%' }} />
            <Typography variant="body1" fontWeight="bold" textAlign="center" marginTop="5px">Cody Fisher</Typography>
            <Typography variant="body1" textAlign="center">  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      <p style={{marginTop:"20px"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con</p>
                      <br />
                      <p style={{marginTop:"20px"}}>Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu</p>
                      <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#FFFFFF" marginTop="12px" padding="4px" borderRadius="12px">
            <img src="images/img_ellipse2.png" alt="ellipseOne" style={{ height: '97px', width: '97px', borderRadius: '50%' }} />
            <Typography variant="body1" fontWeight="bold" textAlign="center" marginTop="5px">Kristen Watson</Typography>
            <Typography variant="body1" textAlign="center">  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      <p style={{marginTop:"20px"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con</p>
                      <br />
                      <p style={{marginTop:"20px"}}>Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu</p>
                      <br />
                      <p style={{marginTop:"20px"}}>Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es</p></Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#FFFFFF" marginTop="50px" marginLeft="50px" padding="4px" borderRadius="12px">
            <img src="images/img_ellipse3.png" alt="ellipseOne" style={{ height: '97px', width: '97px', borderRadius: '50%' }} />
            <Typography variant="body1" fontWeight="bold" textAlign="center" marginTop="5px">Jerome Bell</Typography>
            <Typography variant="body1" textAlign="center">  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      <p style={{marginTop:"20px"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con</p>
                      <br />
                      <p style={{marginTop:"20px"}}>Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu</p>
                      <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es</Typography>
          </Box>
        </Box>
      </Box>
    </section>
    <section>
      <Box bgcolor="#F9FAFB" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" padding="46px" maxWidth="100%" width="100%">
        <Typography variant="h3" fontWeight="bold" textAlign="center">FAQ</Typography>
        <Box display="flex" flexDirection="column" gap="37px" alignItems="center" justifyContent="flex-start" maxWidth="1230px" marginBottom="25px" marginTop="37px" marginLeft="auto" marginRight="auto" padding="27px" width="100%">
          <Box bgcolor="#FFFFFFA7" border="1px solid #CBD5E0" borderRadius="14px" padding="27px" width="100%">
            <Typography variant="h4" fontWeight="bold" textAlign="center" >
              <span style={{color:"#FF7F2A"}}>1. Q : Pourquoi raccourcir un lien ?<br />R</span>
              <span  > </span>
              <span >:</span>
              <span  >
                Les liens raccourcis sont plus esthétiques et prennent moins de place. Ils sont souvent utilisés sur les plateformes de médias sociaux où l&#39;espace est limité.
              </span>
            </Typography>
          </Box>
          <Box bgcolor="#FFFFFFA7" border="1px solid #CBD5E0" borderRadius="14px" padding="27px" width="100%">
            <Typography variant="h4" fontWeight="bold" textAlign="center" className="leading-17px mt-0.5 md:text-3xl sm:text-28px text-32px text-black-900">
              <span style={{color:"#FF7F2A"}}>2. Q : Quels sont les avantages de raccourcir un lien ?<br />R</span>
              <span  > </span>
              <span >:</span>
              <span  >
                Amélioration de l&#39;esthétique des liens <br />
                Économie d&#39;espace sur les supports limités en caractères <br />
                Suivi des clics pour évaluer la popularité ou l&#39;efficacité du lien
              </span>
            </Typography>
          </Box>
          <Box bgcolor="#FFFFFFA7" border="1px solid #CBD5E0" borderRadius="14px" padding="27px" width="100%">
            <Typography variant="h4" fontWeight="bold" textAlign="center" className="leading-17px mt-0.5 md:text-3xl sm:text-28px text-32px text-black-900">
              <span style={{color:"#FF7F2A"}}>3. Q : Est-ce sécuritaire d&#39;utiliser des liens raccourcis ?<br />R</span>
              <span  > </span>
              <span >:</span>
              <span  >
                En général, oui. Cependant, soyez conscient que les liens raccourcis peuvent masquer la destination réelle, ce qui pourrait être exploité à des fins malveillantes. Utilisez des services réputés pour minimiser les risques.
              </span>
            </Typography>
          </Box>
        </Box>
        <Box bgcolor="#FFFFFFA7" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" padding="2px" width="100%" boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)">
          <Box display="flex" alignItems="center" justifyContent="space-between" padding="4px" >
            <Box display="flex" flexDirection="column" gap="8px" alignItems="flex-start" justifyContent="flex-start" marginBottom="3px" marginTop="55px" width="568px">
              <Box display="flex" marginRight="50px" flexDirection="column" gap="3" alignItems="flex-start" justifyContent="flex-start" width="100%">
                <Typography variant="h4" fontWeight="semibold" className="md:text-3xl sm:text-28px text-32px text-black-900">
                  <>
                    Reduisez la longueur de vos liens <br />
                    d’un seul clic !
                  </>
                </Typography>
                <Typography variant="body1" className="leading-32px max-w-568px md:max-w-full text-base text-gray-600">
                  Raccourcissez vos url pour une expérience de partage plus fluide et plus rapide
                </Typography>
              </Box>
              <Button style={{cursor: 'pointer',marginTop:"50px",backgroundColor: "#FF7F2A", fontSize:"1.2rem",}} variant="contained">Raccourcir votre lien</Button>
            </Box>
            <img src="images/img_link.png" alt="link" style={{ height: '400px', width: '400px', objectFit: 'cover',marginLeft:"100px" }}/>
          </Box>
        </Box>
      </Box>
    </section>
      </>
  );
}

