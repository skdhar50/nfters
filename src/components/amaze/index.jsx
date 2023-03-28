import CardTick from "../../assets/icons/card-tick.svg";
import ChartSquare from "../../assets/icons/chart-square.svg";

const AmazeNFT = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[100px] mt-[50px]">
      <div className="container grid grid-cols-3 gap-[50px]">
        <p className="text-[28px] font-bold uppercase">
          The amazing NFT art of the world here
        </p>
        <div className="flex items-start gap-[10px]">
          <img src={CardTick} alt="CardTick" />
          <div className="space-y-[15px]">
            <p className="text-[20px] font-bold">Fast Transaction</p>
            <p className="text-[#696969] text-[14px[]]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[10px]">
          <img src={ChartSquare} alt="ChartSquare" />
          <div className="space-y-[15px]">
            <p className="text-[20px] font-bold">Growth Transaction</p>
            <p className="text-[#696969] text-[14px[]]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazeNFT;
