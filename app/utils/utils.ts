import supabase from "./supabase"
import {create} from 'zustand'
import { persist,createJSONStorage } from "zustand/middleware";
const AllProducts = async()=>{
  const {data,error} = await supabase.from('ecommerce_products').select('*')
if(error)throw error;
  return data;
};

type Product = {
  uniPrice?:number;
  Category:string,
  Description:string,
  Gender:string,
  Image_url:string,
  Name: string,
  Price: number,
  Stars: string,
  created_at: string,
  id: number,
  quantity:number;
}
type Bros = {
  products:Product[],
  setProduct:(product:Product[])=>void
}
type Pending = {
  isPending:boolean,
  setisPending:(value:boolean)=>void;
}
type Cartk = {
 Name:string,
 Category:string,
 Image:string,
 Price:string|number,
 Quantity:number,
 id:number,
 unitprice?:number
}
type Cartz = {
  cart:Array<Cartk>,
  setCart:(cart:Cartk[])=>void;
}
const Products = create<Bros>((set)=>({
   products:[],
   setProduct:(product)=>set(()=>({products:[...product]}))
}));

const Cart = create<Cartz>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (cartInfo) => set(() => ({ cart: [...cartInfo] })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)


const ProductisPending = create<Pending>((set)=>({
  isPending:false,
  setisPending:(value)=>set(()=>({isPending:value}))
}));

type vv = {
  showCart:boolean;
  setShowCart:()=>void
}
const cartVisible = create<vv>((set)=>({
  showCart:false,
  setShowCart:()=>set((state)=>({showCart:!state.showCart}))
}));

type vf = {
  showSearch:boolean;
  setShowSearch:()=>void
}
const searchVisible = create<vf>((set)=>({
  showSearch:false,
  setShowSearch:()=>set((state)=>({showSearch:!state.showSearch}))
}));
type fil = {filter:{SearchTerm:string,Gender:string,Category:string,Prices:string,Filter:string},setFilter:(filts:{Filter:string,SearchTerm:string,Gender:string,Category:string,Prices:string})=>void};
const Filters = create<fil>((set)=>({
  filter:{Filter:"",SearchTerm:'',Gender:'',Category:'',Prices:''},
  setFilter:(filts)=>set(()=>({filter:filts}))
}))

export {AllProducts,searchVisible,cartVisible,Cart,type Cartk,Products,type Product,ProductisPending,Filters}
