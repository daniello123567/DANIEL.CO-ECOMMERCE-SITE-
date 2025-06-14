"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Font from 'next/font/local';
import StarRating from '@/app/components/shopcomponents/Stars';
import { useQuery } from '@tanstack/react-query';
import { AllProducts,  ProductisPending, Product, Cart} from '@/app/utils/utils';
import Singleproduct from '@/app/components/Singleproduct';
import Link from 'next/link';

const int = Font({ src: "../../../public/integral.woff" })
const SatoshiReg = Font({ src: "../../../public/satoshiLIGHT.woff" })


function Page() {
  const [info, setInfo] = useState<Product | undefined>();
  const [YMAL, setYMAL] = useState<Product[]>([]);
  const params = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => AllProducts()
  });

  const { setisPending } = ProductisPending()
  useEffect(() => {
    setisPending(isPending);
    if (!isPending && data) {
      const curr = data.find(product => product.id === Number(params.id)) as Product
      setInfo({ ...curr, quantity: 1, uniPrice: curr.Price });

    } else if (error) {
      alert('PLEASE RELOAD AN ERROR OCURRED!')
    };
  }, [isPending]);
  useEffect(() => {
    if (!data) return;
    const ymal = data?.filter(product => product.Category == info?.Category && product.Name !== info?.Name);
    setYMAL([...ymal]);
  }, [info]);

  const { setCart, cart } = Cart()
  const isInCart = cart.find((prod) => prod.id === Number(info?.id));
  const deletefromcart = () => {
    const newCart = cart.filter(prod => prod.id !== Number(info?.id));
    setCart(newCart)
  }
  const Addtocart = () => {
    if (!isInCart) {
      if (!info) return;
      setCart(
        [...cart,
        {
          id: info.id,
          Name: info?.Name,
          Image: info.Image_url,
          Category: info.Category,
          Price: info.Price,
          Quantity: Number(info?.quantity),
          unitprice: info.uniPrice
        }])
    } else {
      deletefromcart()
    }
  };
  const increaseQty = () => {
    if (!info) return;
    const isInCart = cart.find((prod) => prod.id === Number(info?.id));
    if (!isInCart) { alert('PLEASE ADD TO CART FIRST! THANK YOU!') };
    const newCart = cart.map((prod) => {
      if (prod.id == Number(info?.id)) {
        return { ...prod, Quantity: prod.Quantity + 1 }
      } else return prod;
    });
    setCart(newCart);
  };
  const decreaseQty = () => {
    if (!info) return;
    const newCart = cart.map((prod) => {
      if (prod.id == Number(info?.id) && prod.Quantity !== 1) {
        return { ...prod, Quantity: prod.Quantity - 1 }
      } else return prod;
    });
    setCart(newCart);
  }

  const getQuantity = () => {
    if (isInCart) {
      return isInCart.Quantity
    } else return 1;
  }
  return (
    <div className='min-h-screen overflow-hidden px-[1em] pt-[5rem] md:pt-[6rem] w-full'>
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />


      <div className={`${SatoshiReg.className} lg:px-[1em] mb-5 sm:mb-9 flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5`}>
        <Link href={'/'} className='text-gray-600'>home</Link>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        <Link href={'/shop'}>Shop</Link>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        <div className='font-bold'>{isPending ? <div className='w-[5em] animate-pulse  rounded h-[1em] bg-gray-200'></div> : info?.Name}
        </div>
      </div>
      <div className='grid md:mb-[3em] grid-cols-1 md:grid-cols-2 gap-5'>
        <div className={` IMAGE flex items-center justify-center bg-[#F0EEED] rounded-[13px] sm:rounded-[20px] w-full  md:w-full mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px]  overflow-hidden mb-3 lg:mb-0`}>
          {!isPending ? <img className='w-full h-full object-cover' src={info?.Image_url} alt="" /> : <div className='w-full h-full animate-pulse bg-gray-200'></div>}
        </div>


        <div>
          {isPending ? <div className='w-[10em] rounded h-[2em] bg-gray-200 animate-pulse'></div> : <h2 className={`${int.className} text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 uppercase`}>{info?.Name}</h2>}
          {isPending ? <div className='w-[15em] mt-[.5em] h-[2em] bg-gray-200 animate-pulse'></div> : <div className='flex items-center mb-3 sm:mb-3.5'>
            <StarRating ForProduct={true} rating={Number(info?.Stars)} />
            <p className={`${SatoshiReg.className} text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0`}>{info?.Stars}/5</p>
          </div>}
          <div className='flex items-center space-x-2.5 sm:space-x-3 mb-5'>
            <span className={`${SatoshiReg.className} flex items-center space-x-2.5 sm:space-x-3 mb-5`}>{!isPending && '$' + info?.Price}</span>
          </div>

          <p className={`${SatoshiReg.className} text-sm sm:text-base text-black/60 mb-5`}>{info?.Description}</p>
          <hr className='h-[1px] lg:mt-[15.6em] border-t border-t-black/10 my-5' />

          <div className={`${SatoshiReg.className} fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center`}>
            {isInCart && <div className="bg-[#F0F0F0] w-full min-w-[110px] max-w-[110px] sm:max-w-[170px] py-3 md:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between">
              <button onClick={decreaseQty} title='btn' className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent" type="button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path></svg></button><span className="font-medium text-sm sm:text-base">{getQuantity()}</span>
              <button onClick={increaseQty} title='btn' className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-5 w-5 sm:h-6 sm:w-6 text-xl hover:bg-transparent" type="button"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path></svg></button>
            </div>}
            <button onClick={Addtocart} type="button" className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all">Add{isInCart && 'ed'} to Cart</button></div>

        </div>
      </div>
      <div>
        <h2 className={`${int.className}  text-[32px] md:text-5xl mb-8 md:mb-14 uppercase`}>YOU MIGHT ALSO LIKE</h2>

        <div id='container' className='w-screen  h-fit overflow-x-hidden'>
          <div id='new' className='flex content gap-[1em] h-fit  w-[150vw]'>
            {YMAL.map((product) => {
              return <Singleproduct quantity={1} Price={product.Price} Image_url={product.Image_url} Gender={product.Gender} id={product.id} Description={product.Description} key={product.id} Stars={product.Stars} Category={product.Category} Name={product.Name} />
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
