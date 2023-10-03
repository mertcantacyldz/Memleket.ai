import Navbar from "./Navbar";
import Slight from "./Slight";
import Mid from "./Mid";

function HomePage() {
  return (
    <div className="bg-fethiye min-h-screen bg-cover ">
      <Navbar></Navbar>
      <Mid></Mid>
      <Slight></Slight>
    </div>
  );
}

export default HomePage;
