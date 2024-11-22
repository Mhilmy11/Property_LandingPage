import { useState, useEffect } from "react";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/c/4025-71c6-4aac-a1ba"
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button className=" grid grid-cols-3 gap-5">
        {data.map((data, i) => (
          <div
            key={i}
            className=" w-[348px] h-[437px] bg-white hover:bg-hejo-10 hover:scale-105 transition duration-300 rounded-[20px] flex justify-center"
          >
            <div className=" text-left p-3 flex flex-col justify-between">
              <div>
                <img
                  className=" w-[318px] h-[240px] rounded-xl"
                  src={data.image}
                  alt={data.id}
                />
                <h5 className=" text-[24px] font-semibold">{data.price}</h5>
                <p className=" text-[14px]">{data.address}</p>
                <p className=" text-[14px] text-red-500">{data.status}</p>
              </div>
              <div className=" flex justify-between items-center">
                <div className=" text-donk-20">
                  <div className=" flex items-center">
                    <FaBed size={25} />
                    <p className=" text-[14px] ml-1 font-semibold">
                      {data.spesification.bedroom}
                    </p>
                  </div>
                  <p className=" text-[12px]">Bedroom</p>
                </div>
                <div className=" text-donk-20">
                  <div className=" flex items-center">
                    <MdBathtub size={25} />
                    <p className=" text-[14px] ml-1 font-semibold">
                      {data.spesification.bathroom}
                    </p>
                  </div>
                  <p className=" text-[12px]">Bathroom</p>
                </div>
                <div className=" text-donk-20">
                  <div className=" flex items-center">
                    <TiArrowMaximiseOutline size={25} />
                    <p className=" text-[14px] ml-1 font-semibold">
                      {data.spesification.surface}
                    </p>
                  </div>
                  <p className=" text-[12px]">Surface area</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </button>
    </>
  );
}
