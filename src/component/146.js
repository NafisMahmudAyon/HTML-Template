// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import PostIcon from '@/component/PostIcon';
import Pagination from '@/component/Pagination';

async function fetchData() {
        const res = await fetch('https://postgrid-data-api-server.onrender.com/postdata');
        const data = await res.json();
        return data;
      }
      export async function getStaticProps() {
        const data = await fetchData();
    return {
        props: {
        post: data
        }
    }
    }

    

function Layouts146({post}) {
    
  const ITEMS_PER_PAGE = 6
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE

    const totalPages = Math.ceil(post.length / ITEMS_PER_PAGE)
    console.log(totalPages);
    
    
    function WordLimit({ text, limit, className }) {
        const words = text.split(' ');
      
        return (
          <p className={className}>
            {words.slice(0, limit).join(' ')}
            {words.length > limit && '...'}
          </p>
        );
    }
      
    const limit = 30;
    
    return(
      <section className=' flex items-center justify-center'>
        <div className='w-[70%] sm:w-[90%] '>
          <h2 className='text-4xl text-center font-serif font-bold hover:underline my-6'>Layout 146</h2>
          <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-3 md:gap-4 py-2'>
            {post
            .slice(startIndex, endIndex)
            .map(e => {
                  return(
                    
                      <div key={e.id} className='flex flex-row sm:flex-col md:flex-row '>
                          <div className='fill-white w-16 sm:pl-2 sm:pb-2 flex items-start justify-start'>
                              <div className='rounded-full p-2 bg-emerald-400 flex items-center justify-center'><PostIcon /></div>
                          </div>
                          <div className='pl-4 sm:pl-2 md:pl-4 pr-2'>
                              <h2 className='text-3xl font-bold font-serif '>{e.postTitle}</h2>
                              <WordLimit text={e.postExcerpt} limit={limit} className='text-[1rem] font-sans' />
                          </div>
                      
                      </div>
                  )
              })
          }   
          </div>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    )
}

export default Layouts146