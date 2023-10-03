export default function Navbar() {
  return (
    <div className="  flex items-center justify-center  bg-gradient-to-b from-navbar  h-20 relative z-20">
      <div className="container mx-auto flex items-center justify-center">
        <div className=" mx-10">
          <a href="/">
            <p className=" text-white  font-inter font-light text-[1.70rem] hover:text-navyellow transition-colors delay-50 ">
              {" "}
              Home{" "}
            </p>
          </a>
        </div>

        <div className="mx-10">
          <a href={"/destinations"}>
            <p className="text-white font-inter  font-light text-[1.70rem] hover:text-navyellow  transition-colors delay-50">
              {" "}
              Destinations
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
