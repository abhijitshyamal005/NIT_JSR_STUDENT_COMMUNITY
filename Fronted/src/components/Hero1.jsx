import BlogCard from '../extraComponents/BlogCard';
const Hero1 = () => {
    return (
        <div className="flex flex-col items-center w-full h-auto overflow-hidden relative gap-12 flex-shrink-0">
            <div className="flex flex-col items-center gap-6 pb-4 max-w-screen-lg w-full px-4">
                <div className="flex flex-col items-center gap-6 w-full mt-10">
                    <h1 className="text-4xl font-bold text-center lg:mt-8 lg:text-[48px]  font-serif sm:text-[30px]">
                        Report or Find Lost Items on Campus
                    </h1>
                    <p className="text-lg text-center font-sans">
                        Introducing Our Lost and Found and Students helper Community Platform... Dear NIT JSR Community, Are you tired of searching high and low for that missing backpack or smartphone? Have you ever stumbled upon a forgotten item and wondered how to reunite it with its owner? Look no further! We’re thrilled to introduce our new platform—a hub where you can report lost items, post found treasures, and connect with fellow students to reclaim your belongings.          </p>
                </div>
                <div className="flex gap-4 pt-4 flex-wrap justify-center w-full md:flex-nowrap">
                    <button className="bg-[#d15213] text-white px-7 py-2 border rounded-3xl font-semibold border-[#d15213] hover:bg-black w-full md:w-auto">
                        Report Lost Item
                    </button>
                    <button className="border-[#d15213] border px-7 py-2  text-[#d15213]  rounded-3xl hover:bg-[#d15213] hover:text-white w-full md:w-auto">
                        Find Lost Item
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full relative">
                <div className="flex gap-6 w-full overflow-hidden">
                    <div className="flex gap-4 w-full animate-slide">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />


                    </div>
                </div>
                <div className="flex gap-6 w-full overflow-hidden">
                    <div className="flex gap-4 w-full animate-slide-reverse">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;