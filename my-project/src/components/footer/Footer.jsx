import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer bg-[#F3C49B] p-10 text-base-content">
        <div>
          <span className="footer-title text-midnightblue">
            Venha nos conhecer!
          </span>
          <p className="text-cinnabar tracking-wide font-bold">IPANEMA | RJ</p>
          <p className="text-cinnabar">Rua Vinicius de Moraes, 110</p>
          <p className="text-bittersweet">CEP: 22411-010</p>

          <p className="text-cinnabar tracking-wide font-bold">MORUMBI | SP</p>
          <p className="text-cinnabar"> Avenida Morumbi, 8264</p>
          <p className="text-bittersweet">CEP: 04703-900</p>
        </div>
        <div className="mt-2">
          <span className="footer-title text-midnightblue">
            Nos siga nas redes sociais
          </span>
          <ul className="flex flex-row">
            <li className="text-4xl text-bittersweet hover:text-cinnabar">
              <i className="bx bxl-twitter"></i>
            </li>
            <li className="text-4xl text-bittersweet hover:text-cinnabar">
              <i className="bx bxl-instagram"></i>
            </li>
            <li className="text-4xl text-bittersweet hover:text-cinnabar">
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-midnightblue">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <p className="label-text tracking-tight text-cinnabar">
                Fique por dentro de todas as novidades e ganhe cupons
                exclusivos! Se inscreva na nossa newsletter!
              </p>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="seuemail@site.com"
                className="input bg-whitesmoke placeholder-red-400 focus:placeholder-red-500 focus:border-cinnabar focus:border-2 input-bordered w-full pr-16"
              />
              <button className="btn btn-primary bg-bittersweet border-bittersweet hover:bg-cinnabar hover:border-cinnabar absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
