const Hero = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-[50px]">
        <div className="w-1/2 space-y-[30px]">
          <p className="text-[40px] font-bold uppercase">
            Discover, and collect Digital Art NFTs
          </p>
          <p className="text-[#565656] text-[20px] w-3/4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="bg-[#3D00B7] text-[#FFFFFF] w-[200px] h-[45px] rounded-full text-[20px] font-medium">
            Explore Now
          </button>
          <div className="flex justify-start items-center gap-[20px]">
            <div>
              <p className="text-[40px] font-bold">98K+</p>
              <p className="text-[#565656] text-[20px]">Artwork</p>
            </div>
            <div>
              <p className="text-[40px] font-bold">12K+</p>
              <p className="text-[#565656] text-[20px]">Auction</p>
            </div>
            <div>
              <p className="text-[40px] font-bold">15K+</p>
              <p className="text-[#565656] text-[20px]">Artist</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
