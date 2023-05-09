import React from "react";
import cake1 from "../../assets/img/bolo1.webp";
import cake2 from "../../assets/img/bolo2.webp";
import cake3 from "../../assets/img/bolo3.webp";
import cake4 from "../../assets/img/bolo4.webp";

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

        <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10 ml-10 lg:ml-0">
          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="mask mask-hexagon w-[18rem] cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src={cake4}
                alt="bolos caseiros"
              />
            </div>
            <div className="w-full h-16 p-3">
              <a href="#" className="mt-2">
                <div className="divide-y"></div>
                <span className="text-lg ml-12 text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolos caseiros
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="mask mask-hexagon w-[18rem] cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src={cake3}
                alt="bolos veganos"
              />
            </div>
            <div className="w-full h-16 p-3">
              <a href="#" className="mt-2">
                <div className="divide-y"></div>
                <span className="text-lg ml-12 text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolos veganos
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="mask mask-hexagon w-[18rem] cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src={cake1}
                alt="bolos para casamentos"
              />
            </div>
            <div className="w-full h-16 p-3">
              <a href="#" className="mt-2">
                <div className="divide-y"></div>
                <span className="text-lg ml-5 text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolos para casamentos
                </span>
              </a>
            </div>
          </div>

          <div className="w-72 h-96 rounded m-3">
            <div className="h-3/4 w-full overflow-hidden">
              <img
                className="mask mask-hexagon w-[18rem] cursor-pointer max-w-xs hover:scale-105 transition  duration-300 ease-in-out h-full object-cover"
                src={cake2}
                alt="bolos para aniversários"
              />
            </div>
            <div className="w-full h-16 p-3">
              <a href="#" className="mt-2">
                <div className="divide-y"></div>
                <span className="text-lg ml-5 text-midnightblue hover:text-[#FE765E] font-semibold uppercase tracking-wide ">
                  bolos para aniversários
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
