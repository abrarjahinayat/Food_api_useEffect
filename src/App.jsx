import axios from "axios";
import React, { useState, useEffect } from "react";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("https://api.sampleapis.com/coffee/iced").then((data) => {
      setProducts(data.data);
      setFilterResult(data.data);
    });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    const filtered = products.filter((item) =>
      item.title.toUpperCase().replaceAll(" ", "").includes(value.toUpperCase())
    );
    setFilterResult(filtered);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mt-10">
      {/* Search Bar */}
      <div className="relative mb-10">
        <input
          onChange={handleSearch}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search for product..."
        />
        <button
          className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>

      {/* Product List */}
      <div className="flex-wrap mb-10 flex gap-x-10 lg:flex-row">
        {filterResult.map((item, index) => (
          <div key={index} className="bg- w-full bg-secondary-item mb-8 sm:w-[300px] rounded-[30px]">
            <div className="border-primary-black/10 border:mt-10 border-b-2 py-5 h-90 lg:py-3">
              <img className="mx-auto h-full w-full" src={item.image} alt={item.title} />
            </div>
            <h1 className="text-primary-black h-10 w-full ml-3 lg:ml-2 lg:pt-3 text-lg lg:text-[20px] font-semibold">
              {getHighlightedText(item.title, searchQuery)}
            </h1>
            <div className="border-b-2 py-3 border-primary-black/10">
              <p className="text-primary-black/60 h-25 ml-2">{item.description}</p>
            </div>
            <div className="flex justify-center items-center py-5 gap-x-10">
              <h4 className="font-extrabold text-3xl">$ {item.price}</h4>
            </div>
            <button className="hover:cursor-pointer flex font-semibold text-blue-800 gap-x-3 mx-auto px-[70px] py-[10px] rounded-2xl bg-blue-100">
              <FaShoppingCart className="text-2xl text-blue-800" /> Order Now
            </button>

            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-3 lg:pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">30 Minutes</p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">30 Snack</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
