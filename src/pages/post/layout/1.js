import { useState } from "react";
import Pagination from "@/component/Pagination";
import ViewButton from "@/component/ViewButton";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Layout from "@/component/Layout";
import Image from "next/image";

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

const Layouts1 = ({ post }) => {
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

  function CollapsibleSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const [buttonText, setButtonText] = useState("Copy");
    const [copied, setCopied] = useState(false);

    function toggleExpansion() {
      setIsExpanded(!isExpanded);
      setIsActive(!isActive);
    }

    SyntaxHighlighter.registerLanguage("html", html);
    const codeString = `<section>
    <div className="grid grid-cols-1 rounded-md gap-3 p-3 bg-back ">
        {post.slice(startIndex, endIndex).map((e) => {
          return (
            <div key={e.id} className="flex flex-col bg-white">
              <div className="">
                <img
                  src={e.postImage}
                  className="w-full h-[360px] object-cover"
                />
              </div>
              <div className="pl-4 sm:pl-2 md:pl-4 pr-2 py-3">
                <h2 className="text-3xl font-bold font-serif ">
                  {e.postTitle}
                </h2>
                <div className="flex flex-row font-serif">
                  <p>{e.postDate}</p>
                  <p className="px-3 font-medium">/</p>
                  <p>{e.postCategory}</p>
                </div>
                <WordLimit
                  text={e.postExcerpt}
                  limit={limit}
                  className="text-[1rem] font-sans"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>`;

    const copyText = () => {
      navigator.clipboard.writeText(`${codeString}`);
      setCopied(true);
      setButtonText("Copied!");
      setTimeout(() => {
        setCopied(false);
        setButtonText("Copy");
      }, 2000);
    };

    return (
      <div className="bg-background overflow-hidden">
        <button
          className={`w-full bg-res-head outline-none text-left py-7 px-6 transition-all duration-0 focus:outline-none ${
            isActive ? "" : "rounded-b-3xl  overflow-hidden"
          }`}
          onClick={toggleExpansion}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium font-serif text-text">
              HTML Code with Tailwind CSS
            </h2>
            <svg
              className={`h-5 w-5 transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="#f5c763"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        <div
          className={`bg-background relative  transition-max-height duration-800  ${
            isExpanded ? "max-h-full" : "max-h-[0px]"
          }`}
        >
          <div className="absolute top-2 left-2">
            <button
              onClick={copyText}
              className="px-4 py-2 font-semibold text-text-mark bg-text rounded-md shadow-md hover:bg-text-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {copied ? "Copied!" : buttonText}
            </button>
          </div>
          <SyntaxHighlighter
            language="html"
            style={dracula}
            customStyle={{
              backgroundColor: "#1f2937",
              borderRadius: " 0 0 1.5rem 1.5rem",
              paddingTop: "50px",
              paddingBottom: "20px",
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }

  const [currentView, setCurrentView] = useState("mobile");

  const getContent = () => {
    switch (currentView) {
      case "mobile":
        return (
          <div className="w-full flex justify-center h-[100%] overflow-y-auto  ">
            <div className=" w-[320px]   ">
              <section className="">
                <div className="grid grid-cols-1 rounded-md gap-3 p-3 bg-back ">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                      <div  key={e.id}  className="flex flex-col bg-white">
                        <div className="">
                          <Image
                            src={e.postImage}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                        <div className="pl-4 sm:pl-2 md:pl-4 pr-2 py-3">
                          <h2 className="text-3xl font-bold font-serif ">
                            {e.postTitle}
                          </h2>
                          <div className="flex flex-row font-serif">
                            <p>{e.postDate}</p>
                            <p className="px-3 font-medium">/</p>
                            <p>{e.postCategory}</p>
                          </div>
                          <WordLimit
                            text={e.postExcerpt}
                            limit={limit}
                            className="text-[1rem] font-sans"
                          />
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
          <div className="w-full flex justify-center h-[100%] overflow-y-auto  ">
            <div className=" w-[760px]  sm:overflow-x-auto p-4">
              <section className="">
                <div className="grid grid-cols-2 rounded-lg gap-3 bg-back p-4">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                      <div key={e.id}  className="flex flex-col  bg-white">
                        <div className="">
                          <Image
                            src={e.postImage}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                        <div className="pl-4 sm:pl-2 md:pl-4 pr-2 py-3 ">
                          <h2 className="text-3xl font-bold font-serif ">
                            {e.postTitle}
                          </h2>
                          <div className="flex flex-row font-serif">
                            <p>{e.postDate}</p>
                            <p className="px-3 font-medium">/</p>
                            <p>{e.postCategory}</p>
                          </div>
                          <WordLimit
                            text={e.postExcerpt}
                            limit={limit}
                            className="text-[1rem] font-sans"
                          />
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
          <div className="w-full flex justify-center h-[100%] overflow-y-auto  ">
            <div className="max-w-[1024px] sm:w-[1280px] overflow-x-hidden sm:overflow-x-auto p-4">
              <section className="">
                <div className="grid grid-cols-3 gap-3 w-full rounded-lg bg-back p-4">
                  {post.slice(startIndex, endIndex).map((e) => {
                    return (
                      <div key={e.id}  className="flex flex-col bg-white">
                        <div className="">
                          <Image
                            src={e.postImage}
                            className="w-full h-[360px] object-cover"
                          />
                        </div>
                        <div className="pl-4 sm:pl-2 md:pl-4 pr-2 py-3 ">
                          <h2 className="text-3xl font-bold font-serif ">
                            {e.postTitle}
                          </h2>
                          <div className="flex flex-row font-serif">
                            <p>{e.postDate}</p>
                            <p className="px-3 font-medium">/</p>
                            <p>{e.postCategory}</p>
                          </div>
                          <WordLimit
                            text={e.postExcerpt}
                            limit={limit}
                            className="text-[1rem] font-sans"
                          />
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
          <div className="bg-back p-4">
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
    <Layout>
      <div className=" flex justify-center py-6 relative">
        <div className="w-[80%] sm:w-full">
          <h2 className="text-4xl text-text text-center font-serif font-bold hover:underline mt-6 mb-8">
            Layout 1
          </h2>
          <ViewButton
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <div className="bg-back pt-6">
            <div className=" max-h-[600px]  overflow-y-auto py-3">
              {getContent()}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="w-full bg-text">
            <CollapsibleSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Layouts1;
