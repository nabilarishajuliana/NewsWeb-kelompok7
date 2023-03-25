import React from 'react'
import Link from 'next/link';


const ImageCard = ({ item }) => {
    const desc = item.description;
    const res = desc.substr(0, 40);

    return (
        <>
            <div class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                style={{ backgroundPosition: "50%;" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={item.image} class="w-full" />
                <Link href={`/Favorite/${item.id}`} key={item.id}>
                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                        <div class="absolute top-0 left-0 m-6">
                            <span class="text-white bg-blue-500 rounded-full px-4 py-2 text-xs font-bold">{item.category}</span>
                        </div>
                        <div class="flex justify-start items-end h-full">
                            <div class="text-white m-6">

                                <h5 class="font-bold text-lg mb-3">{item.name}</h5>
                                <p>
                                    <small>Published <u>{item.date}</u> by {item.writter}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ImageCard