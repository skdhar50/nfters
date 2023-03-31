import Search from "../../assets/icons/search.svg";

const Navbar = () => {
  return (
    <div className="border-b-2 border-[#EFEFEF]">
      <div className="xl:container px-[2rem]">
        <nav className="flex items-center justify-between gap-[2rem] py-[1.25rem]">
          <div className="border-r-2 border-[#F4F4F4] pr-[2.5rem] xl:pr-[3rem] 2xl:pr-[6.25rem]">
            <p className="uppercase text-[#3D00B7] text-[1.2rem] xl:text-[1.5rem] font-integral font-bold">
              Nfters
            </p>
          </div>
          <div>
            <ul className="text-[0.9rem] xl:text-[1rem] font-medium flex gap-[1.2rem] xl:gap-[1.5rem] 2xl:gap-[2.5rem]">
              <li className="cursor-pointer">Marketplace</li>
              <li className="cursor-pointer">Resource</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
          <div className="flex items-center gap-[0.5rem] xl:gap-[0.625rem] 2xl:gap-[1.25rem] text-[0.875rem]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="placeholder:text-[#C0C0C0] placeholder:text-[0.8rem] xl:placeholder:text-[0.9rem] 2xl:placeholder:text-[1rem] placeholder:mb-[0.125rem] pl-[1.875rem] pr-[3.125rem] w-[15rem] h-[2rem] xl:w-[17rem] xl:h-[2.5rem] 2xl:w-[18.75rem] 2xl:h-[2.8rem] rounded-full"
              />
              <img
                src={Search}
                alt=""
                className="absolute w-[1rem] h-[1rem] xl:w-[1.2rem] xl:h-[1.2rem] 2xl:w-[1.5rem] 2xl:h-[1.5rem] right-[1rem] top-[23%] 2xl:top-[20%]"
              />
            </div>
            <button
              type=""
              className="btn w-[5rem] h-[2rem] xl:w-[6.5rem] xl:h-[2.5rem] 2xl:w-[7.5rem] 2xl:h-[2.8rem]"
            >
              Upload
            </button>
            <button
              type=""
              className="btn-outlined h-[2rem] w-[8rem] xl:h-[2.5rem] 2xl:w-[9.375rem] 2xl:h-[2.8rem]"
            >
              Connect Wallet
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
