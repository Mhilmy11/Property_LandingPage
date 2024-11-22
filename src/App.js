import "./App.css";
import Banner from "./layouts/Banner";
import CardSection from "./layouts/CardSection";
import Container from "./components/Container";
import OurService from "./layouts/OurService";
import SearchSection from "./layouts/SearchSection";
import HouseFeatures from "./layouts/HouseFeatures";
import SectionQuestion from "./layouts/SectionQuestion";
import DisplayPicture from "./assets/newproperty.png";
import { useRef } from "react";

function App() {
  const home = useRef(null);
  const ourService = useRef(null);
  const recommended = useRef(null);
  const features = useRef(null);
  const contact = useRef(null);
  const findHome = useRef(null);

  const ourServiceButton = () => {
    ourService.current?.scrollIntoView({ behavior: "smooth" });
  };

  const findHomeButton = () => {
    findHome.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactButton = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };

  const featuresButton = () => {
    features.current?.scrollIntoView({ behavior: "smooth" });
  };

  const recommendedButton = () => {
    recommended.current?.scrollIntoView({ behavior: "smooth" });
  };

  const homeButton = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className=" fixed w-full z-50">
        <Container>
          <div className=" flex justify-between items-center text-donk-10 py-5">
            <div>
              <button onClick={homeButton} className=" flex items-center gap-2">
                <img
                  className=" w-[45px] h-[45px] rounded-full bg-hejo-10"
                  src={DisplayPicture}
                  alt=""
                />
                <h1 className=" font-bold text-xl">YourProperty</h1>
              </button>
            </div>
            <div className=" flex items-center gap-10 text-[16px] font-semibold">
              <button onClick={ourServiceButton}>Service</button>
              <button
                onClick={recommendedButton}
                className=" hover:text-red-600"
              >
                RECOMMENDED!
              </button>
              <button onClick={featuresButton}>Features</button>
              <button onClick={contactButton}>Contact</button>
            </div>
            <div className=" flex items-center gap-8 text-[16px]">
              <button className=" font-semibold">Register</button>
              <button className=" bg-hejo-10 w-[133px] h-[40px] hover:bg-donk-10 hover:text-hejo-10 transition duration-300 rounded-xl text-donk-10 font-bold">
                Login
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <section ref={home}>
        <Banner scrollButton={findHomeButton} />
      </section>

      <section ref={ourService}>
        <OurService />
      </section>

      <section ref={findHome}>
        <SearchSection />
      </section>

      <section ref={recommended}>
        <CardSection />
      </section>

      <section ref={features}>
        <HouseFeatures />
      </section>

      <section ref={contact}>
        <SectionQuestion />
      </section>
    </>
  );
}

export default App;
