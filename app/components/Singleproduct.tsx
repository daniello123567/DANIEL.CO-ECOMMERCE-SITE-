"use client"
import React from 'react'
import Font from 'next/font/local';
import StarRating from './shopcomponents/Stars';
import { Product } from '../utils/utils';
import Link from 'next/link';
const SatoshiReg = Font({ src: "../../public/satoshiLIGHT.woff" })
const SatoshiBold = Font({ src: "../../public/satoshiLIGHT.woff" })

type SingleProduct = Omit<Product,'created_at'>
function Singleproduct({Name,Image_url,id,Price,Stars}:SingleProduct) {

  return (
    <Link id='baba'  href={`/productdetail/${id}`} className={`${SatoshiBold.className}  min-w-0 flex flex-col shrink-0 grow-0 basis-full  w-full max-w-[198px] sm:max-w-[295px] pl-0`}>
      <div  className='bg-[#F0EEED] flex justify-center items-center rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden'>
         <img className='w-[85%] h-[85%] object-cover' alt={`${Name}`} src={`${Image_url}`} />
      </div>
      <div>
        <strong className="text-black xl:text-xl">{Name}</strong></div>
      <div className={`${SatoshiReg.className} w-[133.883px] mb-1 xl:mb-2  h-[26.1333px]`}>
        <StarRating rating={Number(Stars)} maxStars={5} />
      </div>
      <span className="font-bold text-black text-lg xl:text-2xl">${Price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </Link>
  )
}

export default Singleproduct
