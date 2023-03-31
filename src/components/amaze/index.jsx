import CardTick from "../../assets/icons/card-tick.svg";
import ChartSquare from "../../assets/icons/chart-square.svg";

const AmazeNFT = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[6.25rem] mt-[3.125rem] w-full">
      <div className="container grid grid-cols-3 gap-[3rem] xl:gap-[3.125rem]">
        <p className="text-[1.275rem] xl:text-[1.75rem] font-integral font-bold uppercase">
          The amazing NFT art of the world here
        </p>
        <div className="flex items-start gap-[0.625rem]">
          <img src={CardTick} alt="CardTick" />
          <div className="space-y-[1rem]">
            <p className="text-[1.1rem] xl:text-[1.25rem] font-bold">
              Fast Transaction
            </p>
            <p className="text-[#696969] text-[0.625rem] xl:text-[0.875rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[0.625rem]">
          <img src={ChartSquare} alt="ChartSquare" />
          <div className="space-y-[1rem]">
            <p className="text-[1.1rem] xl:text-[1.25rem] font-bold">
              Growth Transaction
            </p>
            <p className="text-[#696969] text-[0.625rem] xl:text-[0.875rem]">
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
