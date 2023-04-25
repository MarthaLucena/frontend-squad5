import Navbar from "../assets/components/Navbar/Navbar";
import Footer from "../assets/components/Footer/Footer";
import Banner from "../assets/components/Banner/Banner";
import Portal from "../assets/components/Contatos/Portal";
import Central from "../assets/components/Contatos/Central";

function Contato() {
  return (
    <main>
      <Navbar />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L30,240C60,256,120,288,180,272C240,256,300,192,360,154.7C420,117,480,107,540,138.7C600,171,660,245,720,245.3C780,245,840,171,900,160C960,149,1020,203,1080,218.7C1140,235,1200,213,1260,197.3C1320,181,1380,171,1410,165.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <Portal />
      <Central />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L30,112C60,128,120,160,180,197.3C240,235,300,277,360,250.7C420,224,480,128,540,117.3C600,107,660,181,720,197.3C780,213,840,171,900,170.7C960,171,1020,213,1080,234.7C1140,256,1200,256,1260,256C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <Footer />
    </main>
  );
}

export default Contato;
