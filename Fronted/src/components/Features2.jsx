import { useState } from 'react';

const Features2 = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="py-16 flex justify-center">
            <div className="w-full max-w-screen-xl grid gap-8 lg:grid-cols-2 relative">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-6 ml-10">
                    <div
                        onClick={() => setActiveTab(0)}
                        className="cursor-pointer flex gap-6"
                    >
                        <div className="flex flex-col justify-center gap-4">
                            <h2 className="text-2xl font-semibold">Report Lost Items</h2>
                            <span className="text-base">
                                Quickly report lost items with detailed descriptions
                            </span>
                        </div>
                        <div className="flex items-start">
                            {activeTab === 0 && <div className="w-0.5 h-full bg-gray-800"></div>}
                        </div>
                    </div>

                    <div
                        onClick={() => setActiveTab(1)}
                        className="cursor-pointer flex gap-6"
                    >
                        <div className="flex flex-col justify-center gap-4">
                            <h2 className="text-2xl font-semibold">Report Lost Items</h2>
                            <span className="text-base">
                                Easily search for found items by categories
                            </span>
                        </div>
                        <div className="flex items-start">
                            {activeTab === 1 && <div className="w-0.5 h-full bg-gray-800"></div>}
                        </div>
                    </div>

                    <div
                        onClick={() => setActiveTab(2)}
                        className="cursor-pointer flex gap-6"
                    >
                        <div className="flex flex-col justify-center gap-4">
                            <h2 className="text-2xl font-semibold">Report Lost Items</h2>
                            <span className="text-base">
                                Contact finders directly through the platform
                            </span>
                        </div>
                        <div className="flex items-start">
                            {activeTab === 2 && <div className="w-0.5 h-full bg-gray-800"></div>}
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex h-full relative">
                    {activeTab === 0 && (
                        <img
                            alt="Illustration of lost items reporting"
                            src="https://assets.telegraphindia.com/telegraph/2020/Oct/1603102691_18jamnit-3.jpg"
                            className=" lg:rounded-3xl animate-fadeIn w-full h-auto"
                        />
                    )}
                    {activeTab === 1 && (
                        <img
                            alt="Illustration of searching found items by categories"
                            src="https://i.ytimg.com/vi/8pCo6nO7yGE/maxresdefault.jpg"
                            className="lg:rounded-3xl animate-fadeIn w-full h-auto"
                        />
                    )}
                    {activeTab === 2 && (
                        <img
                            alt="Illustration of direct communication feature"
                            src="https://assets.telegraphindia.com/telegraph/2020/Oct/1602677859_1602501115674_12jamnit-1.jpg"
                            className="lg:rounded-3xl animate-fadeIn w-full h-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features2;
