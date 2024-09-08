import { useState } from 'react';

const testimonialsData = [
  {
    name: 'Debasis Sahoo',
    position: 'MCA 2024 ,Senior at NIT Jamshedpur',
    imageSrc: 'https://th.bing.com/th/id/OIP.uao3bZ8-EDuPh-gQUL48bwHaLH?rs=1&pid=ImgDetMain',
    review: 'This platform is a game-changer for our community. It has helped reunite so many lost items with their owners. Kudos to the team behind it!',
  },
  {
    name: 'Dr. Mayukh Sarker',
    position: 'CSE Faculty at NIT Jamshedpur',
    imageSrc: 'https://www.prasashan.com/wp-content/uploads/2020/08/Dinesh-Kumar-Ghimire.jpg',
    review: 'I found a set of keys near the library and was able to connect with the owner through this website. It’s such a convenient and efficient way to help others.',
  },
  {
    name: 'Labani Sahoo',
    position: 'Librarian at NIT Jamshedpur',
    imageSrc: 'https://th.bing.com/th/id/OIP.KHeRBPylQ6fI05-toDQPyQHaHZ?rs=1&pid=ImgDetMain',
    review: 'As a staff member, I’ve seen firsthand how this platform fosters a sense of community and helpfulness among students and faculty. It’s truly remarkable.',
  },
  {
    name: 'Sukanya Raj',
    position: 'CSE 2026, Student at NIT Jamshedpur',
    imageSrc: 'https://images.unsplash.com/photo-1472521882609-05fb39814d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk2Nzk4MHw&ixlib=rb-4.0.3&q=80&w=1080',
    review: 'I highly recommend using this website if you’ve lost or found something on campus. It’s user-friendly and has been instrumental in reuniting people with their belongings.',
  },
  {
    name: 'Rudranil Khanra',
    position: 'ME 2025, Student at NIT Jamshedpur',
    imageSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    review: 'The website is intuitive and easy to use. I found my first Scholarship from this website',
  },
  {
    name: 'Akansha Mishre',
    position: 'MCA 2026, Student at NIT Jamshedpur',
    imageSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
    review: 'Thanks to this platform, I was able to Complain a college staff help of this website higher authority take action against the staff. Amazing service!',
  },
  {
    name: 'Rahul Dev',
    position: 'ECE 2025, Student at NIT Jamshedpur',
    imageSrc: 'https://randomuser.me/api/portraits/men/10.jpg',
    review: 'I misplaced my backpack, but thanks to this site, I got it back the very next day! Great initiative by the college.',
  },
  {
    name: 'Shreya Gupta',
    position: 'MBA 2024, Student at NIT Jamshedpur',
    imageSrc: 'https://randomuser.me/api/portraits/women/5.jpg',
    review: 'This platform is incredibly easy to use, and the community is so helpful. I found my misplaced phone within a few hours thanks to a kind stranger.',
  },
  
];

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4; // Number of testimonials to show per page

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * testimonialsPerPage;
  const displayedTestimonials = testimonialsData.slice(startIndex, startIndex + testimonialsPerPage);

  return (
    <div className="py-8">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16 max-w-lg">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <span className="text-center text-sm">
            These are concise and effective. They capture a customer’s experience in their own words. Here are a few examples..
          </span>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  alt={`Image of ${testimonial.name}`}
                  src={testimonial.imageSrc}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex flex-col justify-center">
                  <strong className="text-lg">{testimonial.name}</strong>
                  <span className="text-sm">{testimonial.position}</span>
                </div>
              </div>
              <p className="mt-4 text-left text-sm">{testimonial.review}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className={`p-3 rounded-full bg-[#D15213] border-[#D15213] border-2 text-white hover:bg-[#983909] flex items-center justify-center ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 0}
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`p-3 rounded-full bg-[#D15213] border-[#D15213] text-white hover:bg-[#a9410d] flex items-center justify-center ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === totalPages - 1}
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
