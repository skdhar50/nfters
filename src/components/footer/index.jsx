import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-[20px] py-[60px]">
        <div className="space-y-[20px]">
          <p className="uppercase text-[24px] font-bold">NFters</p>
          <p className="text-[#565656] text-[14px] w-3/4">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex items-center gap-[15px]">
            <img src={Facebook} alt="" className="w-[30px] h-[30px]" />
            <img src={Twitter} alt="" className="w-[30px] h-[30px]" />
            <img src={Linkedin} alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div className="space-y-[20px]">
            <p className="text-[18px] font-bold">Market Place</p>
            <ul className="space-y-[8px] text-[14px] text-[#3D3D3D] font-medium">
              <li className="cursor-pointer">All NFTs</li>
              <li className="cursor-pointer">New</li>
              <li className="cursor-pointer">Art</li>
              <li className="cursor-pointer">Sports</li>
              <li className="cursor-pointer">Utility</li>
              <li className="cursor-pointer">Music</li>
              <li className="cursor-pointer">Domain Name</li>
            </ul>
          </div>
          <div className="space-y-[20px] pr-[30px]">
            <p className="text-[18px] font-bold">My Account</p>
            <ul className="space-y-[8px] text-[14px] text-[#3D3D3D] font-medium">
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Favorite</li>
              <li className="cursor-pointer">My Collections</li>
              <li className="cursor-pointer">Settings</li>
            </ul>
          </div>
        </div>
        <div className="space-y-[20px] pl-[60px]">
          <p className="text-[18px] font-bold">Stay in the loop</p>
          <p className="text-[14px] text-[#363639]">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div>
            <input
              type="text"
              name=""
              value=""
              placeholder="Enter your email address.."
              className="w-full rounded-full border-3 border-[#d3d3d3] h-[50px] placeholder:text-[#959595] placeholder:pl-[10px] text-[13px]"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#F4F4F4] py-[20px] flex justify-center items-center">
        <p className="text-[#A4A4A4] text-[14px]">
          Copyright © 2022 Avi Yansah
        </p>
      </div>
    </div>
  );
};

export default Footer;
