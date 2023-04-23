import Banner from "../assets/components/Banner/Banner";
import Navbar from "../assets/components/Navbar/Navbar";
import Principal from "../assets/components/Noticias/Principal";
import Footer from "../assets/components/Footer/Footer";

function Noticias() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Principal/>
      <Footer />
    </div>
  );
}

export default Noticias;
