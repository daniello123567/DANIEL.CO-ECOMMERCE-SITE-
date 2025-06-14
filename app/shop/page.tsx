"use client"
import React,{useEffect} from 'react'
import Shop from '../components/shopcomponents/Shop';
import Font from 'next/font/local';
import { AllProducts ,Products,ProductisPending} from '../utils/utils';
import { useQuery } from '@tanstack/react-query';
import gsap from 'gsap';
import Link from 'next/link';
const SatoshiReg = Font({ src: "../../public/satoshiLIGHT.woff" })
const SatoshiBold = Font({ src: "../../public/satoshiLIGHT.woff" })

function Page() {

const {data,isPending,error} = useQuery({
  queryKey:['products'],
  queryFn:()=>AllProducts()
});

const {setProduct} = Products();
const {setisPending} = ProductisPending()
 useEffect(()=>{
  setisPending(isPending);
  if(!isPending&&data){
    setProduct([...data]);
  }else if(error){
    alert('PLEASE RELOAD AN ERROR OCURRED!')
  }
 },[isPending])
const showFilt = ()=>{
  gsap.to('#filt',{
    y:0,
    duration:0.5,
    ease:"power2.inOut"
  })
}
  return (
    <div className='w-full'>
      <div className='max-w-frame mx-auto pt-[5rem] md:pt-[6rem] px-4 xl:px-0'>
        <hr className='h-[1px] border-t-black/10 mb-5 sm:mb-6' />

             <div className='col-span-3'>
        <div className={`${SatoshiReg.className} lg:px-[1em] mb-5 sm:mb-9 flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5`}>
          <Link href={'/'} className='text-gray-300 hover:text-black'>home</Link>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          <p>Shop</p>
        </div>

        <div className={`${SatoshiBold.className} lg:px-[1em] flex items-center justify-between`}>
          <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
          <button onClick={showFilt} title='filter' type="button"
            className="h-8 w-8 rounded-full bg-[#F0F0F0]
           text-black p-1 md:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r26:" data-state="closed"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-base mx-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></button>
        </div>

        <div className="flex lg:px-[1em] flex-col sm:items-center sm:flex-row">
          {/* <span className={`${SatoshiReg.className} text-sm md:text-base text-black/60 mr-3`}>Showing 1-10 of 100 Products</span> */}



          </div>
</div>


               <Shop/>

      </div>

    </div>
  )
}

export default Page
