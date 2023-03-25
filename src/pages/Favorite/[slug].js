import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../../data";

function getCakes(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const barang = getCakes(slug);
  console.log(slug);

  if (Object.keys(barang).length === 1) {
    return <div>Item not found</div>;
  }

  // const { cartCount, addItem } = useShoppingCart();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  // const toastId = useRef();
  // const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? 's' : ''}...`
    );
    addItem(props, qty);
  };

  return (
    <main className="h-screen">
      
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4">
            <h1 className="text-5xl font-bold leading-none">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
            <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
            </div>
          </div>
          
        </article>
        <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="w-full mx-auto space-y-4">
            <p className="text-sm dark:text-gray-400">by
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-400">
                <span>Leroy Jenkins</span>
              </a>on
              <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
            </p>
          </div>
          <div className="dark:text-gray-100 mt-3">
            <p>Insert the actual text content here...</p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Detail