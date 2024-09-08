import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative px-4 lg:px-8 xl:px-16">
      <div className="w-full flex flex-col lg:flex-row items-start gap-16">
        {/* Text Section (with sticky behavior) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:sticky top-[100px]">
          <h1 className="text-4xl font-bold">
            Discover the Power of Our Communities
          </h1>
          <p className="text-lg">
            NIT Jamshedpur community is an inspiring initiative aimed at nurturing students into better human beings. It stands for Vedic Oasis for Inspiration, Culture, and Education. The community strives to create a stress-free, addiction-free student community at NIT Jamshedpur. Their goal is to enhance both competence and wellness among students. Participants engage in workshops on public speaking, leadership, and effective communication. These skills are essential for personal and professional growth.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#D15213] font-semibold border-[2px] border-[#D15213] text-white px-4 py-2 transition duration-300 hover:bg-black rounded-2xl">
              Know More..
            </button>
          </div>
        </div>

        {/* Cards Section (with sticky and stacking behavior) */}
        <div className="w-full lg:w-1/2  relative">
          <div className="space-y-8 ">
            <div className="sticky  top-10 z-30 mt-[100px] bg-gray-100 p-7 rounded-lg transform -rotate-2 hover:rotate-2 transition-transform duration-300 hover:scale-110">
              <Link to='/registration' className="text-3xl font-bold">Create an Account</Link>
              <span className="block text-center mt-4">
                Sign up with your college email and subscribe to get access to all features of this platform.
              </span>
              <label className="absolute top-2 right-2 text-4xl font-bold">01</label>
            </div>
            <div className="sticky top-10 z-20 bg-[#f5d1b0] p-6 rounded-lg transform rotate-2 hover:-rotate-2 transition-transform duration-300 hover:scale-110">
              <h1 className="text-3xl font-bold">Report Lost Item</h1>
              <span className="block text-center mt-4">
                Fill out a form providing details about the lost item such as description, location, and time it went missing.
              </span>
              <label className="absolute top-2 right-2 text-4xl font-bold">02</label>
            </div>
            <div className="sticky top-10 z-10 bg-gray-100 p-6 rounded-lg transform -rotate-2 hover:rotate-2 transition-transform duration-300 hover:scale-110">
              <h1 className="text-3xl font-bold">Post Found Item</h1>
              <span className="block text-center mt-4">
                If you find an item, share details about it with the community, including where it was found and contact information.
              </span>
              <label className="absolute top-2 right-2 text-4xl font-bold">03</label>
            </div>
            <div className="sticky top-10 z-0 bg-[#f5d1b0] p-6 rounded-lg transform rotate-2 hover:-rotate-2 transition-transform duration-300 hover:scale-110">
              <h1 className="text-3xl font-bold">Connect with Finder</h1>
              <span className="block text-center mt-4">
                Use the community contact information to reach out to the person who found your lost item.
              </span>
              <label className="absolute top-2 right-2 text-4xl font-bold">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
