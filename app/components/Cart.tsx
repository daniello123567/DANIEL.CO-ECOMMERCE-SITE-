import React from 'react'
import { Inter} from 'next/font/google';
import { Cart, Cartk, cartVisible } from '../utils/utils';
import Font from 'next/font/local';

const SatoshiReg = Font({ src: "../../public/satoshiLIGHT.woff" })
const inter = Inter({ subsets: ["latin"] })
const SingleCart = ({ Name, Image, Category, Price, Quantity, id }: Cartk) => {
  const { cart, setCart } = Cart()



  const increaseQty = () => {
    const newCart = cart.map((prod) => {
      if (prod.id == Number(id)) {
        return { ...prod, Quantity: prod.Quantity + 1,Price:Number(prod.unitprice) * (prod.Quantity + 1) }
      } else return prod;
    });
    setCart(newCart);
  };
  const decreaseQty = () => {

    const newCart = cart.map((prod) => {
      if (prod.id == Number(id) && prod.Quantity !== 1) {
        return { ...prod, Quantity: prod.Quantity - 1,Price:Number(prod.unitprice) * (prod.Quantity - 1)}
      } else return prod;
    });
    setCart(newCart);
  };
  const deletefromcart = () => {
    const newCart = cart.filter(prod => prod.id !== Number(id));
    setCart(newCart)
  }

  return <div className={`${inter.className}  border-b py-[1em] px-[0.25em] flex justify-between w-full h-[6.0625em] border-[#D4D4D4]`}>
    <div className="w-[14.034375em] flex justify-between flex-row items-start h-full">
      <div className="w-[3.875em] relative bg-gray-100 rounded-md h-[3.875em]">
        <div className="absolute cursor-pointer flex justify-center items-center bg-neutral-500 top-[-.5em] left-[-.4em] w-[1.5em] h-[1.5em] rounded-full ">
          <svg onClick={deletefromcart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            aria-hidden="true" data-slot="icon" className="mx-[1px] h-4 w-4 text-white dark:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>

        </div>
        <img className='w-full rounded-md h-full object-cover' src={Image} alt={Name} />
      </div>
      <div className="w-[9.534375em] flex flex-col text-left">
        <p className="leading-tight">{Name}</p>
        <p className="text-sm text-neutral-500">{Category}</p></div></div>
    <div className="w-[7.125em] flex flex-col justify-between  text-sm h-full">
      <p>${Price} USD</p>
      <div className="w-[6.125em] px-[0.7em] flex justify-between items-center border-neutral-200 border rounded-full  h-[2.25em]">
        <button onClick={decreaseQty} className="h-[1em] flex justify-center items-center  w-[1em]">-</button>
        <span className="h-[1em] flex justify-center items-center  w-[1em]">{Quantity}</span>
        <button onClick={increaseQty} className="h-[1em] flex justify-center items-center  w-[1em]">+</button>
      </div></div></div>
}
const Nocart = () => {
  return <div className="h-full  flex flex-col justify-center items-center w-full">

    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"
      className="h-[5em] transition-all ease-in-out hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0
                                   .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0
                          .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
    </svg>
    <p className={`${SatoshiReg.className} text-sm mt-[.8em] font-bold`}>Cart Is Empty!</p>
  </div>
}
function Cartcomponent() {
  const { cart } = Cart();
  const { setShowCart } = cartVisible();
  const totalAmt = ()=>{
    let sum = 0;
    cart.forEach((prod)=>{
      sum+=Number(prod.Price)
    })
return sum;
  }

  return (
    <div className='flex  fixed z-50 w-full h-screen md:justify-end justify-center md:pr-[1em] items-center'>

      <div className="h-[95%]   overflow-y-auto rounded-[.8em]  z-50 top-[2%] fixed  flex flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80  dark:text-white w-[95%] ">
        <div className="flex mb-[1em] justify-between items-center">
          <p className="text-[.9rem] font-semibold "></p>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <svg onClick={setShowCart} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 transition-all ease-in-out hover:scale-110">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>

        <div className="w-full h-full relative">
          {cart.length !== 0 ? cart.map((prod) => {
            return <SingleCart key={prod.id} id={prod.id} Price={prod.Price} Image={prod.Image} Category={prod.Category} Quantity={prod.Quantity} Name={prod.Name} />
          }) : <Nocart />}


          {cart.length!==0&&<div className={`${SatoshiReg.className} absolute bottom-0 w-full`}>
            <div className="mb-3 flex items-center justify-between border-b
             border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
              <p>Total</p>
              <p className="text-right text-base text-black dark:text-white">${totalAmt()}
                <span className="ml-1 inline">USD</span></p></div>
            <button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100" type="submit">Proceed to Checkout</button>
            </div>}
        </div>


      </div>
    </div>
  )
}

export default Cartcomponent
