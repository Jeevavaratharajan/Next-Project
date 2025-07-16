import React from 'react'

const Spinner = () => {
  return (
       <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-14 w-14  border-5 border-t-blue-600 border-l-blue-600 border-b-blue-600 border-blue-200 border-solid"></div>
    </div>
  )
}

export default Spinner;