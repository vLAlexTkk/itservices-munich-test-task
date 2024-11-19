export function Pagination({ currentVisiblePage, totalVisiblePages, handlePageChange }: any) {
  return (
    <div className="flex items-center text-[10px] md:text-[16px] justify-center mt-10 gap-2">
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => handlePageChange(currentVisiblePage - 1)}
        disabled={currentVisiblePage === 1}
      >
        Previous
      </button>
      {[...Array(totalVisiblePages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded ${currentVisiblePage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => handlePageChange(currentVisiblePage + 1)}
        disabled={currentVisiblePage === totalVisiblePages}
      >
        Next
      </button>
    </div>
  );
}
