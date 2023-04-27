import React from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import About from "../../components/about-us/About";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <>
      {/* <section class="fixed max-w-md p-4 mx-auto bg-seashell border-2 border-bittersweet left-12 bottom-16 rounded-2xl">
        <h2 class="font-semibold text-bittersweet">🍪 Alerta de Cookies</h2>

        <p class="mt-4 text-sm text-midnightblue">
          Este site utiliza cookies para melhorar sua navegação. Ao continuar,
          você concorda com o uso de nossa Política de Cookies.{" "}
        </p>

        <div class="flex items-center justify-between mt-4 gap-x-4 shrink-0">
          <button class=" text-xs bg-bittersweet font-medium rounded-lg hover:bg-fawn text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Aceitar
          </button>
        </div>
      </section> */}
      <Hero />
      <Categories />
      <About />
      <Testimonial />
    </>
  );
}

export default Home;
