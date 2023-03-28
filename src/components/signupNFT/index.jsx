import Image5 from "../../assets/images/image-5.png";
import Image6 from "../../assets/images/image-6.png";
import Image7 from "../../assets/images/image-7.png";
import User1 from "../../assets/users/user-1.png";
import User2 from "../../assets/users/user-2.png";

const SignUpNFT = () => {
  return (
    <div className="container py-[100px]">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center gap-[30px]">
          <div className="flex flex-col justify-end items-end gap-[30px]">
            <div className="relative">
              <img src={Image5} alt="" className="w-[300px] h-[300px]" />
              <img
                src={User1}
                alt=""
                className="w-[80px] h-[80px] absolute -bottom-[25px] -right-[25px] border-[5px] border-white rounded-full"
              />
            </div>
            <div className="relative">
              <img src={Image6} alt="" className="w-[195px] h-[214px]" />
              <img
                src={User2}
                alt=""
                className="w-[80px] h-[80px] absolute -bottom-[25px] -right-[25px] border-[5px] border-white rounded-full"
              />
            </div>
          </div>
          <div className="relative">
            <img src={Image7} alt="" className="w-[241px] h-[265px]" />
            <img
              src={User2}
              alt=""
              className="w-[80px] h-[80px] absolute -bottom-[25px] -right-[25px] border-[5px] border-white rounded-full"
            />
          </div>
        </div>
        <div className="space-y-[25px] flex flex-col justify-center pl-[50px]">
          <p className="uppercase text-[32px] font-bold w-2/4">
            Create and sell your NFTs
          </p>
          <p className="text-[18px] text-[#636363] w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button
            type=""
            className="bg-[#3D00B7] text-[#FFFFFF] text-[20px] w-[200px] h-[50px] rounded-full"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpNFT;
