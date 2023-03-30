import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-[1.25rem] py-[3.75rem]">
        <div className="space-y-[1.25rem]">
          <p className="uppercase text-[1.5rem] font-integral font-bold">
            NFters
          </p>
          <p className="text-[#565656] text-[0.875rem] w-3/4">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex items-center gap-[0.9375rem]">
            <img src={Facebook} alt="" className="w-[1.875rem] h-[1.875rem]" />
            <img src={Twitter} alt="" className="w-[1.875rem] h-[1.875rem]" />
            <img src={Linkedin} alt="" className="w-[1.875rem] h-[1.875rem]" />
          </div>
        </div>
        <div className="flex justify-between gap-[1.25rem]">
          <div className="space-y-[1.25rem]">
            <p className="text-[1.125rem] font-bold">Market Place</p>
            <ul className="space-y-[0.5rem] text-[0.875rem] text-[#3D3D3D] font-medium">
              <li className="cursor-pointer">All NFTs</li>
              <li className="cursor-pointer">New</li>
              <li className="cursor-pointer">Art</li>
              <li className="cursor-pointer">Sports</li>
              <li className="cursor-pointer">Utility</li>
              <li className="cursor-pointer">Music</li>
              <li className="cursor-pointer">Domain Name</li>
            </ul>
          </div>
          <div className="space-y-[1.25rem] pr-[1.875rem]">
            <p className="text-[1.125rem] font-bold">My Account</p>
            <ul className="space-y-[0.5rem] text-[0.875rem] text-[#3D3D3D] font-medium">
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Favorite</li>
              <li className="cursor-pointer">My Collections</li>
              <li className="cursor-pointer">Settings</li>
            </ul>
          </div>
        </div>
        <div className="space-y-[1.25rem] pl-[3.75rem]">
          <p className="text-[1.125rem] font-bold">Stay in the loop</p>
          <p className="text-[0.875rem] text-[#363639]">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div>
            <input
              type="text"
              name=""
              value=""
              placeholder="Enter your email address.."
              className="w-full rounded-full border-3 border-[#d3d3d3] h-[3.125rem] placeholder:text-[#959595] pl-[1.25rem] text-[0.8125rem]"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#F4F4F4] py-[1.25rem] flex justify-center items-center">
        <p className="text-[#A4A4A4] text-[0.875rem]">
          Copyright © 2022 Avi Yansah
        </p>
      </div>
    </div>
  );
};

export default Footer;
