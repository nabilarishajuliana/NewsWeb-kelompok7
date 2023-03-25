import React from 'react'
import ImageCard from './ImageCard'
import { useEffect, useState } from "react";
import data from "../Data.json"
import { Navbar, Dropdown } from "flowbite-react";
import News from './News';




function Card() {

    const [keyword, setKeyword] = useState("");
    const [hasilFilter, setHasilfilter] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [data, setData] = useState([]);

    const handlefilter = (e) => {
        const filterData = data.filter((e) => {
            return e.category.toLowerCase().includes(keyword.toLowerCase());
        });
        setHasilfilter(filterData);
    };
    console.log(keyword);

    useEffect(() => {
        handlefilter();
    }, [data, keyword]);

    function getFiltered(filtered) {
        if (filtered === 0) {
            return "Barang Tidak Ada";
        } else {
            return filtered + " Products ";
        }
    }

    // useEffect(() => {

    //     async function getData() {
    //         try {
    //             const response = await fetch("../Data.json");
    //             const data = await response.json();
    //             setData(data.record);

    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }

    //     getData();
    // }, []);

    return (
        <>

            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/"
                    style={{ color: "black" }}>
                    <h1 className=' text-xl'><b>INI BERITA</b><b style={{ color: "red" }}>KU</b></h1>

                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className="ml-auto ">
                    <Navbar.Link
                        href="/Home"
                        style={{ color: "black", paddingTop: "10px" }}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link>
                        <form onChange={handlefilter}>
                            <select
                                className="filter border-none hover:border-none "
                                name="isAvailable"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            >
                                <option value="">Category</option>
                                <option value="Politics">Politics</option>
                                <option value="Sold Out">Sold Out</option>
                                <option value="Pre-Order">Pre-Order</option>
                            </select>
                        </form>
                    </Navbar.Link>
                    <Navbar.Link href="/navbars"
                        style={{ color: "black", paddingTop: "10px" }}
                    >
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

            <News />

            <div className="p-5 text-black z-[2] mt-10">
                <div className="text-left mb-5 pb-2 border-b-2 border-teal-400">
                    <h3 className='text-4xl font-bold'>Berita Terkini</h3>
                    <p className=''> {new Date().toLocaleDateString()}</p>
                </div>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let's search" required
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                        />
                        
                    </div>
                </form>
            </div>

            <div class="container my-5 px-6 mx-auto">

                <section class="mb-32 text-gray-800">


                    <div class="grid lg:grid-cols-3 gap-6">
                        {hasilFilter.length > 0
                            ? hasilFilter
                                .filter((products) =>
                                    searchTerm !== ""
                                        ? products.name.toLowerCase().includes(searchTerm)
                                        : products
                                )
                                .map((item) => (
                                    <ImageCard key={item.id} item={item} coba={item.image} />
                                ))
                            : data
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (
                                        val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                })
                                .map((val) => {
                                    return (
                                        <div className="template" key={val.id}>
                                            <img src={val.image} alt="" />
                                            <h3 className="card-name">{val.name}</h3>
                                            <p className="card-text">{val.description}</p>
                                        </div>
                                    );
                                })}
                    </div>

                </section>

            </div>
        </>
    )
}

export default Card