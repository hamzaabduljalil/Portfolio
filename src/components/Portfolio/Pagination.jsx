// import React from 'react'

// const Pagination = () => {
//   return (
//     <div className="flex justify-center mt-6  ">
//       <button
//         className={`mx-2 px-4 py-2 rounded border-solid border-blue-300 border ${
//           currentPage === 1
//             ? "text-gray-400 cursor-not-allowed"
//             : "text-blue-500 cursor-pointer"
//         }`}
//         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       {[...Array(totalPages)].map((_, index) => (
//         <button
//           key={index + 1}
//           className={`mx-1 px-4 py-2 rounded border-solid border-blue-300 border cursor-pointer ${
//             currentPage === index + 1
//               ? "bg-blue-500 text-white"
//               : "text-blue-500"
//           }`}
//           onClick={() => setCurrentPage(index + 1)}
//         >
//           {index + 1}
//         </button>
//       ))}
//       <button
//         className={`mx-2 px-4 py-2 rounded border-solid border-blue-300 border ${
//           currentPage === totalPages
//             ? "text-gray-400 cursor-not-allowed "
//             : "text-blue-500 cursor-pointer"
//         }`}
//         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default Pagination

import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-5">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2  rounded-md border-solid border-blue-300 border ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed "
            : "text-blue-500 cursor-pointer"
        }`}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2  rounded-md border-solid border-blue-300 border cursor-pointer ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2  rounded-md border-solid border-blue-300 border ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed "
            : "text-blue-500 cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
