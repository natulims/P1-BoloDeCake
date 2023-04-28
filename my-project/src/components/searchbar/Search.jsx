import React from "react";

function Search() {
  return (
    <>
      <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-whitesmoke overflow-hidden">
          <div class="grid bg-[#FFBD83] place-items-center h-full w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 font-bold w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F3F3F3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="input input-bordered peer indent-4 h-full focus:text-[#FE765E] w-full bg-white outline-none text-sm pr-2"
            type="text"
            id="search"
            placeholder="Buscar no cardápio"
          />
        </div>
      </div>
    </>
  );
}

export default Search;
