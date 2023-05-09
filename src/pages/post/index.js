import Layout from "@/component/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




export async function getServerSideProps() {
  const res = await fetch("https://postgrid-data-api-server.onrender.com/layoutList");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

function Post({data}) {
 






  // const layout = [
  //   {
  //     id: "1",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "2",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "3",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "4",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "5",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "6",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "7",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "8",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "9",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "10",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "11",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "12",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "13",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "14",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "15",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "16",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "17",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "18",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "19",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "20",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "21",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "22",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "23",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "24",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "25",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "26",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "27",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "28",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "29",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "30",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "31",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "32",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "33",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "34",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "35",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "36",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "37",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "38",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "39",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //     id: "40",
  //     title: "Layout ",
  //     image: "/images/layout/",
  //     url: "/post/layout",
  //   },
  //   {
  //       id: "41",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "42",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "43",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "44",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "45",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "46",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "47",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "48",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "49",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //       id: "50",
  //       title: "Layout ",
  //       image: "/images/layout/",
  //       url: "/post/layout",
  //     },
  //     {
  //         id: "51",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "52",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "53",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "54",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "55",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "56",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "57",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "58",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
  //       {
  //         id: "69",
  //         title: "Layout ",
  //         image: "/images/layout/",
  //         url: "/post/layout",
  //       },
    
  // ];


  const [displayCount, setDisplayCount] = useState(6);

  const displayedItems = data.slice(0, displayCount);

  function handleLoadMore() {
    setDisplayCount(displayCount + 6);
  }

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likeCount);

  const handleLikeClick = () => {
    // Make a PUT request to update the like count on the server
    fetch(`https://postgrid-data-api-server.onrender.com/layoutList`, { method: "PUT" })
      .then(res => res.json())
      .then(data => {
        // Update the local state with the new like count
        // let liked = {data.likeCount + 1}
        // setLikeCount(data.likeCount + 1);
        // setLiked(true);
      })
      .catch(err => console.error(err));
  };

    // routing to a page 
  // const router = useRouter();

  // function handleClick() {
  //   router.push('/post/layout/1');
  // }

  
  return (
    <Layout>
    <div className="flex justify-center bg-background  min-w-full pt-10">
        <div className="w-[85%] ">
            <div className="  grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {displayedItems.map( e => (
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
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            
        </div>
        
        <div className="text-center my-6">
            <a onClick={handleLoadMore} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-text rounded hover:bg-white group">
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-text-mark absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-text-sec font-bold font-serif transition-colors duration-300 ease-in-out group-hover:text-white">Load More</span>
            </a>
        </div>
        </div>
    </div>
    {/* <button onClick={handleClick}>Go to page</button> */}
    </Layout>
  );
}
export default Post;
