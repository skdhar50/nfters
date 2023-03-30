import Image1 from "../../assets/images/image-1.png";
import Image2 from "../../assets/images/image-2.png";
import Image3 from "../../assets/images/image-3.png";
import Image4 from "../../assets/images/image-4.png";
import User1 from "../../assets/users/user-1.png";

const CollectionNFT = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[3.75rem]">
      <div className="container">
        <p className="text-[1.75rem] font-integral font-bold uppercase mb-[2.5rem]">
          Collection Featured NFTs
        </p>
        <div className="grid grid-cols-3 gap-[1.875rem]">
          <div className="space-y-[1.25rem]">
            <div className="flex gap-[1.25rem]">
              <img src={Image1} alt="" className="w-[17.5rem] h-[20.625rem]" />
              <div className="space-y-[1rem]">
                <img src={Image2} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image3} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image4} alt="" className="w-[7.5rem] h-[6.25rem]" />
              </div>
            </div>
            <div className="space-y-[0.625rem]">
              <p className="text-[1.25rem] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[0.625rem] items-center">
                  <img src={User1} alt="" className="w-[1.75rem] h-[1.75rem]" />
                  <p className="text-[0.875rem] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] text-[#2639ED] w-[8.75rem] h-[1.875rem] rounded-full"
                >
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-[1.25rem]">
            <div className="flex gap-[1.25rem]">
              <img src={Image3} alt="" className="w-[17.5rem] h-[20.625rem]" />
              <div className="space-y-[1rem]">
                <img src={Image4} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image1} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image2} alt="" className="w-[7.5rem] h-[6.25rem]" />
              </div>
            </div>
            <div className="space-y-[0.625rem]">
              <p className="text-[1.25rem] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[0.625rem] items-center">
                  <img src={User1} alt="" className="w-[1.75rem] h-[1.75rem]" />
                  <p className="text-[0.875rem] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] text-[#2639ED] w-[8.75rem] h-[1.875rem] rounded-full"
                >
                  Total 54 Items
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-[1.25rem]">
            <div className="flex gap-[1.25rem]">
              <img src={Image2} alt="" className="w-[17.5rem] h-[20.625rem]" />
              <div className="space-y-[1rem]">
                <img src={Image3} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image1} alt="" className="w-[7.5rem] h-[6.25rem]" />
                <img src={Image4} alt="" className="w-[7.5rem] h-[6.25rem]" />
              </div>
            </div>
            <div className="space-y-[0.625rem]">
              <p className="text-[1.25rem] font-bold">Amazing Collection</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[0.625rem] items-center">
                  <img src={User1} alt="" className="w-[1.75rem] h-[1.75rem]" />
                  <p className="text-[0.875rem] font-medium">by Arkhan</p>
                </div>
                <button
                  type=""
                  className="border-2 border-[#2639ED] text-[#2639ED] w-[8.75rem] h-[1.875rem] rounded-full"
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
