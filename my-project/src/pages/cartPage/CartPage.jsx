import React from "react";

function CartPage() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl max-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-center flex flex-row justify-center gap-6 text-midnightblue text-3xl lg:text-md">
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
          Carrinho
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

        <div className="flex justify-center">
          <div className="mt-8 w-96">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src="https://www.carolcalazans.com.br/wp-content/uploads/2021/02/bolo-chocolatudo-2.jpg"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-cinnabar font-bold">
                    Bolo de chocolate
                  </h3>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <input
                      type="number"
                      min="1"
                      className="h-8 w-12 rounded focus:border focus:border-bittersweet bg-whitesmoke p-0 text-center text-xs text-midnightblue focus:text-cinnabar [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-midnightblue transition hover:text-cinnabar">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <img
                  src="https://www.carolcalazans.com.br/wp-content/uploads/2021/02/bolo-chocolatudo-2.jpg"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-cinnabar font-bold">
                    Bolo de chocolate
                  </h3>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <input
                      type="number"
                      min="1"
                      className="h-8 w-12 rounded focus:border focus:border-bittersweet bg-whitesmoke p-0 text-center text-xs text-midnightblue focus:text-cinnabar [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-midnightblue transition hover:text-cinnabar">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <img
                  src="https://www.carolcalazans.com.br/wp-content/uploads/2021/02/bolo-chocolatudo-2.jpg"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-cinnabar font-bold">
                    Bolo de chocolate
                  </h3>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <input
                      type="number"
                      min="1"
                      className="h-8 w-12 rounded focus:border focus:border-bittersweet bg-whitesmoke p-0 text-center text-xs text-midnightblue focus:text-cinnabar [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-midnightblue transition hover:text-cinnabar">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <img
                  src="https://www.carolcalazans.com.br/wp-content/uploads/2021/02/bolo-chocolatudo-2.jpg"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-cinnabar font-bold">
                    Bolo de chocolate
                  </h3>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <input
                      type="number"
                      min="1"
                      className="h-8 w-12 rounded focus:border focus:border-bittersweet bg-whitesmoke p-0 text-center text-xs text-midnightblue focus:text-cinnabar [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-midnightblue transition hover:text-cinnabar">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-midnightblue">
                  <div className="flex justify-between">
                    <dt className="uppercase font-bold">Total</dt>
                    <dd className="font-bold">R$69,90</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-cinnabar px-5 py-3 text-sm text-gray-100 transition hover:bg-bittersweet"
                  >
                    Finalizar Compra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
