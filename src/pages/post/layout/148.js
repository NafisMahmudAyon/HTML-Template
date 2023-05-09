// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import PostIcon from '@/component/PostIcon';
import Pagination from '@/component/Pagination';
import LinkedButton from '@/component/LinkedButton';

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

    

function Layouts148({post}) {
    
  const ITEMS_PER_PAGE = 6
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE

    const totalPages = Math.ceil(post.length / ITEMS_PER_PAGE)
    
    
    
    
    
    return(
      <section className=' flex items-center justify-center'>
        <div className='w-[70%] sm:w-[90%] '>
          <h2 className='text-4xl text-center font-serif font-bold hover:underline my-6'>Layout 148</h2>
          <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-3 md:gap-6 py-2'>
            {post
            .slice(startIndex, endIndex)
            .map(e => {
                  return(
                    
                      <div key={e.id}  className='bg-slate-100 hover:bg-slate-300 py-4 px-2'>
                        <p>{e.postCategory}</p>
                        <div>
                            <h2 className='text-3xl font-bold font-serif my-5 break-words'>{e.postTitle}</h2>
                            <LinkedButton href="#" text="Read More" className="inline-block mt-4 bg-[#28357f] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
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

export default Layouts148