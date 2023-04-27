import React from "react";

function Categories() {
  return (
    <>
      <section className="mt-10 lg:mt-28">
        <h1 className="text-center flex flex-row justify-center gap-6 text-midnightblue capitalize text-3xl lg:text-md">
          <span>
            <svg
              preserveAspectRatio="none"
              data-bbox="0 0 323.295 323.296"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 323.295 323.296"
              role="presentation"
              aria-hidden="true"
              fill="#FE765E"
            >
              <g>
                <path d="M161.647 0l57.151 104.497 104.497 57.15-104.497 57.152-57.151 104.497-57.15-104.497L0 161.647l104.497-57.15L161.647 0z"></path>
              </g>
            </svg>
          </span>
          categorias
          <span>
            <svg
              preserveAspectRatio="none"
              data-bbox="0 0 323.295 323.296"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 323.295 323.296"
              role="presentation"
              aria-hidden="true"
              fill="#FE765E"
            >
              <g>
                <path d="M161.647 0l57.151 104.497 104.497 57.15-104.497 57.152-57.151 104.497-57.15-104.497L0 161.647l104.497-57.15L161.647 0z"></path>
              </g>
            </svg>
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-center gap-5 ml-10 lg:ml-0">
          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="w-full cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="piña"
              />
            </div>
            <div className="w-full shadow-lg bg-seashell h-16 p-3">
              <a href="#" className="mt-2">
                <span className="text-lg text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolo de casamento
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="w-full cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="piña"
              />
            </div>
            <div className="w-full shadow-lg bg-seashell h-16 p-3">
              <a href="#" className="mt-2">
                <span className="text-lg text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolo de aniversário
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="w-full cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="piña"
              />
            </div>
            <div className="w-full shadow-lg bg-seashell h-16 p-3">
              <a href="#" className="mt-2">
                <span className="text-lg text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolo caseiro
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="w-full cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="piña"
              />
            </div>
            <div className="w-full shadow-lg bg-seashell h-16 p-3">
              <a href="#" className="mt-2">
                <span className="text-lg text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolo vegano
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
