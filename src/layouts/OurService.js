import Container from "../components/Container";
import NewProperty from "../assets/newproperty.png";
import RentProperty from "../assets/rentproperty.png";
import BuyProperty from "../assets/buyproperty.png";

export default function OurService() {
  return (
    <>
      <div className=" bg-hejo-20 w-full h-screen">
        <Container>
          <div className=" text-center pt-12">
            <h1 className=" font-bold text-[48px] text-hejo-10">Our Service</h1>
          </div>
          <div className=" text-center pt-3">
            <p className=" font-bold">
              YourProperty{" "}
              <span className=" font-normal">
                is here to be a solution for you
              </span>
            </p>
          </div>
          <div className=" flex gap-3 pt-8">
            <div className=" bg-gradient-to-tr from-donk-20 to-hejo-20 w-[350px] h-[300px] rounded-lg text-center hover:scale-105 transition duration-300">
              <div className=" flex justify-center pt-4">
                <div className=" w-[100px] h-[100px] bg-hejo-10 rounded-full">
                  <img src={NewProperty} alt="" />
                </div>
              </div>
              <div className=" py-5">
                <h4 className=" text-[24px] font-bold">New Property</h4>
              </div>
              <div className=" flex justify-center">
                <p className=" text-[14px] w-[300px]">
                  Dream house come true, buy a house with the best facilities in
                  a comfortable environment
                </p>
              </div>
            </div>

            <div className=" bg-gradient-to-t from-donk-10 to-hejo-20 w-[350px] h-[300px] rounded-lg text-center hover:scale-105 transition duration-300">
              <div className=" flex justify-center pt-4">
                <div className=" w-[100px] h-[100px] bg-hejo-10 rounded-full">
                  <img src={RentProperty} alt="" />
                </div>
              </div>
              <div className=" py-5">
                <h4 className=" text-[24px] font-bold text-hejo-10">
                  Rent Property
                </h4>
              </div>
              <div className=" flex justify-center">
                <p className=" text-[14px] w-[300px] text-white">
                  Rent a beautiful house for your family, the best choice for
                  your family's place to live
                </p>
              </div>
            </div>

            <div className=" bg-gradient-to-tl from-hejo-10 to-hejo-20 w-[350px] h-[300px] rounded-lg text-center hover:scale-105 transition duration-300">
              <div className=" flex justify-center pt-4">
                <div className=" w-[100px] h-[100px] bg-hejo-10 rounded-full">
                  <img src={BuyProperty} alt="" />
                </div>
              </div>
              <div className=" py-5">
                <h4 className=" text-[24px] font-bold">Buy Property</h4>
              </div>
              <div className=" flex justify-center">
                <p className=" text-[14px] w-[300px]">
                  Buy a house at an affordable price, the best quality and with
                  a trusted source
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
