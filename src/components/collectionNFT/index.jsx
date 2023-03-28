import Image1 from "../../assets/images/image-1.png";
import Image2 from "../../assets/images/image-2.png";
import Image3 from "../../assets/images/image-3.png";
import Image4 from "../../assets/images/image-4.png";
import User1 from "../../assets/users/user-1.png";

const CollectionNFT = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[60px]">
      <div className="container">
        <p className="text-[28px] font-bold uppercase mb-[40px]">
          Collection Featured NFTs
        </p>
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="space-y-[20px]">
            <div className="flex gap-[20px]">
              <img src={Image1} alt="" className="w-[280px] h-[330px]" />
              <div className="space-y-[15px]">
                <img src={Image2} alt="" className="w-[120px] h-[100px]" />
                <img src={Image3} alt="" className="w-[120px] h-[100px]" />
                <img src={Image4} alt="" className="w-[120px] h-[100px]" />
              </div>
            </div>
            <div className="space-y-[10px]">
              <p className="text-[20px] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px] items-center">
                  <img src={User1} alt="" className="w-[28px] h-[28px]" />
                  <p className="text-[14px] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] w-[140px] h-[30px] rounded-full"
                >
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div className="flex gap-[20px]">
              <img src={Image3} alt="" className="w-[280px] h-[330px]" />
              <div className="space-y-[15px]">
                <img src={Image4} alt="" className="w-[120px] h-[100px]" />
                <img src={Image1} alt="" className="w-[120px] h-[100px]" />
                <img src={Image2} alt="" className="w-[120px] h-[100px]" />
              </div>
            </div>
            <div className="space-y-[10px]">
              <p className="text-[20px] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px] items-center">
                  <img src={User1} alt="" className="w-[28px] h-[28px]" />
                  <p className="text-[14px] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] w-[140px] h-[30px] rounded-full"
                >
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-[20px]">
            <div className="flex gap-[20px]">
              <img src={Image2} alt="" className="w-[280px] h-[330px]" />
              <div className="space-y-[15px]">
                <img src={Image3} alt="" className="w-[120px] h-[100px]" />
                <img src={Image1} alt="" className="w-[120px] h-[100px]" />
                <img src={Image4} alt="" className="w-[120px] h-[100px]" />
              </div>
            </div>
            <div className="space-y-[10px]">
              <p className="text-[20px] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px] items-center">
                  <img src={User1} alt="" className="w-[28px] h-[28px]" />
                  <p className="text-[14px] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] w-[140px] h-[30px] rounded-full"
                >
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionNFT;
