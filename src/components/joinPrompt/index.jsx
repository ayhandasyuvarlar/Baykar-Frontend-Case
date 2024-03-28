import { Link } from "react-router-dom";
import "./style.css";
import { icon, images } from "../../constants";

const JoinPrompt = () => {
  const whyJoin = [
    {
      description: "Est et in pharetra magna adipiscing ornare aliquam.",
    },
    {
      description: "Tellus arcu sed consequat ac velit ut eu blandit.",
    },
    {
      description: "Ullamcorper ornare in et egestas dolor orci.",
    },
  ];
  return (
    <section className="overflow-hidden lg:overflow-visible w-full h-auto lg:h-[816px] flex flex-col lg:justify-center justify-start items-center p-5 lg:p-0">
      <div className="join-box sm:join-box flex flex-col lg:flex-row justify-start items-center align-middle  p-[32px] lg:p-[80px]">
        <div className="w-full  lg:w-6/12  flex flex-col items-center lg:items-start lg:justify-center justify-start gap-6 h-auto lg:h-full">
          <h1 className="lg:font-extrabold lg:text-[56px] lg:leading-[61.6px] text-start text-[32px] leading-[35.5px] font-bold">
            Why Join Us
          </h1>
          <div className="flex flex-col items-start  justify-normal gap-2">
            {whyJoin.map((item, index) => {
              return (
                <p
                  key={index}
                  className="flex flex-row w-full items-center lg:justify-start justify-center gap-2 text-lg leading-6  lg:text-xl lg:leading-9 font-normal"
                >
                  <span>
                    <img src={icon.check} alt="" />
                  </span>
                  {item.description}
                </p>
              );
            })}
          </div>
          <Link
            to={"/"}
            className="z-10 p-3 cursor-pointer px-5 text-lg font-medium leading-6 border-[#78350F] text-[#78350F]  border-2 rounded-lg "
          >
            Sign Up Now
          </Link>
        </div>
        <div className="lg:w-6/12 w-full mt-10 lg:mt-0 lg:h-full  h-[234px] flex flex-col justify-center items-center lg:justify-center  lg:items-center relative">
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <div className="shape sm:shape"></div>
          <img
            src={icon.desktop}
            alt="people-and-sneakers"
            className="z-20 lg:ml-10"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinPrompt;
