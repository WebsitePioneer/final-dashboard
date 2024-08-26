import Dashboard from "./pages/Dashboard";
import fos from "./assets/fos.png"

function App() {
  return (
    <div className="bg-white/50h-[100vh] scroll-smooth px-4 max-sm:px-5">
      <div className="flex items-center justify-between px-6 max-lg:py-[10px] ">
        <img className="max-lg:w-[30%] max-lg:ml-[-3%] max-sm:w-[50%] max-sm:ml-[-5%]" src={fos} />
        <button>Dark mode</button>
      </div>
      <h1 className="text-maintitle text-center font-bold bg-gradient-to-r from-red-600 via-pink-700 to-purple-900 bg-clip-text text-transparent max-sm:text-[28px] max-sm:mt-[3%]">
          Collect. Analyze. Plan. Ship.
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;
