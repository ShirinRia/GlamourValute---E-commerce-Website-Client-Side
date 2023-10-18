import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";


const Mycart = () => {
    const loadedcarts=useLoaderData()
    console.log(loadedcarts)
    const [carts,setcarts]=useState(loadedcarts)
    return (
        <div className='max-w-4xl mx-auto'>
            <h3 className='tet-3xl md:text-5xl font-bold text-center mb-11 '>
                <span className='text-[#86198f]'>GlamourVault</span> EXCLUSIVE BRANDS
            </h3>
            <div className='grid grid-cols-1 gap-y-10'>
                {loadedcarts.map(cart => <Cart key={cart._id} loadedcart={cart}></Cart>)}
           
            </div>

        </div>
    );
};

export default Mycart;