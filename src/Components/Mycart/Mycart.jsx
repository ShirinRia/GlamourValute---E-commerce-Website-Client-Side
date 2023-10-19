import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";
import Rightsidebar from './Rightsidebar';

const Mycart = () => {
    const loadedcarts = useLoaderData()
    console.log(loadedcarts)
    const [carts, setcarts] = useState(loadedcarts)
    return (
        <div className='max-w-5xl mx-auto'>

            <h3 className='tet-3xl md:text-5xl font-bold text-center mb-11 '>
                <span className='text-[#86198f]'>GlamourVault</span> EXCLUSIVE BRANDS
            </h3>
            <div className="flex justify-between">
                <div className='w-1/2'>
                    <div >
                        {carts.map(cart => <Cart key={cart._id} loadedcart={cart} carts={carts} setcarts={setcarts}></Cart>)}

                    </div>
                </div>
                <div>
                    <Rightsidebar></Rightsidebar>
                </div>
            </div>



        </div>
    );
};

export default Mycart;