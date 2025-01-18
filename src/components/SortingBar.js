

import React from "react";

const SortingBar = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setSortOrder("asc")}
        className={`px-4 my-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 `}
      >
        Sort A-Z
      </button>
      <button
        onClick={() => setSortOrder("desc")}
        className={`px-4 py-2 my-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 `}
      >
        Sort Z-A
      </button>
    </div>
  );
};

export default SortingBar;
