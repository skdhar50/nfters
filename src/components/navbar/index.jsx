const Navbar = () => {
  return (
    <div className="border-b-2 border-[#EFEFEF]">
      <div className="container">
        <nav className="flex items-center justify-between py-[20px]">
          <div className="border-r-2 border-[#F4F4F4] pr-[100px]">
            <p className="uppercase text-[#3D00B7] text-[24px] font-bold">
              Nfters
            </p>
          </div>
          <div>
            <ul className="text-[16px] font-medium flex gap-[40px]">
              <li>Marketplace</li>
              <li>Resource</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex items-center gap-[20px] text-[14px]">
            <input
              type="text"
              placeholder="Search"
              className="placeholder:text-[#C0C0C0] w-[300px] h-[45px] rounded-full"
            />
            <button
              type=""
              className="bg-[#3D00B7] text-[#FFFFFF] w-[120px] h-[45px] rounded-full"
            >
              Upload
            </button>
            <button
              type=""
              className="text-[#3D00B7] border-2 border-[#3D00B7] w-[150px] h-[45px] rounded-full font-bold"
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
