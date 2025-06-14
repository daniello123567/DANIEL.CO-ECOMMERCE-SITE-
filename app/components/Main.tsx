import React from 'react'
import Font from 'next/font/local';
import Singleproduct from './Singleproduct';
import ReviewSection from './ReviewSection';
import { ProductisPending, Products } from '../utils/utils';
import Skeleton, { ShopSkeleton } from './shopcomponents/Skeleton';
import Link from 'next/link';

const int = Font({ src: "../../public/integral.woff" })
const satashiMed = Font({ src: "../../public/satoshiMedium.woff" })
function Main() {
  const { products } = Products();
  const { isPending } = ProductisPending()
  return (
    <div  className='min-h-screen  sm:pt-[4.5rem] pt-[3.125rem] w-full'>
      <p className={`${int.className} arrival text-center text-[2rem] md:text-5xl mb-8 md:mb-14 `}>NEW ARRIVALS</p>


<div id='container' className='w-screen  h-fit overflow-x-hidden'>
      <div id='new' className={`flex content ${isPending && 'gap-[1em]'}  mb-6 md:mb-9  mx-4 xl:mx-0 space-x-4 sm:space-x-5 w-fit min-w-[190vw] h-fit`}>

        {!isPending && products.slice(0, 8).map((product) => {
          return <Singleproduct quantity={1} Price={product.Price} Image_url={product.Image_url} Gender={product.Gender} id={product.id} Description={product.Description} key={product.id} Stars={product.Stars} Category={product.Category} Name={product.Name} />
        })}

</div>
      </div>


      {isPending && <Skeleton />}
      <div className={`${satashiMed.className} w-full px-4 sm:px-0 text-center`}>
        <Link href={'/shop'} className='w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10'>View All</Link>

      </div>

      <div className='px-[1em]'>
        <hr className='h-[1px] border-t-black/10 mb-[.5em] mt-10 sm:mt-16' />
        <h2 className={`${int.className} text-[32px] md:text-5xl mb-8 md:mb-14 text-center`}>TOP SELLING</h2>

        <div id='kayz' className='grid  mb-6 md:mb-9  place-items-center md:grid-cols-3 grid-cols-2 gap-x-[1em] lg:grid-cols-4  gap-y-[1em]'>

          {!isPending && products.slice(8, 13).map((product) => {
          return <Singleproduct quantity={1} Price={product.Price} Image_url={product.Image_url} Gender={product.Gender} id={product.id} Description={product.Description} key={product.id} Stars={product.Stars} Category={product.Category} Name={product.Name}  />
          })}

        </div>
        {isPending && <ShopSkeleton />}


        <div className={`${satashiMed.className} w-full px-4 sm:px-0 text-center`}>
          <Link href={'/shop'} className='w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10'>View All</Link>

        </div>
      </div>
      <ReviewSection />
    </div>
  )
}

export default Main
