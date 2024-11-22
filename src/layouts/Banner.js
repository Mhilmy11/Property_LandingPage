import Container from "../components/Container";
import HouseImage from "../assets/dreamhome.png";
import HouseImage1 from "../assets/banner1.jpg";
import HouseImage2 from "../assets/banner2.jpg";
import HouseImage3 from "../assets/banner3.jpg";
import HouseImage4 from "../assets/banner4.jpg";
import { useEffect, useState } from "react";

export default function Banner({ scrollButton }) {
  const images = [
    HouseImage,
    HouseImage1,
    HouseImage2,
    HouseImage3,
    HouseImage4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className=" flex justify-center items-center w-full h-screen bg-gradient-to-br from-hejo-10 to-donk-20">
        <Container>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-left">
              <h1 className="text-5xl font-bold leading-tight text-donk-10">
                Help find your <br />
                <span>dream Home.</span>
              </h1>
              <p className="mt-4 text-lg text-donk-10">
                <span className="font-semibold">YourProperty</span> is here to
                find the best house for you, to sell or rent with a trusted
                source.
              </p>
              <button
                onClick={scrollButton}
                className="mt-6 px-6 py-3 bg-donk-10 text-hejo-10 text-lg font-semibold rounded-md shadow hover:bg-hejo-10 hover:text-donk-10 transition duration-300"
              >
                Find Home
              </button>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 opacity-30 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-gradient-to-bl from-green-400 to-green-200 opacity-30 blur-2xl"></div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[524px] h-[338px]">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className={`absolute w-full h-full object-cover rounded-xl shadow-lg transition-all duration-1000 ${
                        index === currentImageIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
