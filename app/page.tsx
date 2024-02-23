/* eslint-disable @next/next/no-img-element */
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";


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
            <img src="images/img_454ff04e4b8d37e.png" alt="454ff04e4b8d37e" style={{ flex: '1', maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '126px 0 126px 0', width: '100%' }}/>
          </div>
        </div>
      </div>
      </section>

      <section>
      <div className="bg-gray-200 flex flex-col gap-[21px] items-center justify-start p-[45px] md:px-10 sm:px-5 w-full">
        
            Creez un compte et commencez à raccourcir vos liens
          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col md:gap-10 gap-[65px] items-start justify-end max-w-[1232px] mb-10 mx-auto p-[45px] md:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[9px] justify-start ml-1 md:ml-[0] mt-[30px] w-full">
                Entrer le lien à raccourcir
              <Input
                name="groupTwo"
                placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
                className="font-medium p-0 placeholder:p-gray-400 p-center p-xl w-full"
              ></Input>
            </div>
            <Button
              className="bg-orange-500 cursor-pointer font-medium h-[66px] min-w-[839px] md:min-w-full ml-1 md:ml-[0] p-2xl md:p-[22px] p-center sm:p-xl"
            >
              Inscrivez-vous gratuitement et commencez à raccourcir vos liens !
            </Button>
        </div>
      </div> 
      </section>

      <section>
      <div className="bg-white flex flex-col items-center justify-end p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[37px] items-center justify-start max-w-[1233px] mt-[19px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <p>
                C’est quoi lienfy ?
            </p>
            <div className="flex items-center space-x-4 justify-between">
              <p>
                  <>
                    Lienfy simplifie le partage d&#39;URL en fournissant une
                    solution de raccourcissement de liens rapide, sécurisée et
                    conviviale. Explorez nos fonctionnalités pour comprendre
                    comment Lienfy peut rendre votre expérience de partage en
                    ligne plus efficace.&quot;
                  </>
              </p>
              <div className="h-[175px] relative w-[28%] md:w-full">
                <img src="images/img_lienfy.png" alt="img_lienfy" />
              </div>
            </div>
          </div>
          <div className="bg-orange-50 flex flex-col gap-[11px] items-center justify-center p-[7px] rounded-[12px] w-[49%] md:w-full">
              <p>
                Facilité
              </p>
              <img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
              <p>
                <>
                  Utilisez notre raccourcisseur d&#39;URL pour rendre vos liens
                  plus faciles à partager. Rassemblez gratuitement des
                  statistiques et des informations sur le trafic généré par vos
                  liens et impressionnez vos cibles avec des liens mémorables et
                  faciles à retenir.
                </>
              </p>
            </div>     
          </div>
          <div className="flex flex gap-[19px] items-center content-center item-stretch justify-around w-full">
            <div className="md:h-[238px] h-[241px] relative w-1/2 md:w-full">
              <div className="absolute bg-orange-50 flex flex-col gap-[9px] h-full inset-[0] items-center justify-center m-auto p-5 rounded-[12px] w-full">
                <p>
                  Optimisation
                </p>
                <img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_maskgroup_49x48.png"
                  alt="maskgroup_One"
                />
              </div>
              <p>
                Une solution pour optimiser l&#39;information face aux limites de caractères posées par certains canaux de communication. Notre plateforme vous aide à élargir l&#39;étendu de votre message et captiver votre cible par des liens simples et attractifs
              </p>
            </div>
            <div className="mt-12 bg-orange-50 flex md:flex-1 flex-col items-center justify-center p-3 rounded-[12px] w-1/2 md:w-full">
              <p>
                Fiabilité
              </p>
              <img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_maskgroup_52x48.png"
                alt="maskgroup_Two"
              />
              <p>
                Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci sont longs et/ou incluent une série de variables ambigu. Lienfy est conçue pour vous aider à renforcer la sécurité de vos privilèges en générant des liens permanents depuis une source fiable.
              </p>
            </div>
          </div>
        </div>
        </section>  
      </>
  );
}
