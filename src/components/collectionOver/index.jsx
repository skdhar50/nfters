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
    <div className="container py-[6.25rem]">
      <div className="grid grid-cols-3 gap-[1.875rem]">
        <div className="space-y-[1.25rem]">
          <img src={Image1} alt="image1" />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[0.625rem]">
              <img
                src={User1}
                alt="user1"
                className="w-[2.8125rem] h-[2.8125rem]"
              />
              <div>
                <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
                <p className="text-[0.875rem] text-[#363639]">
                  10 in the stock
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#3A3A3A] text-[0.75rem]">Highest Bid</p>
              <div className="flex items-center gap-[0.625rem]">
                <img src={Ethereum} alt="ethereum" />
                <p className="text-[1rem] font-bold text-[#3A3A3A]">0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[1.875rem] border-r border-[#ECECEC] pr-[0.625rem] mr-[0.625rem]">
          <div className="flex items-center gap-[1.25rem]">
            <img src={Image2} alt="" className="w-[8.75rem] h-[8.75rem]" />
            <div className="space-y-[1rem]">
              <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[0.5rem]">
                <img src={User1} alt="" className="w-[1.875rem] h-[1.875rem]" />
                <div className="flex items-center justify-center gap-[0.1875rem] border border-[#00AC4F] rounded-md w-[5rem] h-[1.875rem]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                  <p className="text-[0.75rem] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[0.875rem] w-[6.25rem] h-[2.1875rem] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[1.25rem]">
            <img src={Image3} alt="" className="w-[8.75rem] h-[8.75rem]" />
            <div className="space-y-[1rem]">
              <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[0.5rem]">
                <img src={User1} alt="" className="w-[1.875rem] h-[1.875rem]" />
                <div className="flex items-center justify-center gap-[0.1875rem] border border-[#00AC4F] rounded-md w-[5rem] h-[1.875rem]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                  <p className="text-[0.75rem] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[0.875rem] w-[6.25rem] h-[2.1875rem] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[1.25rem]">
            <img src={Image4} alt="" className="w-[8.75rem] h-[8.75rem]" />
            <div className="space-y-[1rem]">
              <p className="text-[1.25rem] font-bold">The Futr Abstr</p>
              <div className="flex justify-between items-center gap-[0.5rem]">
                <img src={User1} alt="" className="w-[1.875rem] h-[1.875rem]" />
                <div className="flex items-center justify-center gap-[0.1875rem] border border-[#00AC4F] rounded-md w-[5rem] h-[1.875rem]">
                  <img
                    src={EthereumGreen}
                    alt="EthereumGreen"
                    className="w-[0.5rem] h-[0.875rem]"
                  />
                  <p className="text-[0.75rem] font-bold text-[#00AC4F]">
                    0.25 ETH
                  </p>
                </div>
                <p className="text-[#757575] text-[0.875rem]">1 of 8</p>
              </div>
              <button
                type=""
                className="bg-[#3D00B7] text-[#FFFFFF] text-[0.875rem] w-[6.25rem] h-[2.1875rem] rounded-full"
              >
                Place a bid
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-[0.625rem]">
          <div>
            <p className="text-[1.25rem] font-integral font-bold uppercase pb-[0.3125rem]">
              Top Collections over
            </p>
            <p className="text-[#3D00B7] text-[1.125rem] font-bold">
              Last 7 days
            </p>
          </div>
          <div className="space-y-[1rem] divide-y-[0.0625rem]">
            <div className="flex items-center gap-[1.5625rem] pt-[1rem]">
              <p className="text-[1.5rem] font-bold">1</p>
              <div>
                <img
                  src={Collection1}
                  alt=""
                  className="w-[3.75rem] h-[3.75rem]"
                />
              </div>
              <div className="space-y-[0.3125rem]">
                <p className="text-[1rem] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[0.3125rem]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[0.875rem]">19,769.39</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-medium text-[#14C8B0]">
                +26.52%
              </p>
            </div>
            <div className="flex items-center gap-[1.5625rem] pt-[1rem]">
              <p className="text-[1.5rem] font-bold">2</p>
              <div>
                <img
                  src={Collection2}
                  alt=""
                  className="w-[3.75rem] h-[3.75rem]"
                />
              </div>
              <div className="space-y-[0.3125rem]">
                <p className="text-[1rem] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[0.3125rem]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[0.875rem]">19,769.39</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-medium text-[#14C8B0]">
                +26.52%
              </p>
            </div>
            <div className="flex items-center gap-[1.5625rem] pt-[1rem]">
              <p className="text-[1.5rem] font-bold">3</p>
              <div>
                <img
                  src={Collection3}
                  alt=""
                  className="w-[3.75rem] h-[3.75rem]"
                />
              </div>
              <div className="space-y-[0.3125rem]">
                <p className="text-[1rem] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[0.3125rem]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[0.875rem]">19,769.39</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-medium text-[#14C8B0]">
                +26.52%
              </p>
            </div>
            <div className="flex items-center gap-[1.5625rem] pt-[1rem]">
              <p className="text-[1.5rem] font-bold">4</p>
              <div>
                <img
                  src={Collection4}
                  alt=""
                  className="w-[3.75rem] h-[3.75rem]"
                />
              </div>
              <div className="space-y-[0.3125rem]">
                <p className="text-[1rem] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[0.3125rem]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[0.875rem]">19,769.39</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-medium text-[#14C8B0]">
                +26.52%
              </p>
            </div>
            <div className="flex items-center gap-[1.5625rem] pt-[1rem]">
              <p className="text-[1.5rem] font-bold">5</p>
              <div>
                <img
                  src={Collection5}
                  alt=""
                  className="w-[3.75rem] h-[3.75rem]"
                />
              </div>
              <div className="space-y-[0.3125rem]">
                <p className="text-[1rem] font-medium">CryptoFunks</p>
                <div className="flex justify-center items-center gap-[0.3125rem]">
                  <img src={Ethereum} alt="" />
                  <p className="text-[#636363] text-[0.875rem]">19,769.39</p>
                </div>
              </div>
              <p className="text-[1.25rem] font-medium text-[#14C8B0]">
                +26.52%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionOver;
