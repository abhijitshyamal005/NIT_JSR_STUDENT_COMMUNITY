
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
                        <img
                            alt="Lost and Found Illustration"
                            src="https://nitjsr.ac.in/backend/uploads/institute_event/3a4fc998-a1c4-4d6e-ae77-cbcc8f5711ed-POSTER_page-0001.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="College Campus Illustration"
                            src="https://th.bing.com/th/id/OIP._AXXdaW5naBxIKzRdrIyYwHaEa?rs=1&pid=ImgDetMain"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Student with Lost Item Illustration"
                            src="https://cache.careers360.mobi/media/colleges/reviews/2021/6/16/164337/1623839844382.jpeg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/institute_event/0f8c445e-72d7-462b-b7b9-dfaabf283ad9-Screenshot%202024-05-27%20123444.png"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/ff59bec2-bf2a-4675-945d-ba74f616f6d3-WhatsApp%20Image%202024-05-16%20at%2019.10.52_179451f8.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/b7314301-6613-4089-b099-f8b7eedd9a18-WhatsApp%20Image%202024-05-09%20at%2017.01.04.jpeg"
                            className="w-96 h-96 object-cover"
                        />
                    </div>
                </div>
                <div className="flex gap-6 w-full overflow-hidden">
                    <div className="flex gap-4 w-full animate-slide-reverse">
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/3bad9244-6c00-4ef6-9281-67cffa1f1967-imresizer-1724046512657.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/ecb12f68-a5cb-4cec-aa33-c0ac7d622791-1.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/0fb4786f-215e-4071-bd8f-5fc554d59ac8-IMG-20240622-WA0004.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/institute_event/24743577-6857-46da-875d-5f3e1e99a039-Screenshot%202024-06-05%20155351.png"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://i.ytimg.com/vi/pfGfo3Mzt-w/maxresdefault.jpg"
                            className="w-96 h-96 object-cover"
                        />
                        <img
                            alt="Hero Image"
                            src="https://nitjsr.ac.in/backend/uploads/banner/add/5276f1d7-95d6-4782-81fa-b25ba86bd912-July%2015th%202023.jpeg"
                            className="w-96 h-96 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
