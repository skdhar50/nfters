import Search from "../../assets/icons/search.svg";

const Navbar = () => {
  return (
    <div className="border-b-2 border-[#EFEFEF]">
      <div className="container">
        <nav className="flex items-center justify-between py-[1.25rem]">
          <div className="border-r-2 border-[#F4F4F4] pr-[6.25rem]">
            <p className="uppercase text-[#3D00B7] text-[1.5rem] font-integral font-bold">
              Nfters
            </p>
          </div>
          <div>
            <ul className="text-[1rem] font-medium flex gap-[2.5rem]">
              <li className="cursor-pointer">Marketplace</li>
              <li className="cursor-pointer">Resource</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
          <div className="flex items-center gap-[1.25rem] text-[0.875rem]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="placeholder:text-[#C0C0C0] placeholder:text-[1rem] placeholder:mb-[0.125rem] pl-[1.875rem] pr-[3.125rem] w-[18.75rem] h-[2.8rem] rounded-full"
              />
              <img
                src={Search}
                alt=""
                className="absolute right-[1rem] top-[20%]"
              />
            </div>
            <button type="" className="btn w-[7.5rem] h-[2.8rem]">
              Upload
            </button>
            <button type="" className="btn-outlined w-[9.375rem] h-[2.8rem]">
              Connect Wallet
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
