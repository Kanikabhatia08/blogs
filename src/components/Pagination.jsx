import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    <div className='bg-white flex justify-center mx-auto w-full items-center border-2 shadow-lg fixed bottom-0'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
          {
            page > 1 && 
              (<button onClick={() => handlePageChange(page-1)}
                className='rounded-md px-4 py-1 border'>
                Previous
              </button>)
          }

          { 
            page < totalPages &&
            (<button onClick={() => handlePageChange(page+1)}
              className='rounded-md px-4 py-1 border'>
              Next
            </button>)
          }

        </div>
        

        <p className='font-bold'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
