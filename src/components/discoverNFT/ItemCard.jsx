import EthereumGreen from "../../assets/icons/ethereum-green.svg";
import Countdown from "../countdown";

const ItemCard = ({ image, users, collectionName, value, bids, totalBids }) => {
  return (
    <div className="bg-white p-[0.625rem] space-y-[1rem] rounded-lg w-fit">
      <div className="relative">
        <img src={image} alt="" className="w-[15.5rem] h-[13.875rem]" />
        <div className="flex -space-x-1.5 items-center absolute left-[0.625rem] -bottom-[1rem]">
          {users?.map((user, index) => (
            <img
              key={index}
              src={user}
              alt=""
              className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
      <div className="p-[0.625rem] space-y-[1.25rem] divide-y-2 divide-[#F4F4F4]">
        <div className="space-y-[0.5rem]">
          <p className="text-[1.25rem] font-bold">{collectionName}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[0.1875rem]">
              <img src={EthereumGreen} alt="" />
              <p className="text-[#00AC4F] text-[0.6875rem] font-bold">
                {value} ETH
              </p>
            </div>
            <p className="text-[#838383] text-[0.8125rem]">
              {bids} of {totalBids}
            </p>
          </div>
        </div>
        <div className="flex pt-[0.625rem] justify-between items-center">
          <p className="text-[#5539A8] text-[0.6875rem] bg-[#F5F5F5] px-[0.625rem] py-[0.1875rem] rounded-lg">
            <Countdown date="2023-04-02" /> left
          </p>
          <button
            type=""
            className="text-[#4F33A3] hover:scale-105 duration-200 text-[1rem] font-medium bg-none outline-none"
          >
            Place a bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
