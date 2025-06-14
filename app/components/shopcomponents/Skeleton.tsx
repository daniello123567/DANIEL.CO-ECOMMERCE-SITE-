import React from 'react'

function Skeleton() {
  return (
    <div className='flex mb-[1em] items-center gap-[1em]'>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  max-w-[198px] sm:max-w-[295px] pl-0'></div>

    </div>
  )


}
const ShopSkeleton = ()=>{
  return <div className='grid gap-[1em] md:grid-cols-3 lg:grid-cols-4 px-[1em] mb-[1em] grid-cols-2'>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>

    </div>
}
const Shopskele = ()=>{
  return <>
   <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
   <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>
    <div className=' bg-gray-300 h-[14em] min-w-0 flex flex-col shrink-0 grow-0 basis-full  rounded-[14px] animate-pulse  w-full  pl-0'></div>

</>
}
export {ShopSkeleton,Shopskele}
export default Skeleton
