
const Banner1 = () => {
  return (
    <div className="py-5">
      <div className="max-w-7xl mx-auto">
        <div className=" bg-[#F5D1B0] flex flex-col md:flex-row items-center justify-between bg-accent2 p-6 rounded-lg transform rotate-2  transition-transform duration-300 hover:scale-110 ">
          <div className=" bg-white p-[65px] flex flex-col md:flex-row items-center justify-between w-full bg-accent1 hover:bg-black hover:text-white rounded-lg transform -rotate-3 transition-transform duration-500 hover:scale-110">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <span className="text-4xl font-bold">Report a Lost Item</span>
              <p className="text-lg">
                If you have lost an item, let us know the details so others can help you find it.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <button
                type="button"
                className="bg-[#d15213] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c15c2a]"
              >
                Report Lost Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
