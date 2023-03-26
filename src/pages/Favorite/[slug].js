import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../../data";
import Footer from "Components/Footer";
import { AiFillCloseCircle } from "react-icons/ai";

function getNews(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const berita = getNews(slug);
  console.log(slug);

  if (Object.keys(berita).length === 1) {
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
      
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-5 pb-5">
      <a rel="noopener noreferrer" href="/Home" className="p-1 "><AiFillCloseCircle style={{width:"40px",height:"40px " ,color:"red" , marginLeft:"10px"}}/></a>
      
        <article className="max-w-2xl px-6 pt-5 pb-10 mx-auto dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4">
            <h1 className="text-5xl font-bold leading-none">{berita.name}</h1>
            {/* <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
              <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
            </div> */}
          </div>
          
        </article>
        <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={berita.image}
              alt=""
            />
          </div>
          <div className="w-full mx-auto space-y-4">
            <p className="text-sm dark:text-gray-400">by {berita.writter} on {berita.date}
            </p>
          </div>
          <div className="dark:text-gray-100 mt-3 mb-5">
            <p>{berita.description}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Detail