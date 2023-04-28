import React from "react";

function About() {
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
          sobre nós
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
        <article className="flex flex-col lg:flex-row justify-center">
          <div className="mt-2 lg:ml-28 lg:w-[35rem]">
            <p className="text-justify tracking-tight py-4 px-4">
              A Bolo de Cake tem orgulho em dizer que foi criada para atender a
              todos os gostos pensando na melhoria de atendimento, rapidez e a
              qualidade de seus produtos. Além disso, somos referência na área
              de bolos, somos exatamente o que você precisava e não sabia ainda!
              Inaugurada há 7 anos atrás, voltada para a confeitaria gourmet, a
              redundância de nosso nome traz a importância da qualidade do nosso
              produto. Afinal, bolo qualquer um bolo qualquer um sabe fazer, mas
              nós nos destacamos por causa da nossa dedicação para deixar nossos
              clientes felizes e satisfeitos com seus pedidos.
            </p>
          </div>
          <div className="">
            <figure className="flex justify-center">
              <img
                alt="Signage"
                src="https://cdn-icons-png.flaticon.com/512/8239/8239542.png"
                class="h-56 w-96 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />
            </figure>
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
