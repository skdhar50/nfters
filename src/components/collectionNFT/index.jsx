import { featuredCollect } from "../../utilities/db";

const CollectionNFT = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 py-[3.75rem]">
      <div className="xl:container px-[2rem]">
        <p className="text-[1.6rem] xl:text-[1.75rem] font-integral font-bold uppercase mb-[2.5rem]">
          Collection Featured NFTs
        </p>
        <div className="grid grid-cols-3 gap-[1.875rem]">
          {featuredCollect?.map((item) => (
            <div key={item.id} className="space-y-[1.25rem] w-fit">
              <div className="flex gap-[1.25rem]">
                <img
                  src={item.collectionImage}
                  alt=""
                  className="w-[17.5rem] h-[20.625rem] xl:w-[14rem] 2xl:w-[17.5rem]"
                />
                <div className="hidden xl:block space-y-[1rem]">
                  {item.otherImages?.map((image, index) => (
                    <img
                      key={index + 1}
                      src={image}
                      alt=""
                      className="w-[7.5rem] h-[6.25rem]"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-[0.625rem]">
                <p className="text-[1.25rem] font-bold">
                  {item.collectionName}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-[0.625rem] items-center">
                    <img
                      src={item.authImage}
                      alt=""
                      className="w-[1.75rem] h-[1.75rem]"
                    />
                    <p className="text-[0.875rem] font-medium">
                      by {item.author}
                    </p>
                  </div>
                  <button
                    type=""
                    className="border-2 border-[#3D00B7] text-[#3D00B7] w-[8.75rem] h-[1.875rem] rounded-full"
                  >
                    Total {item.totalItems} Items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionNFT;
