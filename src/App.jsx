import Dashboard from "./pages/Dashboard";
import fos from "./assets/fos.png";
import dark from "./assets/dark.svg";
import white from "./assets/white.svg";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  const setDark = () => {
    setDarkMode(!darkmode);
  };
  return (
    <div
      className={`${
        darkmode ? "bg-[#0c0c0c]" : "bg-white"
      }  scroll-smooth pb-[60px] px-4 max-sm:px-5`}
    >
      <div className="flex items-center justify-between px-6 pt-[15px] max-lg:py-[10px] ">
        <img
          className="max-lg:w-[30%] max-lg:ml-[-3%] max-sm:w-[50%] max-sm:ml-[-5%]"
          src={fos}
        />
        <button
          onClick={setDark}
          className={`flex ${
            darkmode ? "bg-[#ff652d]" : "bg-[#ff5b20]"
          }  shadow-xl p-2 rounded-[20px] items-center justify-center gap-2`}
        >
          <img className="w-[25px]" src={`${darkmode ? white : dark}`} />
          <p
            className={`${darkmode ? "text-white" : "text-white"} text-[14px] `}
          >
            Dark mode
          </p>
        </button>
      </div>
      <h1
        className={`text-[42px] text-center font-bold  bg-gradient-to-r ${
          darkmode
            ? "from-[#f58258] via-[#f95012] to-[#f9a15d]"
            : "from-[#f58258] via-[#f95012] to-[#f9a15d]"
        } bg-clip-text text-transparent max-sm:text-[28px] max-sm:mt-[3%]`}
      >
        Collect. Analyze. Plan. Ship.
      </h1>
      <Dashboard data={darkmode} />
    </div>
  );
}

export default App;
