import React from 'react'
import Font from 'next/font/local';
import { Filters } from '@/app/utils/utils';
import { useRouter } from 'next/navigation';
const SatoshiReg = Font({ src: "../../../public/satoshiLIGHT.woff" })
const SatoshiMed = Font({ src: "../../../public/satoshiMedium.woff" })

const filters = ["Tshirt", "Hoodie", "Shoe", "Suit", "Sweatshirt", "Fragrance", "Sport and jersey"]
const Genders = ["male", "female", "unisex"];
function Sidebar() {
  const { filter, setFilter } = Filters();

  const router = useRouter();

  const Prices = ["High To Low", "Low To high"];



  const handleFilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.textContent;
    if (!value) return;
    const params = new URLSearchParams(window.location.search);

    const isCategory = filters.includes(value);
    const isGender = Genders.includes(value);
    const isPrices = Prices.includes(value);
    if (isCategory) {
      if (params.get('category')?.includes(value)) {
        params.delete('category');
        setFilter({ ...filter, Category: '' })
      } else {
        params.set('category', value);
        setFilter({ ...filter, Category: value });

      }

    } else if (isGender) {
      if (params.get('Gender')?.toLowerCase() === (value.toLowerCase())) {
        params.delete('Gender');
        setFilter({ ...filter, Gender: '' })
      } else {
        params.set('Gender', value);
        setFilter({ ...filter, Gender: value })
      }
    } else if (isPrices) {
      if (params.get('price')?.includes(value)) {
        params.delete('price');
        setFilter({ ...filter, Prices: '' })
      } else {
        params.set('price', value);
        setFilter({ ...filter, Prices: value })
      }
    }

    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false })

  }
  return (
    <div className='h-full overflow-y-auto  p-[1em] w-full sticky top-[5em]  row-span-2 hidden lg:block'>
      <div className={`${SatoshiReg.className} flex flex-col`}>
        <p className={`${SatoshiMed.className}`}>CATEGORIES</p>
        {filters.map((filterx, index) => {
          return <div onClick={handleFilt} className={`${filter.Category.includes(filterx) && 'bg-gray-300'} flex h-[2.5em] justify-between rounded-sm cursor-pointer items-center px-[.5em] hover:bg-gray-100 `} key={index}><p className='' >{filterx}</p><svg width="10" height="10" viewBox="0 0 14 14"><path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="black" stroke="black" strokeWidth="0.542084"></path></svg></div>
        })}

        <p className={`${SatoshiMed.className} mt-[.5em]`}>GENDER</p>
        {Genders.map((gender, index) => {
          return <p onClick={handleFilt} className={`${filter.Gender.toLowerCase() === (gender.toLowerCase()) && "bg-blue-600 text-white"} h-6 px-2 uppercase rounded-md flex items-center justify-center border mt-[.5em] cursor-pointer border-slate-400 hover:bg-red-600 hover:border-transparent hover:text-white transition-smooth text-sm`} key={index}>{gender}</p>
        })}



      </div>


    </div>

  )
}

const MobileFilter = () => {

  const { filter, setFilter } = Filters();

  const router = useRouter();
  const handleFilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.textContent;
    if (!value) return;
    const params = new URLSearchParams(window.location.search);

    const isCategory = filters.includes(value);
    const isGender = Genders.includes(value);
    if (isCategory) {
      if (params.get('category')?.includes(value)) {
        params.delete('category');
        setFilter({ ...filter, Category: '' })
      } else {
        params.set('category', value);
        setFilter({ ...filter, Category: value });

      }

    } else if (isGender) {
      if (params.get('Gender')?.toLowerCase() === (value.toLowerCase())) {
        params.delete('Gender');
        setFilter({ ...filter, Gender: '' })
      } else {
        params.set('Gender', value);
        setFilter({ ...filter, Gender: value })
      }
    }


    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false })

  }
  return <div id='filt' className='lg:hidden translate-y-[100%] w-full h-[80vh] px-[3em] pt-[.5em] fixed border rounded-t-[1em] border-neutral-200 bottom-0 bg-white'>
    <div className={` w-full mb-[3em] flex justify-center  items-center`}>
      <div className='w-[20%] rounded-full h-[.6em] bg-gray-300'></div>
    </div>
    <p className={`${SatoshiMed.className} mt-[.5em]`}>CATEGORY</p>

    {filters.map((filterx, index) => {
      return <div onClick={handleFilt} className={`${filter.Category.includes(filterx) && 'hover:bg-gray-400 bg-red-600 text-white'} pb-[.5em] ${SatoshiReg.className} flex h-[2.5em] border-b border-neutral-100 justify-between mb-[.5em] cursor-pointer items-center px-[.5em] hover:bg-gray-100 `} key={index}><p className='' >{filterx}</p><svg width="10" height="10" viewBox="0 0 14 14"><path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="black" stroke="black" strokeWidth="0.542084"></path></svg></div>
    })}

    <p className={`${SatoshiMed.className} mt-[.5em]`}>GENDER</p>
    <div className='flex w-full items-center justify-start gap-[1em]'>{Genders.map((gender, index) => {
      return <p onClick={handleFilt} className={`${filter.Gender.toLowerCase() === (gender.toLowerCase()) && "bg-red-600 text-white"} ${SatoshiReg.className} h-6 px-2 uppercase rounded-md flex items-center justify-center border mt-[.5em] cursor-pointer border-slate-400 hover:bg-red-600 hover:border-transparent hover:text-white transition-smooth text-sm`} key={index}>{gender}</p>
    })}</div>
  </div>
}
export { MobileFilter }
export default Sidebar
