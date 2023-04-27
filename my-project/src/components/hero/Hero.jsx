import React from "react";
import hero from "../../assets/img/teste.svg";

function Hero() {
  const backgroundImage = hero;
  return (
    <>
      <header
        className="flex lg:flex-row justify-around bg-[#FFF5EC] flex-col w-full h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="flex flex-col justify-center lg:w-96">
          <h1 className="lg:text-9xl text-4xl text-center text-midnightblue">
            bolo de cake
          </h1>
          <span className="text-justify px-4 text-darkpurple">
            {" "}
            Atendemos a todos os paladares e dietas alimentares, com uma
            variedade exclusiva de produtos feito com ingredientes selecionados
            e elaborados exclusivamente para você.
          </span>
          <div className="flex flex-row justify-center gap-8">
            <button className="bg-[#fe765e] hover:bg-[#f16e56] text-white py-2 px-8">
              peça ja
            </button>
            <button className="bg-transparent py-2 text-midnightblue px-5 font-semibold border-midnightblue hover:border-blue-700 hover:text-blue-600 p-2 border-2">
              <i class="bx bx-book-open font-bold"></i> catalogo
            </button>
          </div>
        </div>
        <div className="">
          <figure>
            <img
              className="w-[40rem] mt-10"
              src="https://64.media.tumblr.com/10cd1db43f646511220a9608a54aeed8/77d1fd0eeaf12c54-d9/s640x960/247ce7745a1070417aca70d16a256c1e714dc0a7.pnj"
              alt=""
            />
          </figure>
        </div>
      </header>
      <section>
        <div className="flex justify-center">
          <figure>
            <img
              className=""
              src="https://64.media.tumblr.com/957595a7baa230865cf130468659f6cd/94db7c3e77248438-a9/s1280x1920/d51be6ef0eeb1cb071074c85613b32ca25ff4cad.pnj"
              alt=""
            />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
