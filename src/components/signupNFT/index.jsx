import Image5 from "../../assets/images/image-5.png";
import Image6 from "../../assets/images/image-6.png";
import Image7 from "../../assets/images/image-7.png";
import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";

const SignUpNFT = () => {
  return (
    <div className="xl:container px-[2rem] py-[5.725rem] xl:py-[6.25rem]">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center gap-[1.875rem]">
          <div className="flex flex-col justify-end items-end gap-[1.875rem]">
            <div className="relative">
              <img
                src={Image5}
                alt=""
                className="w-[16rem] h-[16rem] xl:w-[18.75rem] xl:h-[18.75rem]"
              />
              <img
                src={User1}
                alt=""
                className="w-[4rem] h-[4rem] xl:w-[5rem] xl:h-[5rem] absolute -bottom-[1.25rem] -right-[1.25rem] xl:-bottom-[1.5625rem] xl:-right-[1.5625rem] border-[0.3125rem] border-white rounded-full"
              />
            </div>
            <div className="relative">
              <img
                src={Image6}
                alt=""
                className="w-[10rem] h-[12rem] xl:w-[12.1875rem] xl:h-[13.375rem]"
              />
              <img
                src={User2}
                alt=""
                className="w-[4rem] h-[4rem] xl:w-[5rem] xl:h-[5rem] absolute -bottom-[1.5625rem] -right-[1.5625rem] border-[0.3125rem] border-white rounded-full"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={Image7}
              alt=""
              className="w-[14rem] h-[15rem] xl:w-[15.0625rem] xl:h-[16.5625rem]"
            />
            <img
              src={User2}
              alt=""
              className="w-[4rem] h-[4rem] xl:w-[5rem] xl:h-[5rem] absolute -bottom-[1.5625rem] -right-[1.5625rem] border-[0.3125rem] border-white rounded-full"
            />
          </div>
        </div>
        <div className="space-y-[1.5625rem] flex flex-col justify-center pl-[3.125rem]">
          <p className="uppercase text-[2rem] font-integral font-bold w-3/4 xl:w-2/3">
            Create and sell your NFTs
          </p>
          <p className="text-[1.125rem] text-[#636363] w-3/4 xl:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button
            type=""
            className="btn text-[1.25rem] w-[12.5rem] h-[3.125rem]"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpNFT;
