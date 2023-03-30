import EthereumGreen from "../../assets/icons/ethereum-green.svg";
import Image5 from "../../assets/images/image-5.png";
import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";
import User3 from "../../assets/users/user-3.png";
import User4 from "../../assets/users/user-4.png";

const DiscoverNFTs = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[3.75rem]">
      <div className="container">
        <div className="space-y-[1.25rem] mb-[2.1875rem]">
          <p className="text-[2.125rem] font-integral font-bold uppercase">
            Discover more NFTs
          </p>
          <div>
            <ul className="flex gap-[0.625rem]">
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                All Categories
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Art
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Celebrities
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Gaming
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Sport
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Music
              </li>
              <li className="px-[1rem] py-[0.5rem] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Crypto
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-[1.875rem] flex flex-col justify-center">
          <div className="grid grid-cols-4 gap-[1.25rem]">
            <div className="bg-white p-[0.625rem] space-y-[1rem] rounded-lg w-fit">
              <div className="relative">
                <img
                  src={Image5}
                  alt=""
                  className="w-[15.5rem] h-[13.875rem]"
                />
                <div className="flex -space-x-1.5 items-center absolute left-[0.625rem] -bottom-[1rem]">
                  <img
                    src={User1}
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
                  />
                  <img
                    src={User2}
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
                  />
                  <img
                    src={User3}
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
                  />
                  <img
                    src={User4}
                    alt=""
                    className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="p-[0.625rem] space-y-[1.25rem] divide-y-2 divide-[#F4F4F4]">
                <div className="space-y-[0.5rem]">
                  <p className="text-[1.25rem] font-bold">ArtCrypto</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[0.1875rem]">
                      <img src={EthereumGreen} alt="" />
                      <p className="text-[#00AC4F] text-[0.6875rem] font-bold">
                        0.25 ETH
                      </p>
                    </div>
                    <p className="text-[#838383] text-[0.8125rem]">1 of 321</p>
                  </div>
                </div>
                <div className="flex pt-[0.625rem] justify-between items-center">
                  <p className="text-[#5539A8] text-[0.6875rem] bg-[#F5F5F5] px-[0.625rem] py-[0.1875rem] rounded-lg">
                    <span className="font-bold">3</span>h{" "}
                    <span className="font-bold">50</span>m{" "}
                    <span className="font-bold">2</span>s left
                  </p>
                  <button
                    type=""
                    className="text-[#4F33A3] text-[1rem] font-medium bg-none outline-none"
                  >
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type=""
            className="btn-outlined text-[18px] w-[150px] h-[50px] "
          >
            More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNFTs;
