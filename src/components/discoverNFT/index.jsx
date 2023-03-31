import { useState } from "react";
import { categoryList, nftsList } from "../../utilities/db";
import ItemCard from "./ItemCard";

const DiscoverNFTs = () => {
  // state to control the click event of category
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[3.75rem]">
      <div className="xl:container px-[2rem]">
        <div className="space-y-[1.25rem] mb-[2.1875rem]">
          <p className="text-[2rem] xl:text-[2.125rem] font-integral font-bold uppercase">
            Discover more NFTs
          </p>
          <div>
            <ul className="flex gap-[0.625rem]">
              {categoryList?.map((category) => (
                <li
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-[1rem] py-[0.5rem] rounded-full cursor-pointer hover:bg-[#3D00B7] hover:text-white transition duration-150 ease-in-out ${
                    selectedCategory === category.name
                      ? "bg-[#3D00B7] text-white"
                      : "bg-[#DCDCDC] bg-opacity-20"
                  }`}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-[1.875rem] flex flex-col justify-center">
          <div className="grid grid-cols-4 gap-[1.25rem]">
            {nftsList?.map((nfts) => (
              // item card
              <ItemCard key={nfts.id} {...nfts} />
            ))}
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
