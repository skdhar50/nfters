import Image1 from "../../assets/images/image-1.png";
import User1 from "../../assets/users/user-1.png";
import Ethereum from "../../assets/icons/ethereum.svg";
import EthereumGreen from "../../assets/icons/ethereum-green.svg";
import Verified from "../../assets/icons/verify.svg";
import { collectionOver, latestCollections } from "../../utilities/db";

const CollectionOver = () => {
  return (
    <div className="xl:container px-[2rem] py-[5.25rem] xl:py-[6.25rem]">
      <div className="grid grid-cols-3 gap-[1.25rem] xl:gap-[1.875rem]">
        <div className="space-y-[1.25rem]">
          <img
            src={Image1}
            alt="image1"
            className="w-[17rem] h-[21rem] xl:w-[18.75rem] xl:h-[23rem] 2xl:w-full 2xl:h-[26rem]"
          />
          <div className="w-fit flex gap-[1.5rem] justify-between items-center">
            <div className="flex items-center gap-[0.625rem]">
              <img
                src={User1}
                alt="user1"
                className="w-[2rem] h-[2rem] xl:w-[2.8125rem] xl:h-[2.8125rem]"
              />
              <div>
                <p className="text-[1rem] xl:text-[1.25rem] font-bold">
                  The Futr Abstr
                </p>
                <p className="text-[0.625rem] xl:text-[0.875rem] text-[#363639]">
                  10 in the stock
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#3A3A3A] text-[0.625rem] xl:text-[0.75rem]">
                Highest Bid
              </p>
              <div className="flex items-center gap-[0.625rem]">
                <img src={Ethereum} alt="ethereum" />
                <p className="text-[0.875rem] xl:text-[1rem] font-bold text-[#3A3A3A]">
                  0.25 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[1.875rem] border-r border-[#ECECEC] pr-[0.625rem] mr-[0.625rem]">
          {collectionOver?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[1.1rem] xl:gap-[1.25rem]"
            >
              <img
                src={item.bidImage}
                alt=""
                className="w-[7rem] h-[7rem] xl:w-[7.85rem] xl:h-[7.85rem] 2xl:w-[8.75rem] 2xl:h-[8.75rem]"
              />
              <div className="space-y-[1rem]">
                <p className="text-[1.1rem] xl:text-[1.25rem] font-bold">
                  {item.author}
                </p>
                <div className="flex justify-between items-center gap-[0.5rem]">
                  <img
                    src={item.authImage}
                    alt=""
                    className="w-[1.475rem] h-[1.475rem] xl:w-[1.875rem] xl:h-[1.875rem]"
                  />
                  <div className="flex items-center justify-center gap-[0.1875rem] border border-[#00AC4F] rounded-md w-[4.5rem] h-[1.375rem] xl:w-[5rem] xl:h-[1.875rem]">
                    <img
                      src={EthereumGreen}
                      alt="EthereumGreen"
                      className="w-[0.5rem] h-[0.875rem]"
                    />
                    <p className="text-[0.675rem] xl:text-[0.75rem] font-bold text-[#00AC4F]">
                      {item.value} ETH
                    </p>
                  </div>
                  <p className="text-[#757575] text-[0.825rem] xl:text-[0.875rem]">
                    {`${item.currBid} of ${item.total}`}
                  </p>
                </div>
                <button
                  type=""
                  className="btn font-normal text-center text-[0.825rem] xl:text-[0.875rem] w-[5.75rem] h-[2rem] xl:w-[6.25rem] xl:h-[2.1875rem]"
                >
                  Place a bid
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-[0.275rem] 2xl:space-y-[0.625rem]">
          <div>
            <p className="text-[1.1rem] xl:text-[1.25rem] font-integral font-bold uppercase pb-[0.3125rem]">
              Top Collections over
            </p>
            <p className="text-[#3D00B7] text-[1.1rem] xl:text-[1.125rem] font-bold">
              Last 7 days
            </p>
          </div>
          <div className="space-y-[0.625rem] 2xl:space-y-[1rem] divide-y-[0.0625rem]">
            {latestCollections?.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-[1.5625rem] pt-[1rem]"
              >
                <p className="text-[1.2rem] xl:text-[1.5rem] font-bold">
                  {index + 1}
                </p>
                <div className="relative">
                  <img
                    src={item.collectionImage}
                    alt=""
                    className="w-[2.5rem] h-[2.5rem] xl:w-[3.75rem] xl:h-[3.75rem]"
                  />
                  {item.isVerified && (
                    <img
                      src={Verified}
                      alt=""
                      className="absolute top-0 -right-2.5 w-[1.375rem] h-[1.375rem] xl:w-[1.625rem] xl:h-[1.625rem]"
                    />
                  )}
                </div>
                <div className="space-y-[0.3125rem]">
                  <p className="text-[0.8rem] xl:text-[1rem] font-medium">
                    {item.collectionName}
                  </p>
                  <div className="flex justify-center items-center gap-[0.3125rem]">
                    <img src={Ethereum} alt="" />
                    <p className="text-[#636363] text-[0.625rem] xl:text-[0.875rem]">
                      {item.bid}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-[1rem] xl:text-[1.25rem] font-medium ${
                    item.isIncreasing ? "text-[#14C8B0]" : "text-[#FF002E]"
                  }`}
                >
                  {item.valueStatus}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionOver;
