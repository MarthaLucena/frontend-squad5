import Banner from "../../assets/components/Banner/Banner";
import MyParallax from "../../assets/components/Parallax/Parallax";
import Navbar from "../../assets/components/Navbar/Navbar";
import Footer from "../../assets/components/Footer/Footer"
import Historia from "../Historia/História";
function Home() {
  return (
    <div>
      <main className="principal">
        <Navbar />
        <Banner />
        <Historia />
        <MyParallax />
        <Footer/>
      </main>
    </div>
  );
}

export default Home;
