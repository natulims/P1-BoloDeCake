import React from "react";
import Search from "../../components/searchbar/Search";
import ToggleCake from "../../components/toggle/ToggleCake";

function Products() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661658689538-b6307b9ae7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-whitesmoke">
              Cardápio
            </h1>
            <p className="mb-5">
              Nosso cardápio contém diversas variedades de sabores para você
              escolher! Desde bolos para aniversário até sabores veganos.
            </p>
            {/* <button className="btn border-cinnabar hover:border-bittersweet ring-2 ring-cinnabar bg-cinnabar hover:bg-bittersweet text-whitesmoke">
              peça já
            </button> */}
          </div>
        </div>
      </div>

      <div className="my-10">
        <Search />
        <ToggleCake />
      </div>
    </>
  );
}

export default Products;
