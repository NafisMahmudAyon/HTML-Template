// Pagination.js

import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const canPrevious = currentPage > 1
  const canNext = currentPage < totalPages

  const handlePrevious = () => {
    onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div className="flex justify-center py-8 font-serif">
      <button
        className={`px-4 py-2 mr-2 ${
          canPrevious ? 'bg-text text-text-mark  font-medium uppercase ' : 'bg-res-head text-text-mark font-medium uppercase'
        } rounded-md`}
        onClick={handlePrevious}
        disabled={!canPrevious}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 ${
          canNext ? 'bg-text text-text-mark  font-medium uppercase ' : 'bg-res-head text-text-mark font-medium uppercase'
        } rounded-md`}
        onClick={handleNext}
        disabled={!canNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination