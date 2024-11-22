import Container from "../components/Container";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailOutline, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { PiCopyright } from "react-icons/pi";

export default function SectionQuestion() {
  return (
    <>
      <div className=" bg-gradient-to-br from-hejo-10 to-donk-20 h-screen">
        <Container>
          <div className=" flex justify-between items-center h-screen">
            <div>
              <div className=" text-[48px] font-semibold mb-4">
                <h2>Need Consultation..?</h2>
                <h2>Please contact us</h2>
                <h2>We are ready to help</h2>
              </div>
              <h3 className=" text-[18px] font-semibold mb-3">Contact</h3>
              <div className=" flex items-center">
                <MdOutlineMapsHomeWork size={20} />
                <p className=" ml-3 text-[16px]">
                  Jl. Pelajar Pejuang 123 Majalaya Bandung{" "}
                </p>
              </div>
              <div className=" flex items-center my-1">
                <GiRotaryPhone size={20} />
                <p className=" ml-3 text-[16px]">022-6545-2041</p>
              </div>
              <div className=" flex items-center">
                <IoMailOutline size={20} />
                <p className=" ml-3 text-[16px]">yourproperty@gmail.com</p>
              </div>
              <h3 className=" text-[18px] font-semibold mt-5">Social Media</h3>
              <div className=" flex gap-4 items-center">
                <IoLogoTwitter size={20} />
                <IoLogoInstagram size={20} />
                <p>YourProperty</p>
              </div>
              <div className=" mt-6 font-extralight text-[12px] text-donk-10 flex items-center justify-center gap-1 italic">
                <PiCopyright />
                <p>2024 All rights reserved by Muhammad Hilmy</p>
              </div>
            </div>

            <div className=" bg-white w-[580px] h-[445px] rounded-md flex justify-center items-center">
              <div className=" p-10 w-full">
                <h3 className=" text-center text-[40px] text-donk-30 font-semibold mb-6">
                  Any Question..?
                </h3>

                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Enter your email here"
                      className="w-full p-3 border border-gray-300 rounded-md bg-gray-200 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      placeholder="Your question..."
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md bg-gray-200 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full py-3 bg-donk-10 text-hejo-10 rounded-md font-semibold text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
