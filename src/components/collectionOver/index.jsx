import Image1 from "../../assets/images/image-1.png";
import Image2 from "../../assets/images/image-2.png";
import Image3 from "../../assets/images/image-3.png";
import Image4 from "../../assets/images/image-4.png";
import Collection1 from "../../assets/images/collection1.png";
import Collection2 from "../../assets/images/collection2.png";
import Collection3 from "../../assets/images/collection3.png";
import Collection4 from "../../assets/images/collection4.png";
import Collection5 from "../../assets/images/collection5.png";
import User1 from "../../assets/users/user-1.png";
import Ethereum from "../../assets/icons/ethereum.svg";
import EthereumGreen from "../../assets/icons/ethereum-green.svg";

const CollectionOver = () => {
  return (
    <div className="container py-[100px]">
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="space-y-[20px]">
          <img src={Image1} alt="image1" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <img src={User1} alt="user1" className="w-[45px] h-[45px]" />
              <div>
                <p className="text-[20px] font-bold">The Futr Abstr</p>
                <p className="text-[14px] text-[#363639]">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-[#3A3A3A] text-[12px]">Highest Bid</p>
              <div className="flex items-center gap-[10px]">
                <img src={Ethereum} alt="ethereum" />
                <p className="text-[16px] font-bold text-[#3A3A3A]">0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[30px] border-r border-[#ECECEC] pr-[10px] mr-[10px]">
          <div className="flex items-center gap-[20px]">
            <img src={Image2} alt="" className="w-[140px] h-[140px]" />
            <div className="space-y-[15px]">
              <p className="text-[20px] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[8px]">
                <img src={User1} alt="" className="w-[30px] h-[30px]" />
                <div className="flex items-center justify-center gap-[3px] border border-[#00AC4F] rounded-md w-[80px] h-[30px]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[8px] h-[14px]"
                  />
                  <p className="text-[12px] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[14px]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[14px] w-[100px] h-[35px] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src={Image3} alt="" className="w-[140px] h-[140px]" />
            <div className="space-y-[15px]">
              <p className="text-[20px] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[8px]">
                <img src={User1} alt="" className="w-[30px] h-[30px]" />
                <div className="flex items-center justify-center gap-[3px] border border-[#00AC4F] rounded-md w-[80px] h-[30px]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[8px] h-[14px]"
                  />
                  <p className="text-[12px] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[14px]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[14px] w-[100px] h-[35px] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src={Image4} alt="" className="w-[140px] h-[140px]" />
            <div className="space-y-[15px]">
              <p className="text-[20px] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[8px]">
                <img src={User1} alt="" className="w-[30px] h-[30px]" />
                <div className="flex items-center justify-center gap-[3px] border border-[#00AC4F] rounded-md w-[80px] h-[30px]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[8px] h-[14px]"
                  />
                  <p className="text-[12px] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[14px]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[14px] w-[100px] h-[35px] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[20px] font-bold uppercase">
            Top Collections over
          </p>
          <p className="text-[#3D00B7] text-[18px] font-bold">Last 7 days</p>
          <div className="space-y-[15px] divide-y-[1px]">
            <div className="flex items-center gap-[25px] pt-[15px]">
              <p className="text-[24px] font-bold">1</p>
              <div>
                <img src={Collection1} alt="" className="w-[60px] h-[60px]" />
              </div>
              <div className="space-y-[5px]">
                <p className="text-[16px] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[14px]">19,769.39</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-[#14C8B0]">+26.52%</p>
            </div>
            <div className="flex items-center gap-[25px] pt-[15px]">
              <p className="text-[24px] font-bold">2</p>
              <div>
                <img src={Collection2} alt="" className="w-[60px] h-[60px]" />
              </div>
              <div className="space-y-[5px]">
                <p className="text-[16px] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[14px]">19,769.39</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-[#14C8B0]">+26.52%</p>
            </div>
            <div className="flex items-center gap-[25px] pt-[15px]">
              <p className="text-[24px] font-bold">3</p>
              <div>
                <img src={Collection3} alt="" className="w-[60px] h-[60px]" />
              </div>
              <div className="space-y-[5px]">
                <p className="text-[16px] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[14px]">19,769.39</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-[#14C8B0]">+26.52%</p>
            </div>
            <div className="flex items-center gap-[25px] pt-[15px]">
              <p className="text-[24px] font-bold">4</p>
              <div>
                <img src={Collection4} alt="" className="w-[60px] h-[60px]" />
              </div>
              <div className="space-y-[5px]">
                <p className="text-[16px] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[14px]">19,769.39</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-[#14C8B0]">+26.52%</p>
            </div>
            <div className="flex items-center gap-[25px] pt-[15px]">
              <p className="text-[24px] font-bold">5</p>
              <div>
                <img src={Collection5} alt="" className="w-[60px] h-[60px]" />
              </div>
              <div className="space-y-[5px]">
                <p className="text-[16px] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[5px]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[14px]">19,769.39</p>
                </div>
              </div>
              <p className="text-[20px] font-medium text-[#14C8B0]">+26.52%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionOver;
