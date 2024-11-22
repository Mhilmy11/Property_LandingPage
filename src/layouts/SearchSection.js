import BackImage from "../assets/searchsection.png";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function SearchSection() {
  const [homeType, setIsHomeType] = useState(false);
  const [priceRange, setIsPriceRange] = useState(false);
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src={BackImage}
          alt="section-search"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" text-center">
            <div>
              <h2 className=" text-hejo-10 text-[48px] font-bold">
                Find your dream home!
              </h2>
            </div>

            <div className=" flex justify-center">
              <p className=" text-white text-[24px] w-[550px]">
                Now you can save your time with hundreds of homes for you
              </p>
            </div>

            <div className=" pt-4">
              <div className=" bg-hejo-10 rounded-full shadow-lg flex items-center p-3">
                <div className="flex space-x-8 text-donk-10 font-semibold px-4">
                  <button className="hover:text-donk-20">Sell</button>
                  <button className="hover:text-donk-20">Rent</button>
                  <button className="hover:text-donk-20">New Property</button>
                </div>

                <div className="border-l border-donk-10 mx-4 h-8"></div>

                <div className="flex space-x-4 items-center">
                  <div className=" text-donk-10">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className=" flex items-center w-full justify-center gap-x-1.5 px-3 py-2 hover:text-donk-30 font-semibold"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={() => setIsHomeType((prev) => !prev)}
                        >
                          Home Type
                          <IoIosArrowDown />
                        </button>
                      </div>
                      {homeType && (
                        <div
                          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <div role="none">
                            <button
                              className="block hover:bg-slate-300 hover:rounded-md px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                            >
                              Type 34
                            </button>
                            <button
                              className="block hover:bg-slate-300 hover:rounded-md px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-1"
                            >
                              Type 21
                            </button>
                            <button
                              className="block hover:bg-slate-300 hover:rounded-md px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-2"
                            >
                              Type 36
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className=" text-donk-10">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className=" flex items-center w-full justify-center gap-x-1.5 px-3 py-2 hover:text-donk-30 font-semibold"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={() => setIsPriceRange((prev) => !prev)}
                        >
                          Price Range
                          <IoIosArrowDown />
                        </button>
                      </div>
                      {priceRange && (
                        <div
                          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <div role="none">
                            <button
                              className="block hover:bg-slate-400 px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                            >
                              High End
                            </button>
                            <button
                              className="block hover:bg-slate-400 px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-1"
                            >
                              Mid End
                            </button>
                            <button
                              className="block hover:bg-slate-400 px-4 py-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-2"
                            >
                              Low End
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-l border-donk-10 mx-4 h-8"></div>

                <input
                  type="text"
                  placeholder="Search YourProperty"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white text-donk-10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-donk-10"
                />

                <button className=" flex items-center px-6 py-2 bg-donk-10 text-hejo-10 font-medium rounded-r-full hover:bg-donk-20">
                  <MdOutlineSearch size={20} />
                  <span className="ml-2">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
