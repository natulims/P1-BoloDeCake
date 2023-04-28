import React from "react";

function Team() {
  return (
    <>
      <section>
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
          nossa equipe
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

        <article className="mt-28">
          <p className="text-center tracking-wide mb-10 text-midnightblue text-2xl font-bold">
            Squad que desenvolveu o projeto Bolo de Cake:
          </p>
          <div className="flex lg:flex-row flex-col gap-20 justify-center">
            <div className="flex flex-col ml-10 justify-center">
              <figure>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="mask mask-hexagon cursor-pointer"
                    src="https://media.licdn.com/dms/image/D4D03AQElqAwUmu1WNw/profile-displayphoto-shrink_800_800/0/1676508361621?e=1687996800&v=beta&t=xXU0wGIfpxgjPUYICK2fBjeArGSaUEwUuRMyIonV6JU"
                    alt=""
                  />
                  <div class="mask mask-hexagon absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-bittersweet bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-50"></div>
                </div>
              </figure>
              <span className="ml-10 text-4xl">Natalia Carvalho</span>
              <p className="ml-16 font-bold text-cinnabar tracking-wide">
                Gestora de Conhecimento
              </p>
              <ul className="flex ml-28 flex-row">
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://www.linkedin.com/in/nxtxlixlc/"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://github.com/natulims"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col ml-10 justify-center">
              <figure>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="mask mask-hexagon"
                    src="https://media.licdn.com/dms/image/C4D03AQHc-U649DnKRg/profile-displayphoto-shrink_800_800/0/1658433712509?e=1687996800&v=beta&t=4c5rc7ovCsu9gRExLDBI88F6kOfdCFj-EGLhPMiMNwU"
                    alt=""
                  />
                  <div class="mask mask-hexagon absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-bittersweet bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-50"></div>
                </div>
              </figure>
              <span className="ml-10 text-4xl">Dayse Campos</span>
              <p className="ml-24 font-bold text-cinnabar tracking-wide">
                Co-Facilitadora
              </p>
              <ul className="flex ml-28 flex-row">
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://www.linkedin.com/in/dayse-campos-dev/"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://github.com/dayseCampos"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col ml-10 justify-center">
              <figure>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="mask mask-hexagon"
                    src="https://media.licdn.com/dms/image/D4E35AQFuiF_qLHv4jQ/profile-framedphoto-shrink_800_800/0/1665057639392?e=1683255600&v=beta&t=98dMeEzJXdjJZSBs4jbiasIkZfS9S9bhCvj8R6jfk8Q"
                    alt=""
                  />
                  <div class="mask mask-hexagon absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-bittersweet bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-50"></div>
                </div>
              </figure>
              <span className="ml-10 text-4xl">Matheus Cardoso</span>
              <p className="ml-24 text-cinnabar font-bold tracking-wide">
                Colaborador
              </p>
              <ul className="flex ml-28 flex-row">
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://www.linkedin.com/in/programatheus/"
                  >
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-4xl text-bittersweet hover:text-cinnabar"
                    href="https://github.com/cardosomath"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Team;
