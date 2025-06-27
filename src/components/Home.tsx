import cooking from "./Images/Cooking.png";
import BabyCare from "./Images/BabyCare.png";
import Cleaning from "./Images/Cleaning.png";
// import img from "./Images/HI.png";

function Home() {
  return (
    <>
      
      <div className="p-5 mt-6">
        <p className="text-blue-700 text-2xl font-medium">
          Most Requested Services
        </p>
        <p className="text-2xl mt-7 w-[50%] font-medium font-serif">
          Simplify your daily routine with our trusted services.
        </p>
        <div className="flex gap-3 mt-4">
          <div>
            <img src={cooking} width={300} />
          </div>
          <div>
            <img src={BabyCare} width={300} />
          </div>
          <div>
            <img src={Cleaning} width={300} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
