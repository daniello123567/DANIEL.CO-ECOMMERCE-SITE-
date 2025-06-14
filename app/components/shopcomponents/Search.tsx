"use client"
import { Cartk, Product, Products, searchVisible } from '@/app/utils/utils'
import React, { useEffect, useState } from 'react'
import Font from 'next/font/local';
import Link from 'next/link';

const SatoshiReg = Font({ src: "../../../public/satoshiLIGHT.woff" });
const int = Font({ src: "../../../public/integral.woff" })


const SingleRes = ({ Name, Image, Category, Price, id }: Cartk)=>{
  return  <Link href={`/productdetail/${id}`} className={`${SatoshiReg.className} cursor-pointer  border-b py-[1em] px-[0.25em] flex justify-between w-full h-[6.0625em] border-[#D4D4D4]`}>
    <div className="w-[14.034375em] flex justify-between flex-row items-start h-full">
      <div className="w-[3.875em] relative bg-gray-100 rounded-md h-[3.875em]">

        <img className='w-full rounded-md h-full object-cover' src={Image} alt={Name} />
      </div>
      <div className="w-[9.534375em] flex flex-col text-left">
        <p className="leading-tight">{Name}</p>
        <p className="text-sm text-neutral-500">{Category}</p></div></div>
    <div className="w-[7.125em] flex flex-col justify-between  text-sm h-full">
      <p>${Price} USD</p>
      </div></Link>
}


function Search() {
  const {setShowSearch} = searchVisible();
  const {products} = Products();
  const [results,setResults] = useState<Product[]>([]);
  const [searchTerm,setSearchTerm] = useState<string>('');
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setSearchTerm(e.currentTarget.value)
  }
useEffect(()=>{
    if(searchTerm){
    const res = products.filter(prod=>prod.Name.toLowerCase().includes(searchTerm.toLowerCase()));
    setResults(res);
    }else setResults([])
},[searchTerm])
  return (
    <div id='search' className={`${SatoshiReg.className}  opacity-0 fixed top-0 left-0 bottom-0 right-0 z-50 w-full h-screen`} >
 <div className='flex   md:justify-end justify-center md:pr-[1em] items-center'>

      <div className="h-[95%]   overflow-y-auto rounded-[.8em]  z-50 top-[2%] fixed  flex flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80  dark:text-white w-[95%] ">
        <div className="flex mb-[1em] justify-between items-center">
          <p className="text-[.9rem] font-semibold "></p>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <svg onClick={setShowSearch} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 transition-all ease-in-out hover:scale-110">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
 <input onChange={handleSearch} placeholder='search' className='w-full h-[2em] outline-0 flex items-center border-b border-gray-200 ' type="text" />
      <p className={`${int.className} mt-[1em]`}>RESULTS WILL SHOW HERE</p>
      {results.length!==0?results.map((prod)=>{
            return <SingleRes Quantity={0} key={prod.id} id={prod.id} Price={prod.Price} Image={prod.Image_url} Category={prod.Category} Name={prod.Name} />

        }):''}
     {searchTerm.length!==0&&results.length==0&&<div className={`${SatoshiReg.className} w-full h-full flex justify-center items-center font-[700]`}>NO RESULT</div>}
      </div>
    </div></div>  )
}

export default Search
