import Image5 from "../../assets/images/image-5.png";
import Image6 from "../../assets/images/image-6.png";
import Image7 from "../../assets/images/image-7.png";
import Logo from "../../assets/images/logo.png";
import User1 from "../../assets/users/user-1.png";
import EthereumWhite from "../../assets/icons/ethereum-white.svg";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-[3.125rem]">
        <div className="w-1/2 space-y-[1.875rem] flex-shrink-0">
          <p className="text-[2.5rem] font-integral font-bold uppercase">
            Discover, and collect Digital Art NFTs
          </p>
          <p className="text-[#565656] text-[1.25rem] w-3/4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="btn w-[12.5rem] h-[45px] text-[1.25rem]">
            Explore Now
          </button>
          <div className="flex justify-start items-center gap-[1.25rem]">
            <div className="-space-y-[0.3125rem]">
              <p className="text-[2.5rem] font-integral flex justify-center items-center font-bold">
                98K<span className="text-[1.875rem] font-medium">&#x271A;</span>
              </p>
              <p className="text-[#565656] text-[1.25rem]">Artwork</p>
            </div>
            <div className="-space-y-[0.3125rem]">
              <p className="text-[2.5rem] font-integral flex justify-center items-center font-bold">
                12K<span className="text-[1.875rem] font-medium">&#x271A;</span>
              </p>
              <p className="text-[#565656] text-[1.25rem]">Auction</p>
            </div>
            <div className="-space-y-[0.3125rem]">
              <p className="text-[2.5rem] font-integral flex justify-center items-center font-bold">
                15K<span className="text-[1.875rem] font-medium">&#x271A;</span>
              </p>
              <p className="text-[#565656] text-[1.25rem]">Artist</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center -space-x-[17.5rem]">
            <div className="z-[100] relative">
              <img
                src={Logo}
                alt=""
                className="absolute -left-[4rem] bottom-[9.375rem]"
              />
              {/* <div className="relative"> */}
              <img
                src={Image5}
                alt=""
                className="min-w-[25rem] min-h-[27.5rem] z-[100] flex-shrink-0"
              />
              <div className="absolute top-[1.5625rem] left-[1.5625rem] space-y-[0.3125rem] text-white">
                <p className="text-[28px] font-bold">Abstr Gradient NFT</p>
                <div className="flex justify-start items-center gap-[1rem]">
                  <img src={User1} alt="" className="w-[2rem] h-[2rem]" />
                  <p className="text-[1.25rem] font-bold">Arkhan17</p>
                </div>
              </div>
              <div className="absolute flex justify-between px-[1.25rem] py-[0.625rem] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg bottom-[1.5625rem] left-[1.5625rem] right-[1.5625rem] h-[4.5625rem] rounded-xl">
                <div className="space-y-[0.3125rem]">
                  <p className="text-[0.75rem] text-white font-medium">
                    Current Bid
                  </p>
                  <div className="flex items-center gap-[0.625rem]">
                    <img src={EthereumWhite} alt="" />
                    <p className="font-bold text-[1rem] text-white">0.25 ETH</p>
                  </div>
                </div>
                <div className="space-y-[0.3125rem]">
                  <p className="text-[0.75rem] text-white font-medium">
                    Ends in
                  </p>
                  <div className="flex items-center gap-[0.625rem]">
                    <p className="font-bold text-[1rem] text-white">
                      12<span className="font-normal">h</span>
                    </p>
                    <p className="font-bold text-[1rem] text-white">
                      43<span className="font-normal">m</span>
                    </p>
                    <p className="font-bold text-[1rem] text-white">
                      42<span className="font-normal">s</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <img
              src={Image7}
              alt=""
              className="min-w-[22.25rem] min-h-[24.4375rem] z-[70] flex-shrink-0"
            />
            <img
              src={Image6}
              alt=""
              className="min-w-[19.375rem] min-h-[21.3125rem] z-[40] flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
