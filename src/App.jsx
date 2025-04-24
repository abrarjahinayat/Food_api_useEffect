import axios from 'axios'
import React,{useState, useEffect} from 'react'
import burger from '../src/assets/burger.png'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
const App = () => {
  let [products, setProducts] =useState([])
  useEffect(()=>{
    axios.get("https://api.sampleapis.com/coffee/iced").then((data)=>{
      setProducts(data.data)
    })
  })

  return (
    <div className="container mt-10">
      <div className="flex-wrap  mb-10 flex gap-x-10 lg:flex-row">
        {
          products.map((item)=>{
            return(
              <div>
              <div className="bg- w-full bg-secondary-item  mb-8 sm:w-[300px] rounded-[30px]">
               <div className='border-primary-black/10 border:mt-10 border-b-2 py-5 h-90 lg:py-3'>
                 <img className="mx-auto h-full w-full" src={item.image} alt="" />
     
               </div>
                 <h1 className="text-primary-black h-10 w-full ml-3 lg:ml-2 lg:pt-3 text-lg lg:text-[20px]  font-semibold ">
                 {item.title}
                 </h1>
                 <div className='border-b-2 py-3 border-primary-black/10'>
     
                 <p className='text-primary-black/60 h-25 ml-2 '>
                 {item.description}
                 </p>
                 </div>
                 <div className='flex justify-center items-center py-5 gap-x-10'>
                 <h4 className='font-extrabold text-3xl '>$ {item.price}</h4> 
                 {/* <h4 className='line-through text-lg text-red-600 font-semibold'>$ 55.6</h4>  */}
                 </div>
               
     
                 {/* <div className="flex items-center justify-center mt-">
           <div className="flex items-center space-x-1 rtl:space-x-reverse">
             <svg
               className="w-4 h-4 text-yellow-300"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
             >
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
             <svg
               className="w-4 h-4 text-yellow-300"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
             >
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
             <svg
               className="w-4 h-4 text-yellow-300"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
             >
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
             <svg
               className="w-4 h-4 text-yellow-300"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
             >
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
             <svg
               className="w-4 h-4 text-gray-200 dark:text-gray-600"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 22 20"
             >
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
             </svg>
           </div>
           <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {item.rate};
            {item.count}
           </span>
         </div> */}
         <button className=' hover:cursor-pointer flex font-semibold text-blue-800 gap-x-3 mx-auto px-[70px] py-[10px] rounded-2xl bg-blue-100'>  <FaShoppingCart className='text-2xl text-blue-800 ' /> Order Now</button>

         <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-3 lg:pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
           {/* <div className='py-8 text-center'>
           <a
             href="#"
             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           >
             Add to cart

           </a>
           </div> */}
     
                
               </div>
         </div>
            )
          })
        }
   
      </div>
    </div>
  )
}

export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App



// https://api.sampleapis.com/coffee/iced