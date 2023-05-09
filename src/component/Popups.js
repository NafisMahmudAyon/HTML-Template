import { useState } from 'react';

function Popups({source}) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState('100%');
  const [activeButton, setActiveButton] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


    const handleButtonClick = (newWidth, buttonId) => {
    setWidth(newWidth);
    setActiveButton(buttonId);
  };


  return (
    <>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={togglePopup}
      >
        Open Popup
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 rounded shadow-lg">
            <div className="flex justify-center mb-4">
              <button
                className={`mr-2 border border-gray-400 rounded py-2 px-4 
                ${
                    activeButton === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }
                `}
                onClick={() => handleButtonClick('320px', 'mobile')}
              >
                Mobile
              </button>
              <button
                className={`mr-2 border border-gray-400 rounded py-2 px-4 
                ${
                    activeButton === 'tablet' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                onClick={() => handleButtonClick('760px', 'tablet')}
              >
                Tablet
              </button>
              <button
                className={`mr-2 border border-gray-400 rounded py-2 px-4 
                ${
                    activeButton === 'desktop' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                onClick={() => handleButtonClick('100%', 'desktop')}
              >
                Desktop
              </button>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <iframe
                className="w-full h-96"
                src={source}
                title="Example Website"
                style={{ width }}
                ></iframe>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={togglePopup}
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popups