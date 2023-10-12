export default function Mid() {
  return (
    <div className=" mt-44 flex flex-col">
      <p className="  ml-20  text-[4rem] font-odor text-white  ">
        {" "}
        Discover Turkey{" "}
      </p>

      <div className=" flex items-center justify-center flex-col max-w-4xl">
        <span className="max-w-6xl  ml-14 text-[1.5rem] font-inter font-light text-white">
          We invite you on a journey to the fascinating provinces of Turkey. Our
          website is your guide to help you explore every corner of Turkey with
          the help of artificial intelligence.
        </span>
        <a
          className="bg-navyellow  font-inter text-2xl flex items-center  px-12 h-14 rounded-md mt-5  hover:bg-white hover:text-navyellow hover:transition-all hover:duration-500 transition-all duration-75 "
          href={"/destinations"}
        >
          Discover Now
        </a>
      </div>
    </div>
  );
}
