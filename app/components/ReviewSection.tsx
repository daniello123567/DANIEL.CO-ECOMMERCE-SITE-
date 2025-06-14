"use client"
import { useRef,useState,useEffect } from 'react';
import React from 'react'
import Font from 'next/font/local';
import gsap from 'gsap';
const int = Font({ src: "../../public/integral.woff" })
const SatoshiReg = Font({ src: "../../public/satoshiLIGHT.woff" })
const SatoshiBold = Font({ src: "../../public/satoshiLIGHT.woff" })



const Review = ({ user, review }: { user: string, review: string }) => {
  return <div role="group" aria-roledescription="slide" className="min-w-0 w-[336px] shrink-0 grow-0 basis-full  max-w-[358px] sm:max-w-[400px] pl-5">
    <div className="relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden h-full">
      <div className="absolute bg-white/10 right-0 top-0 h-full w-full z-10"></div>
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <span className="style-module_starRatingWrap__q-lJC" >
          <span className="style-module_simpleStarRating__nWUxf react-simple-star-rating" aria-hidden="true">
            <span className="style-module_emptyIcons__Bg-FZ empty-icons" >
              <svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0"
                viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                </path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0"
                  viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                </path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0"
                  viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                </path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0"
                  viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                </path></svg></span><span className="style-module_fillIcons__6---A filled-icons"
                  title="5 out of 5"><svg className="inline-block" stroke="currentColor" fill="currentColor"
                    strokeWidth="0" viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                ></path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor"
                  strokeWidth="0" viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12
                                2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              <svg className="inline-block" stroke="currentColor"
                fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                width="23" height="23" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="23" height="23" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span></span></span></div><div className="flex items-center mb-2 sm:mb-3"><strong className={`${SatoshiBold.className} text-black sm:text-xl mr-1`}>{user}</strong><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#01AB31] text-xl sm:text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path></svg></div><p className={`${SatoshiReg.className} text-sm sm:text-base text-black/60`}>
        {review}                  </p></div></div>
}


function ReviewSection() {
  const reviews:{user:string,msg:string}[] = [{
  user:"Ebunoluwa",
  msg:"As a UI/UX lover, I’m all about clean design and usability. This t-shirt nails both with its sleek look and comfy fit. You can tell the designer put serious thought into crafting something that’s both stylish and effortlessly wearable."
},

{user:"Samuel",
  msg:"Simplicity meets function in this t-shirt, which is a UI/UX enthusiast’s dream. The fabric feels amazing, and the design pops with creative flair. It’s clear the designer focused on making something practical yet visually striking."
},
{user:"Eniola",
  msg:"For a UI/UX fan like me, this t-shirt is a perfect blend of minimalism and utility. It’s super comfortable and showcases a bold, creative design. The designer’s attention to detail makes it a standout piece I love wearing."
},
{user:"Jack",
  msg:"As someone who admires UI/UX principles, I appreciate this t-shirt’s straightforward style and cozy feel. The designer’s creativity shines through in its unique look, making it both functional and a total vibe."
},
{user:"Tope Alabi",
  msg:"This t-shirt is a UI/UX enthusiast’s gem—simple, functional, and incredibly comfortable. The designer’s innovative touch makes it visually distinct, proving that great design can elevate even a classic wardrobe staple."
},
{user:"Daniel",
msg:"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
}

]
  const man = [...reviews];
 const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = man.length;
 
  useEffect(() => {
    if (containerRef.current) {

      gsap.to(containerRef.current, {
        x: -currentIndex * 336,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };
  return (
    <div className='lg:px-[1em]'>
      <div className='relative mt-[3em] lg:mt-[5em] md:mt-[4em] flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0'>
        <h2 className={`${int.className} __classNameName_931021 text-[32px] leading-[36px] md:text-5xl uppercase mr-auto`}>
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center space-x-1 ml-2">
          <button onClick={handlePrev} className="inline-flex items-center justify-center whitespace-nowrap
          rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1
           focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent
            hover:text-accent-foreground h-9 w-9 text-2xl">
              <svg stroke="currentColor" fill="currentColor"
             strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2
              288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3
               0l-160 160z"></path></svg><span className="sr-only">Previous slide</span></button>

               <button onClick={handleNext} className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-2xl"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
          <span className="sr-only">Next slide</span></button></div>
      </div>
      <div ref={containerRef} id='review' className={`w-fit overflow-x-visible flex items-center`}>
        {man.map((se,index)=>{
          return <Review key={index} user={se.user}
          review={se.msg}/>

        }) }
      </div>

    </div>
  )
}

export default ReviewSection
