import { useState } from "react";
import Pagination from "@/component/Pagination";
import PostIcon from '@/component/PostIcon';
import ViewButton from "@/component/ViewButton";




//layout fdsfds fsfsdf
async function fetchData() {
  const res = await fetch(
    "https://postgrid-data-api-server.onrender.com/postdata"
  );
  const data = await res.json();
  return data;
}
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: {
      post: data,
    },
  };
}

//layout fdsfds fsfsdf

const IndexPage = ({ post }) => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const totalPages = Math.ceil(post.length / ITEMS_PER_PAGE);
  console.log(totalPages);

  function WordLimit({ text, limit, className }) {
    const words = text.split(" ");

    return (
      <p className={className}>
        {words.slice(0, limit).join(" ")}
        {words.length > limit && "..."}
      </p>
    );
  }

  const limit = 30;

  const [currentView, setCurrentView] = useState("mobile");

  const getContent = () => {
    switch (currentView) {
      case "mobile":
        return (
          <div className="w-full flex justify-center h-[75%] overflow-y-auto  ">
            <div className=" w-[320px]  p-4  ">
              <section className="">
                <div className="grid grid-cols-1 rounded-md gap-4 p-3 bg-[#1e293b] ">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                        <div key={e.id}  className='flex flex-col bg-white py-3'>
                        <div className='fill-white w-16 pl-2 pb-2 flex items-start justify-start'>
                            <div className='rounded-full p-2 bg-emerald-400 flex items-center justify-center'><PostIcon /></div>
                        </div>
                        <div className='pl-4 sm:pl-2 md:pl-4 pr-2'>
                            <h2 className='text-3xl font-bold font-serif '>{e.postTitle}</h2>
                            <WordLimit text={e.postExcerpt} limit={limit} className='text-[1rem] font-sans' />
                        </div>
                    
                    </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        );
      case "tablet":
        return (
          <div className="w-full flex justify-center h-[75%] overflow-y-auto  ">
            <div className=" w-[760px]  sm:overflow-x-auto p-4">
              <section className="">
                <div className="grid grid-cols-2 rounded-lg gap-3 bg-[#1e293b] p-4">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                        <div key={e.id}  className='flex flex-col bg-white py-3'>
                        <div className='fill-white w-16 pl-2 pb-2 flex items-start justify-start'>
                            <div className='rounded-full p-2 bg-emerald-400 flex items-center justify-center'><PostIcon /></div>
                        </div>
                        <div className='pl-4 sm:pl-2 md:pl-4 pr-2'>
                            <h2 className='text-3xl font-bold font-serif '>{e.postTitle}</h2>
                            <WordLimit text={e.postExcerpt} limit={limit} className='text-[1rem] font-sans' />
                        </div>
                    
                    </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        );
      case "desktop":
        return (
          <div className="w-full flex justify-center h-[75%] overflow-y-auto  ">
            <div className=" w-[90%] sm:w-[1280px] overflow-x-hidden sm:overflow-x-auto p-4">
              <section className="">
                <div className="grid grid-cols-3 gap-3 w-full rounded-lg bg-[#1e293b] p-4">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                        <div key={e.id}  className='flex flex-col bg-white py-3'>
                        <div className='fill-white w-16 pl-2 pb-2 flex items-start justify-start'>
                            <div className='rounded-full p-2 bg-emerald-400 flex items-center justify-center'><PostIcon /></div>
                        </div>
                        <div className='pl-4 sm:pl-2 md:pl-4 pr-2'>
                            <h2 className='text-3xl font-bold font-serif '>{e.postTitle}</h2>
                            <WordLimit text={e.postExcerpt} limit={limit} className='text-[1rem] font-sans' />
                        </div>
                    
                    </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-[#1e293b] p-4">
            <h1 className="text-2xl font-bold mb-4">Mobile View</h1>
            <p className="text-gray-700">
              This is the default mobile view of the page. The content and
              design have been optimized for small screens.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#0f172a]">
      <div className="flex justify-center items-center h-screen w-screen  relative">
        <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] flex  justify-center translate-y-[-50%] h-[75%] sm:h-[95%] md:h-[82%]">
          <div className="h-full bg-[#293548] w-[95%] py-3">
            <h2 className="text-4xl text-[#71bde3] text-center font-serif font-bold hover:underline mt-6 mb-8">
              Layout 146
            </h2>
            <ViewButton
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
            {getContent()}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
