import  { useState } from 'react';

const Features1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-10 items-center truncate ">
      <div className="w-full grid gap-20 lg:grid-cols-2 relative lg:ml-[100px]">
        <div className="flex h-full relative ">
          {activeTab === 0 && (
            <img
              alt="Illustration of lost items reporting"
              src="https://assets.telegraphindia.com/telegraph/2020/Oct/1603102691_18jamnit-3.jpg"
              className="lg:rounded-2xl animate-fadeIn "
            />
          )}
          {activeTab === 1 && (
            <img
              alt="Illustration of searching found items by categories"
              src="https://i.ytimg.com/vi/8pCo6nO7yGE/maxresdefault.jpg"
              className="lg:rounded-2xl  animate-fadeIn"
            />
          )}
          {activeTab === 2 && (
            <img
              alt="Illustration of direct communication feature"
              src="https://assets.telegraphindia.com/telegraph/2020/Oct/1602677859_1602501115674_12jamnit-1.jpg"
              className="lg:rounded-2xl  animate-fadeIn"
            />
          )}
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div
            onClick={() => setActiveTab(0)}
            className="cursor-pointer flex gap-8"
          >
            <div className="flex items-start">
              {activeTab === 0 && <div className="w-0.5 h-full bg-gray-800"></div>}
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-semibold">Report Lost Items</h2>
            
              <span className="text-sm">
                Quickly report lost items with detailed descriptions
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(1)}
            className="cursor-pointer flex gap-8"
          >
            <div className="flex items-start">
              {activeTab === 1 && <div className="w-0.5 h-full bg-gray-800"></div>}
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-semibold">Search Found Items</h2>
              <span className="text-sm">
                Easily search for found items by categories
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(2)}
            className="cursor-pointer flex gap-8"
          >
            <div className="flex items-start">
              {activeTab === 2 && <div className="w-0.5 h-full bg-gray-800"></div>}
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl font-semibold">Direct Communication</h2>
              <span className="text-sm">
                Contact finders directly through the platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features1;
