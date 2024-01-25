import DesktopLogo from "./DesktopLogo";
import LightLogos from "./LightLogos";
import Logos from "./Logos";

const Login = () => {
  return (
    <div className="h-screen sm:flex sm:items-center ">
      <div className=" bg-[#605BFF] sm:bg-hero-pattern sm:bg-cover  flex items-center gap-1 space-x-2  h-[80px] sm:w-1/2 sm:flex-col sm:justify-between sm:items-center sm:gap-3  sm:h-screen ">
        <div className="self-start mt-9 ml-10 max-sm:hidden">
          <DesktopLogo></DesktopLogo>
        </div>
        <svg
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:hidden"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z"
            fill="#FAFAFB"
          />
        </svg>
        <p className="text-2xl text-white sm:text-6xl sm:font-bold sm:mb-9">
          BASE
        </p>
        <div className="max-sm:hidden mb-8">
          <LightLogos></LightLogos>
        </div>
      </div>
      <div className="bg-[#F8FAFF] space-y-8 sm:mt-2 sm:w-1/2 ">
        <div className="mt-5 sm:mx-10">
          <h1 className="text-2xl font-medium ml-9 sm:pl-2">Sign In</h1>
          <p className="font-medium ml-9 mt-2 sm:pl-2">
            Sign in to your account
          </p>
        </div>
        <div className=" w-[328px] mx-auto sm:mx-10 space-y-8">
          <div className="flex justify-between">
            <div className="flex rounded-md bg-white p-1 text-[16px] items-center gap-2 text-[#9A9AA9]">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1163_154)">
                  <path
                    d="M11.9937 6.41678C11.9937 5.92514 11.9528 5.56638 11.8645 5.19434H6.11951V7.41333H9.49167C9.42371 7.96478 9.05658 8.79525 8.24071 9.3533L8.22927 9.42759L10.0457 10.8027L10.1716 10.815C11.3273 9.77188 11.9937 8.23716 11.9937 6.41678Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M6.11952 12.2631C7.7716 12.2631 9.15854 11.7316 10.1716 10.8148L8.24073 9.3531C7.72403 9.70522 7.03054 9.95104 6.11952 9.95104C4.50142 9.95104 3.12808 8.908 2.63852 7.46631L2.56676 7.47226L0.67799 8.90068L0.65329 8.96777C1.6595 10.921 3.72633 12.2631 6.11952 12.2631Z"
                    fill="#34A853"
                  />
                  <path
                    d="M2.63863 7.46634C2.50946 7.0943 2.4347 6.69564 2.4347 6.28375C2.4347 5.87181 2.50946 5.4732 2.63184 5.10115L2.62841 5.02192L0.715971 3.57056L0.653399 3.59964C0.238692 4.41019 0.000732422 5.3204 0.000732422 6.28375C0.000732422 7.24709 0.238692 8.15726 0.653399 8.96781L2.63863 7.46634Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M6.11952 2.61646C7.2685 2.61646 8.04354 3.10145 8.48548 3.50675L10.2124 1.85908C9.15179 0.895741 7.7716 0.304443 6.11952 0.304443C3.72633 0.304443 1.6595 1.64647 0.65329 3.59973L2.63173 5.10124C3.12808 3.65954 4.50142 2.61646 6.11952 2.61646Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_154">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0 0.304443)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Google
            </div>
            <div className="flex rounded-md bg-white p-1 text-[16px] tems-center  gap-2 text-[#9A9AA9]">
              <svg
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1163_162)">
                  <path
                    d="M6.20317 3.67474C6.99279 2.62961 8.09057 2.62451 8.09057 2.62451C8.09057 2.62451 8.25386 3.60711 7.4694 4.55367C6.6318 5.56438 5.67975 5.399 5.67975 5.399C5.67975 5.399 5.50098 4.60411 6.20317 3.67474ZM5.78018 6.0873C6.18641 6.0873 6.94034 5.52655 7.92169 5.52655C9.61091 5.52655 10.2754 6.7336 10.2754 6.7336C10.2754 6.7336 8.97573 7.40091 8.97573 9.02012C8.97573 10.8467 10.5948 11.4762 10.5948 11.4762C10.5948 11.4762 9.46302 14.6752 7.93426 14.6752C7.23212 14.6752 6.68623 14.2001 5.94641 14.2001C5.19248 14.2001 4.44431 14.693 3.95702 14.693C2.56104 14.693 0.797424 11.6584 0.797424 9.21909C0.797424 6.81915 2.29021 5.56018 3.69038 5.56018C4.60061 5.56018 5.30697 6.0873 5.78018 6.0873Z"
                    fill="#999999"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_162">
                    <rect
                      width="9.7974"
                      height="15.3686"
                      fill="white"
                      transform="translate(0.797424 0.973633)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Apple
            </div>
          </div>
          <div className="bg-white flex flex-col p-4 w-full gap-4 rounded">
            <label className="font-semibold">Email Address</label>
            <input
              className="bg-[#EAEAEA] rounded-md p-2"
              type="text"
              value={"johndoe@gmil.com"}
            ></input>
            <label className="font-semibold">Password</label>
            <input
              className="bg-[#EAEAEA] rounded-md p-2"
              type="password"
              value={"qeqwewq"}
            ></input>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
            <button className="p-3 font-semibold  text-lg  text-white bg-[#605BFF]">
              Sign in
            </button>
          </div>
          <div className="sm:flex sm:gap-2">
            <p className="text-[#9A9AA9] text-center">Don't have an account?</p>
            <a href="#" className="text-blue-500 text-center">
              Register here
            </a>
          </div>
          <div className="sm:hidden ">
            <Logos></Logos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
