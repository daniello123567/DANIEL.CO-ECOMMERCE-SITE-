"use client"
import React, {useState,useEffect } from 'react';
import Singleproduct from '../Singleproduct';
import Font from 'next/font/local';
import Sidebar from './Sidebar';
import {  ProductisPending, Products,Filters, Product } from '@/app/utils/utils';
import { Shopskele } from './Skeleton';

const SatoshiBold = Font({ src: "../../../public/satoshiLIGHT.woff" })
const SatoshiMed = Font({ src: "../../../public/satoshiMedium.woff" })






function Shop() {
   const {products} = Products();
   const [filtered,setfiltered] = useState<Product[]>([])
   const {isPending} = ProductisPending();

   const {filter} = Filters();
   useEffect(()=>{
     const searchResults = products.filter((prod)=>{
         const searchTerm = filter.SearchTerm.toLowerCase()||"";
         const matchesSearch = prod.Name.toLowerCase().includes(searchTerm);

         const gender = filter.Gender.toLowerCase()||"";
         const matchesGender = gender ? prod.Gender.toLowerCase() === gender :true;

         const category = filter.Category.toLowerCase()||"";
         const matchesCategory = category ? prod.Category.toLowerCase()=== category : true;

         return matchesCategory&&matchesGender&&matchesSearch
     });

     setfiltered([...searchResults]);
   },[filter]);


  const itemsPerPage = 8;

    const [currentPage,setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length/itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indnexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = (filter.SearchTerm||filter.Gender||filter.Category?filtered:products).slice(indnexOfFirstItem,indexOfLastItem);

    const handlePageChange = (pageNumber:number)=>{
      setCurrentPage(pageNumber)
    }

  return (
     <><div className='grid  mb-6 md:mb-9 relative   place-items-center md:grid-cols-3 grid-cols-2 gap-x-[1em] mt-[1em] lg:grid-cols-5 gap-y-[1em]'>

  <Sidebar/>

{ !isPending?currentItems?.map((product)=>{
          return <Singleproduct quantity={1} Price={product.Price} Image_url={product.Image_url} Gender={product.Gender} id={product.id} Description={product.Description} key={product.id} Stars={product.Stars} Category={product.Category} Name={product.Name}  />
          }):<Shopskele/>
             }

        <hr className="border-t-black/10"/>

<div className={`${SatoshiMed.className} border-t border-t-black/10 pt-[2em] hidden lg:flex col-span-5 max-w-[80%]  ml-auto mb-20 mt-[20px] gap-[1em] justify-between w-full items-center `}>
             <button  disabled={currentPage === 1} onClick={()=>handlePageChange(currentPage - 1)} className={` inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black/10`}>previous</button>
          <div>{[...Array(totalPages)].map((_,index)=>{
            return <button className={`inline-flex ${currentPage === index + 1 ? 'bg-gray-300 text-black font-semibold':'text-black/50'} items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9  font-medium text-sm`} onClick={()=>handlePageChange(index + 1)} key={index}>{index + 1}</button>
          })}</div>

          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black/10' disabled={currentPage == totalPages} onClick={()=>handlePageChange(currentPage + 1)}>Next</button>


          </div>
        </div>
                  {filter.SearchTerm&&filtered.length===0&&<div className={`${SatoshiBold.className} h-[5em] w-full flex justify-center items-center`}>NO RESULTS</div>}

        <hr className="border-t-black/10  lg:hidden"/>
         <div className={`${SatoshiMed.className} lg:hidden mb-20 mt-[20px] gap-[1em] justify-between w-full items-center flex`}>
             <button  disabled={currentPage === 1} onClick={()=>handlePageChange(currentPage - 1)} className={` inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black/10`}>previous</button>
          <div>{[...Array(totalPages)].map((_,index)=>{
            return <button className={`inline-flex ${currentPage === index + 1 ? 'bg-gray-300 text-black font-semibold':'text-black/50'} items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9  font-medium text-sm`} onClick={()=>handlePageChange(index + 1)} key={index}>{index + 1}</button>
          })}</div>

          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 gap-1 px-2.5 xs:pl-2.5 border border-black/10' disabled={currentPage == totalPages} onClick={()=>handlePageChange(currentPage + 1)}>Next</button>


          </div>
          </>

  )
}

export default Shop
