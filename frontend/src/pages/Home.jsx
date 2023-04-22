import Banner from "../assets/components/Banner/Banner";
import Navbar from "../assets/components/Navbar/Navbar";
import MyParallax from "../assets/components/Parallax/Parallax";
import Footer from "../assets/components/Footer/Footer";
function Home() {
  return (
    <div>
      <main className="principal">
        <Navbar />
        <Banner />
        <MyParallax />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
