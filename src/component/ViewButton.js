import React from "react";
const ViewButton = ({ currentView, setCurrentView }) => {
    const handleClick = (view) => {
      setCurrentView(view);
    };
  
    return (
      <div className=" w-full flex justify-center font-serif bg-res-head py-8 rounded-t-3xl">
        <button
          className={`mx-2 px-4 py-2 font-medium rounded-full ${
            currentView === "mobile"
              ? 'bg-text hover:bg-text-hover text-text-mark  font-medium uppercase ' : 'bg-back hover:bg-background text-text-mark font-medium uppercase'
          }`}
          onClick={() => handleClick("mobile")}
        >
          Mobile
        </button>
        <button
          className={`mx-2 px-4 py-2 font-medium rounded-full ${
            currentView === "tablet"
              ? 'bg-text hover:bg-text-hover text-text-mark  font-medium uppercase ' : 'bg-back hover:bg-background text-text-mark font-medium uppercase'
          }`}
          onClick={() => handleClick("tablet")}
        >
          Tablet
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-full ${
            currentView === "desktop"
              ? 'bg-text hover:bg-text-hover text-text-mark  font-medium uppercase ' : 'bg-back hover:bg-background text-text-mark font-medium uppercase'
          }`}
          onClick={() => handleClick("desktop")}
        >
          Desktop
        </button>
      </div>
    );
  };

  export default ViewButton