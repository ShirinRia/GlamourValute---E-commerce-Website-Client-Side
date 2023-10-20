import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const Mycart = () => {
    const loadedcarts = useLoaderData()
    console.log(loadedcarts)
    const [carts, setcarts] = useState(loadedcarts)
    return (
        <div className='max-w-5xl mx-auto my-11'>

            <div >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mx-8 md:mx-auto'>
                    {carts.map(cart => <Cart key={cart._id} loadedcart={cart} carts={carts} setcarts={setcarts}></Cart>)}

                </div>
                
            </div>





        </div>
    );
};

export default Mycart;