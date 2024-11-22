import Slider from "react-slick";
import Container from "../components/Container";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/slide1.png";
import Image2 from "../assets/slide2.png";
import Image3 from "../assets/slide3.png";
import Image4 from "../assets/slide4.png";
import Image5 from "../assets/slide5.jpg";
import Image6 from "../assets/slide6.jpg";
import Image7 from "../assets/slide7.jpg";
import Image8 from "../assets/slide8.jpg";

export default function HouseFeatures() {
  const cards = [
    {
      image: Image1,
      title: "image1",
    },
    {
      image: Image2,
      title: "image2",
    },
    {
      image: Image3,
      title: "image3",
    },
    {
      image: Image4,
      title: "image4",
    },
    {
      image: Image5,
      title: "image5",
    },
    {
      image: Image6,
      title: "image6",
    },
    {
      image: Image7,
      title: "image7",
    },
    {
      image: Image8,
      title: "image8",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" bg-gradient-to-r from-donk-10 via-white to-donk-30">
        <Container>
          <div className=" flex justify-between items-center pt-10">
            <h2 className=" text-[48px] font-semibold">House Features</h2>
            <button className=" bg-donk-10 text-hejo-10 w-[238px] h-[63px] text-[20px] hover:bg-hejo-10 hover:text-donk-10 duration-150 rounded-full flex items-center justify-center">
              See All....
              <IoIosArrowForward className=" ml-10" />
            </button>
          </div>
        </Container>

        <div className="relative py-10">
          <Container>
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div key={index} className="px-4">
                  <div className="relative overflow-hidden hover:scale-105 transition duration-500">
                    <img
                      src={card.image}
                      alt={card.title}
                      className=" w-[340px] h-[480px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
      </div>
    </>
  );
}
