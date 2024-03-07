/* eslint-disable @next/next/no-img-element */
import { Container} from '@mui/material';
import Link from 'next/link';

const Footer = () => {
    return (

<footer style={{ backgroundColor: '#1a202c', color: '#fff', padding: '32px' }}>
  <Container maxWidth="lg">
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', gap: '16px' }}>
      <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'start',justifyContent: 'space-start', gap: '8px', flexDirection: 'column' }}>
        <div><
            img src="/images/img_logopng.png" alt="logopng" style={{ height: '32px' }} />
        </div>
            <div>
            Le raccourcisseur durl panafricain.
            </div>
        <div style={{marginTop: '40px'}}>
          Sicap Mbao <br />
          Boutique Baye Niass <br />
          Dakar, Senegal <br />
        <div style={{marginTop: '40px'}}> 
          <span style={{ fontWeight: 'bold' }}>Phone:</span> +221 77 860 60 64 <br />
          <span style={{ fontWeight: 'bold' }}>Email:</span> xaralatech@gmail.com
        </div>   
        </div>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontWeight: 'bold' }}>
          Lienfy
        </p>
        <ul style={{display:"flex", flexDirection:"column",justifyContent:"space-between" , listStyleType: 'none', padding: '0', margin: '0', marginTop: '19px' }}>
          <li>
            <Link href="/" passHref>
              <p style={{ color: '#99a3b2' }}>
                Accueil
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <p style={{ color: '#99a3b2' }}>
                Cest quoi lienfy?
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <p style={{ color: '#99a3b2' }}>
                Blog
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <p style={{ color: '#99a3b2' }}>
                Nous contacter
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <p style={{ color: '#99a3b2' }}>
                Deconnexion
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontWeight: 'bold' }}>
          Mes Liens
        </p>
        <Link href="/" passHref>
          <p style={{ color: '#99a3b2', display: 'block', marginTop: '8px' }}>
            Nombre de click
          </p>
        </Link>
      </div>
    </div>
  </Container>
  <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', color: '#99a3b2' }}>
    <p>
      © Copyright <span style={{color:"#FFFFFF",fontWeight:"bold"}}>Lienfy.</span>  All Rights Reserved. Crée par <span style={{color:"#FF7F2A",fontWeight:"bold"}}>Xarala</span>
    </p>
  </div>
</footer>
    )
}
export default Footer;
