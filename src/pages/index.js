import Layout from "@/component/Layout";
import React, { useRef, useEffect, useState } from "react";
import { useGesture } from "react-use-gesture";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Section 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Section 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const SectionSlider = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className="relative h-[50vw]">
      <div className="slider h-full" ref={sliderRef}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="slides flex flex-col justify-center items-center"
          >
            <h2 className="text-2xl text-zinc-100 font-bold mb-2">
              {section.title}
            </h2>
            <p className="text-gray-200">{section.content}</p>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-l"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

// image slider
const datas = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
  },
  {
    title: "5",
  },
  {
    title: "6",
  },
  {
    title: "7",
  },
  {
    title: "8",
  },
  {
    title: "9",
  },
  {
    title: "10",
  },
];

//  const API_URL = 'https://postgrid-data-api-server.onrender.com/layoutList'

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://postgrid-data-api-server.onrender.com/layoutList"
      );
      const jsonUsers = await response.json();
      setUsers(jsonUsers);
    };

    fetchUsers();
  }, []);

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const Slider = () => {
    const sliderRef = useRef(null);

    const handlePrevClick = () => {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };

    const handleNextClick = () => {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };
    return (
      <div className="relative" onWheel={handleScroll}>
        <div
          className=" flex flex-nowrap w-[100vw] overflow-x-scroll slider"
          ref={sliderRef}
        >
          {users.map((e, index) => (
            <div className="px-4 sm:mx-2 sm:px-0 slide">
              {/* Item content */}
              <div key={e.id} className="w-[25vw] sm:w-screen   flex justify-center items-center text-3xl ">
                {/* visiul data  */}
                <div className="rounded-lg shadow-[0px_10px_20px_7px_#00000024] bg-back border-gray-700">
                  <a href={`${e.url}/${e.id}`}>
                    <img
                      className="rounded-t-lg"
                      src={`${e.image}${e.id}.png`}
                      alt=""
                    />
                  </a>
                  <div className="p-5 flex">
                    <a href={`${e.url}/${e.id}`} className="grow">
                      <h5 className="mb-2 text-2xl font-medium font-serif tracking-tight text-text">
                        {`${e.title}${e.id}`}
                      </h5>
                    </a>
                    <div>
                      {/* <button onClick={handleLikeClick} disabled={liked}>
        {liked ? "Liked" : "Like"}
      </button>
      <p>{likeCount} likes</p> */}
                    </div>

                    <a
                      href={`${e.url}/${e.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center font-serif uppercase text-text-mark  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-text hover:bg-text-hover "
                    >
                      Open Layout
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                {/* visiul data  */}
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-l"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <SectionSlider />
      <div className="flex flex-col">
        <div className="text-xl font-bold h-12 bg-slate-200 text-text flex justify-between px-10 items-center">
          <div>Post Layout </div>
          <div>view All</div>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
