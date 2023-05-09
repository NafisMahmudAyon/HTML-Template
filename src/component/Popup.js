import React, { useState } from 'react';


const Popup = ({source}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState('100%');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (newWidth) => {
    setWidth(newWidth);
  };

  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={togglePopup}>
        Open Popup
      </button>

      {isOpen && (
        
          <div className="px-4 h-[80%] py-2 relative border-solid border-lime-500 border-[2px]">
            
            <h1 className="text-lg font-bold mb-2">Responsive Webpage</h1>
            <button onClick={togglePopup} className='absolute top-0 right-4 text-red-800 font-serif text-2xl font-bold'>X</button>
            
            <div className="flex justify-center mb-4">
              <button className="mr-2 border border-gray-400 rounded py-2 px-4  hover:bg-blue-700 active:bg-blue-800 " onClick={() => handleButtonClick('320px')}>
                Mobile
              </button>
              <button className="mr-2 border border-gray-400 rounded py-2 px-4  hover:bg-blue-700 active:bg-blue-800 " onClick={() => handleButtonClick('768px')}>
                Tablet
              </button>
              <button className="border border-gray-400 rounded py-2 px-4  hover:bg-blue-700 active:bg-blue-800 " onClick={() => handleButtonClick('100%')}>
                Desktop
              </button>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <iframe src={source} className=" h-[500px]" style={{ width }}></iframe>
            </div>
          </div>
        
      )}
    </>
  );
};

export default Popup;