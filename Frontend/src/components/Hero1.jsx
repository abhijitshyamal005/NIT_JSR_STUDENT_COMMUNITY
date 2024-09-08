import BlogCard from '../extraComponents/BlogCard';

const blogCardsData = [
    {
        id: 1,
        title: 'Lost Laptop',
        description: 'A laptop was found in the library.',
        imgSrc: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        tags: ['Macbook', 'Apple', 'Laptop'],
    },
    {
        id: 2,
        title: 'Found Notebook',
        description: 'A notebook was found in the cafeteria.',
        imgSrc: 'https://images.unsplash.com/photo-1506748686214e9df14a320c8d25a4e5',
        tags: ['Notebook', 'Cafeteria', 'Found'],
    },
    {
        id: 3,
        title: 'Lost Wallet',
        description: 'A wallet was found near the gym.',
        imgSrc: 'https://images.unsplash.com/photo-1535107832997-e57d1f8e0c7d',
        tags: ['Wallet', 'Gym', 'Lost'],
    },
    {
        id: 4,
        title: 'Found Keys',
        description: 'A set of keys was found in the parking lot.',
        imgSrc: 'https://images.unsplash.com/photo-1603172422268-e21f20470ecf',
        tags: ['Keys', 'Parking Lot', 'Found'],
    },
    {
        id: 5,
        title: 'Lost Laptop',
        description: 'A laptop was found in the library.',
        imgSrc: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        tags: ['Macbook', 'Apple', 'Laptop'],
    },
    {
        id: 6,
        title: 'Found Notebook',
        description: 'A notebook was found in the cafeteria.',
        imgSrc: 'https://images.unsplash.com/photo-1506748686214e9df14a320c8d25a4e5',
        tags: ['Notebook', 'Cafeteria', 'Found'],
    },
    {
        id: 7,
        title: 'Lost Wallet',
        description: 'A wallet was found near the gym.',
        imgSrc: 'https://images.unsplash.com/photo-1535107832997-e57d1f8e0c7d',
        tags: ['Wallet', 'Gym', 'Lost'],
    },
    {
        id: 8,
        title: 'Found Keys',
        description: 'A set of keys was found in the parking lot.',
        imgSrc: 'https://images.unsplash.com/photo-1603172422268-e21f20470ecf',
        tags: ['Keys', 'Parking Lot', 'Found'],
    },
    // Add more blog card data as needed
];

const Hero1 = () => {
    return (
        <div className="flex flex-col items-center w-full h-auto overflow-hidden relative gap-12 flex-shrink-0">
            <div className="flex flex-col items-center gap-6 pb-4 max-w-screen-lg w-full px-4">
                <div className="flex flex-col items-center gap-6 w-full mt-10">
                    <h1 className="text-4xl font-bold text-center lg:mt-8 lg:text-[48px] font-serif sm:text-[30px]">
                        Report or Find Lost Items on Campus
                    </h1>
                    <p className="text-lg text-center font-sans">
                        Introducing Our Lost and Found and Students helper Community Platform... Dear NIT JSR Community, Are you tired of searching high and low for that missing backpack or smartphone? Have you ever stumbled upon a forgotten item and wondered how to reunite it with its owner? Look no further! We’re thrilled to introduce our new platform—a hub where you can report lost items, post found treasures, and connect with fellow students to reclaim your belongings.
                    </p>
                </div>
                <div className="flex gap-4 pt-4 flex-wrap justify-center w-full md:flex-nowrap">
                    <button className="bg-[#d15213] text-white px-7 py-2 border rounded-3xl font-semibold border-[#d15213] hover:bg-black w-full md:w-auto">
                        Report Lost Item
                    </button>
                    <button className="border-[#d15213] border px-7 py-2 text-[#d15213] rounded-3xl hover:bg-[#d15213] hover:text-white w-full md:w-auto">
                        Find Lost Item
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full min-h-screen relative sm:flex-wrap justify-center items-center">
                <div className="flex flex-wrap gap-6 w-full justify-center items-start sm:justify-center sm:items-center">
                    {blogCardsData.slice(0, 4).map((card) => (
                        <div key={card.id} className="flex-1 sm:flex-none sm:w-[300px]">
                            <BlogCard 
                                title={card.title} 
                                description={card.description} 
                                imgSrc={card.imgSrc} 
                                tags={card.tags} 
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 w-full justify-center items-start sm:justify-center sm:items-center">
                    {blogCardsData.slice(4).map((card) => (
                        <div key={card.id} className="flex-1 sm:flex-none sm:w-[300px]">
                            <BlogCard 
                                title={card.title} 
                                description={card.description} 
                                imgSrc={card.imgSrc} 
                                tags={card.tags} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero1;