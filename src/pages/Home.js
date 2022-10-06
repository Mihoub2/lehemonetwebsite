import { Link } from "react-router-dom";
import Form from "../component/Form";
import "../styles/home.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="firstContainer">
        <div className="topFirstContainer">
          <p className="firstContainerTitle">
            AGENCE EN STRATÉGIE DIGITALE ET COMMUNITY MANAGEMENT
          </p>
        </div>
        <div className="botFirstContainer">
          <li>
            <Link to="/services">
              <button className="homeButton1">NOS SERVICES</button>
            </Link>
            <Link to="/contact">
              <button className="homeButton2">NOUS CONTACTER</button>
            </Link>
          </li>
        </div>
      </div>
      <div className="secondContainer">
        <div className="topSecondContainer">
          <h1>NOS SERVICES</h1>
          <p className="subTitle">
            Une offre de services en stratégie digitale
          </p>
        </div>
        <div className="botSecondContainer">
          <div className="card">
            <div className="icon1">
              <img className="icon" src={icon1} alt="" />
            </div>
            <p className="firstTitleHome">COMMUNITY MANAGEMENT</p>
            <p className="textInCard">
              Gestion de la présence de votre marque sur les réseaux sociaux :
              Facebook, Instagram, Twitter, Pinterest, etc.
            </p>
          </div>
          <div className="card">
            <div className="icon2">
              <img className="icon" src={icon2} alt="" />
            </div>
            <p className="secondTitleHome">CRÉATION DE NEWSLETTERS</p>
            <p className="textInCard">
              Création graphique, rédaction et envoi de vos newsletters.
            </p>
          </div>
          <div className="card">
            <div className="icon3">
              <img className="icon" src={icon3} alt="" />
            </div>
            <p className="thirdTitleHome">CRÉATION DE CONTENUS</p>
            <p className="textInCard">
              Création de contenus pour vos réseaux sociaux : contenus
              graphiques, contenus visuels, contenus rédactionnels.
            </p>
          </div>
          <div className="card">
            <div className="icon4">
              <img className="icon" src={icon4} alt="" />
            </div>
            <p className="fourthTitleHome">RÉDACTION WEB</p>
            <p className="textInCard">
              Rédaction de vos contenus à destination web : articles de blogs,
              documents web, fiches produits, etc.
            </p>
          </div>
        </div>
      </div>
      <div className="thirdContainer">
        <div>
          <p className="thirdContainerTitle">
            Découvrez les marques et les entreprises qui nous font confiance.
          </p>
          <button className="homeButton3">Références</button>
        </div>
      </div>
      <div className="fourthContainer">
        <div className="leftFourthContainer">
          <p className="leftFourthText">
            Qui est derrière l'Agence LeHemonet ?
          </p>
        </div>
        <div className="middleFourthContainer">
          <p className="middleFourthText">
            Si vous êtes sur cette page, c’est que vous cherchez quelqu'un pour
            vous accompagner dans le développement de votre stratégie digitale.
            Que votre entreprise soit en phase de lancement, ou déjà bien
            installée sur les réseaux sociaux, vous êtes sur la bonne page.
            Bienvenue, et enchantée ! Je m’appelle Morgane Le Hémonet, et je
            suis basée en région parisienne. Je propose, depuis 2014, mes
            services en community management, rédaction web, création de
            contenus et stratégie digitale de manière générale.
          </p>
        </div>
        <div className="rightFourthContainer">
          <div className="fourthCard">
            <p className="leftCircle">100</p>
            <div>
              <p className="fourthCardTitle">EXPERTISE DU WEB</p>
              <p className="fourthCardText">
                Maîtrise du web, des réseaux sociaux et des outils de
                communication éditoriale web
              </p>
            </div>
          </div>
          <div className="fourthCard">
            <p className="leftCircle">100</p>
            <div>
              <p className="fourthCardTitle">
                OUTILS D'AIDE AU COMMUNITY MANAGEMENT
              </p>
              <p className="fourthCardText">
                Hootsuite, Agorapulse, Buffer, Social shaker, etc.
              </p>
            </div>
          </div>
          <div className="fourthCard">
            <p className="leftCircle">90</p>
            <div>
              <p className="fourthCardTitle">SUITE ADOBE</p>
              <p className="fourthCardText">Photoshop, InDesign</p>
            </div>
          </div>
          <div className="fourthCard">
            <p className="leftCircle">95</p>
            <div>
              <p className="fourthCardTitle">OUTILS DE BUREAUTIQUE</p>
              <p className="fourthCardText">Word, Excel et Powerpoint</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifthContainer">
        <div className="inFifthContainer">
          <p className="fifthText">
            Pour obtenir un devis, contactez-nous par e-mail ou via le
            formulaire de contact ci-dessous.
          </p>
          <button className="homeButton4">ENVOYER UN E-MAIL</button>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Home;
