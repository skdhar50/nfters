import EthereumGreen from "../../assets/icons/ethereum-green.svg";
import Image5 from "../../assets/images/image-5.png";
import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";
import User3 from "../../assets/users/user-3.png";
import User4 from "../../assets/users/user-4.png";

const DiscoverNFTs = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[60px]">
      <div className="container">
        <div className="space-y-[20px] mb-[35px]">
          <p className="text-[34px] font-bold uppercase">Discover more NFTs</p>
          <div>
            <ul className="flex gap-[10px]">
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                All Categories
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Art
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Celebrities
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Gaming
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Sport
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Music
              </li>
              <li className="px-[15px] py-[8px] rounded-full bg-[#DCDCDC] bg-opacity-20 cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out">
                Crypto
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-[30px] flex flex-col justify-center">
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="bg-white p-[10px] space-y-[15px] rounded-lg w-fit">
              <div className="relative">
                <img src={Image5} alt="" className="w-[248px] h-[222px]" />
                <div className="flex -space-x-1.5 items-center absolute left-[10px] -bottom-[15px]">
                  <img
                    src={User1}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full border-2 border-white"
                  />
                  <img
                    src={User2}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full border-2 border-white"
                  />
                  <img
                    src={User3}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full border-2 border-white"
                  />
                  <img
                    src={User4}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="p-[10px] space-y-[20px] divide-y-2 divide-[#F4F4F4]">
                <div className="space-y-[8px]">
                  <p className="text-[20px] font-bold">ArtCrypto</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[3px]">
                      <img src={EthereumGreen} alt="" />
                      <p className="text-[#00AC4F] text-[11px] font-bold">
                        0.25 ETH
                      </p>
                    </div>
                    <p className="text-[#838383] text-[13px]">1 of 321</p>
                  </div>
                </div>
                <div className="flex pt-[10px] justify-between items-center">
                  <p className="text-[#5539A8] text-[11px] bg-[#F5F5F5] px-[10px] py-[3px] rounded-lg">
                    <span className="font-bold">3</span>h{" "}
                    <span className="font-bold">50</span>m{" "}
                    <span className="font-bold">2</span>s left
                  </p>
                  <button
                    type=""
                    className="text-[#4F33A3] text-[16px] font-medium bg-none outline-none"
                  >
                    Place a bid
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type=""
            className="text-[#4F33A3] text-[18px] font-medium border-2 mx-auto border-[#3D00B7] w-[150px] h-[50px] rounded-full"
          >
            More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNFTs;
