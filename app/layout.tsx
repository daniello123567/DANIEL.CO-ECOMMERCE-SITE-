"use client"
import React, { useEffect } from 'react'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import Cart from './components/Cart'
import { cartVisible,Products,searchVisible } from './utils/utils'
import Search from './components/shopcomponents/Search'
import gsap from 'gsap'
import { MobileFilter } from './components/shopcomponents/Sidebar'
import { Draggable, InertiaPlugin, ScrollTrigger, SplitText } from 'gsap/all'
import { usePathname } from 'next/navigation'
function RootLayout({children}:{children:React.ReactNode}) {
  const {showCart} = cartVisible();
  const {products} = Products()
  const query = new QueryClient();
   const {showSearch} = searchVisible();
  useEffect(()=>{
    gsap.set('#search',{y:'-100%'});
     if(showSearch){
    gsap.to('#search',{
  y:'0%',
  duration:0.5,
  ease:'power3.inOut',
  opacity:1,
 })
     }else {
      gsap.fromTo('#search',{
        y:'0%',
        opacity:1,
      },{y:'100%',duration:0.5,opacity:0,
         ease:'power3.inOut'})
     }
  },[showSearch])
  useEffect(()=>{

    const ctx = gsap.context(()=>{
        gsap.registerPlugin(Draggable,SplitText,ScrollTrigger,InertiaPlugin);
      Draggable.create('#filt',{
        type:"y",
        bounds:{minY:0, maxY: window.innerHeight},
        onDrag:function (){
          if(this.y > 200){
            gsap.fromTo('#filt',{y:this.y},{
              y:window.innerHeight,
              duration:0.5,
              ease:"power2.inOut",
            onComplete:function(){
              gsap.set('#filt',{
                y:900
              })
            }
            })
          }else{
            gsap.to('#filt',{
              y:0,
              duration:0.3,
              ease:"power2.inOut"
            })
          }
        }
      });

  gsap.to('#stars',{
     rotate:360,
     duration:2,
     ease:"none",
     repeat:-1
  })

const counters = document.querySelectorAll('#counter');
counters.forEach((counter)=>{
  gsap.from(counter,{
  textContent:0,
  duration:4,
  ease:"power1.in",
  stagger:1,
  snap:{textContent:1},
})
})
const rows = document.getElementById('rows');
if(!rows)return;
rows.innerHTML += rows?.innerHTML;
const width = rows.scrollWidth/2;
gsap.to(rows,{
  x:`-=${width}`,
  duration:60,
  ease:"none",
  repeat:-1
});

const line = new SplitText('#findu',{type:'lines'});
gsap.from(line.lines,{
  opacity:0,
  y:30,
  duration:0.5,
  ease:'none',
  stagger:0.3,
});
const chars = new SplitText('.arrival',{type:'chars'});
gsap.set(chars.chars,{opacity:0.6});
gsap.to(chars.chars,{
  opacity:1,
  stagger:0.3,
  scrollTrigger:{trigger:'.arrival',
  start:"top 80%",
  end:'top 60%',
  scrub:true}
});

;})

return ()=>ctx.kill()
},[usePathname()]);
useEffect(()=>{

  const container = document.querySelector('#container')
const content = document.querySelectorAll('.content')
content.forEach((conts)=>{
Draggable.create(conts,{
  type:'x',
  bounds:container,
  inertia:true,
  edgeResistance:0.65,

})
})
  const guys = document.querySelector('#kayz')
  const peeps = guys?.querySelectorAll('#baba')
  peeps?.forEach((peep)=>{
  gsap.set(peep,{scale:0.5});
  gsap.to(peep,{
    scale:1,
    ease:"none",
    scrollTrigger:{
      trigger:peep,
      start:"top 90%",
      end:"top 70%",
      scrub:true,
    }
  })
})
},[products,usePathname()])

  return (
<QueryClientProvider client={query}>
    <html>
      <title>Daniel.co</title>
      <link rel="shortcut icon" href="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg" type="image/x-icon" />
      <body className="overflow-hidden" id='body'>
        <Header/>
             {children}
              {showCart&&<Cart/>}

       <Footer/>
            <Search/>
            <MobileFilter/>

      </body>
    </html>
    </QueryClientProvider>
  )
}

export default RootLayout
