import { useState } from "react";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-md rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <div className="flex items-center border-4 border-greenish-1 rounded-lg">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image ..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 border-greenish-1 bg-greenish-1 text-sm border-4 text-white py-1 px-2 h-full font-bold"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
