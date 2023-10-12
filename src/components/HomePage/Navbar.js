export default function Navbar() {
  return (
    <div className="  flex items-center justify-center  bg-gradient-to-b from-navbar  h-20 relative z-20">
      <div className="container mx-auto flex items-center justify-center">
        <div className=" mx-10">
          <a href="/">
            <p className=" relative before:absolute before:left-0 before:-bottom-1.5 before:h-1 before:w-0 hover:before:w-full before:rounded-full before:bg-navyellow before:duration-500 before:transition-all text-white  font-inter font-light text-[1.70rem] hover:text-navyellow transition-all duration-500 delay-50 ">
              Home
            </p>
          </a>
        </div>

        <div className="mx-10">
          <a href={"/destinations"}>
            <p className=" 
            relative
            transition-all
            duration-500
            before:absolute
            before:-bottom-1.5
            before:left-0
            before:w-0
            before:h-1
            before:rounded-full
            before:transition-all
            before:duration-500
            before:bg-navyellow
            hover:before:w-full
           text-white font-inter  font-light text-[1.70rem] hover:text-navyellow   delay-50 ">
              Destinations
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
