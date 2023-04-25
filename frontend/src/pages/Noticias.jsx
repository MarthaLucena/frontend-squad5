import Navbar from "../assets/components/Navbar/Navbar";
import Principal from "../assets/components/Noticias/Principal";
import Secundaria from "../assets/components/Noticias/CardNoticia/Cards";
import Footer from "../assets/components/Footer/Footer";

function Noticias() {
  return (
    <body>
      <Navbar />
      <Principal/>
      <Secundaria/>
      <Footer />
    </body>
  );
}

export default Noticias;
