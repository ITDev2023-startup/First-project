import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      {/* <RenderAnyName isValid={valid} age={18} name="Ayush" />
      <RenderAnyName isValid={!valid} age={22} name="Aaraf" />
      <button onClick={() => {
        setValid((prev)=>!prev)
      }}>Change</button>
      <input type="password"> </input> */}
      <div className="p-5">
        <div className="flex justify-start w-[100%] border-b-2 border-b-gray-300">
          <h1 className="font-bold font-stretch-200% font-serif text-amber-500 text-3xl w-[80%]">
            TechNologia
          </h1>
          <Link
            to={"/Home"}
            className="text-blue-500 decoration-2 text-xl w-[10%]"
          >
            Home
          </Link>
          <Link
            to={"/Contact"}
            className="text-blue-500 decoration-2 text-xl w-[10%]"
          >
            About
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
