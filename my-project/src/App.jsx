import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Team from "./pages/team/Team";
import Products from "./pages/products/Products";
import Cart from "./pages/cartPage/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        {/* <section className="fixed max-w-md p-4 mx-auto bg-seashell border-2 border-bittersweet left-12 bottom-16 rounded-2xl">
          <h2 className="font-semibold text-bittersweet">
            🍪 Alerta de Cookies
          </h2>

          <p className="mt-4 text-sm text-midnightblue">
            Este site utiliza cookies para melhorar sua navegação. Ao continuar,
            você concorda com o uso de nossa Política de Cookies.{" "}
          </p>

          <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
            <button className="text-xs bg-bittersweet font-medium rounded-lg hover:bg-fawn text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
              Aceitar
            </button>
          </div>
        </section> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
