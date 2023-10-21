import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import Productnotavailable from "./Productnotavailable";
const Productviews = () => {
    const products = useLoaderData()
    const { brand } = useParams();

    const [advertiselist, setadvertiselist] = useState([])
    const [isproductavailable, setisproductavailable] = useState(true)
    useEffect(() => {
        if (!products.length) {
            setisproductavailable(false)
            // console.log('no')
        }
        fetch(`https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/${brand}`)
            .then(res => res.json())
            .then(data => setadvertiselist(data))
    }, [brand,products.length])
    return (
        <div className="max-w-6xl mx-auto">
            <div >
                <Marquee className="z-0 " pauseOnHover="true">

                    {
                        advertiselist.map(image => <img key={image._id} className="h-[20vh] md:h-[70vh] w-[70vw] lg:w-[100vw] mr-7" src={image.product_photo} alt="" />)
                    }

                </Marquee>
            </div>
            {
                isproductavailable ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10 my-20 mx-5 md:mx-auto">
                    {products.map(product => <Product key={product._id} product={product}></Product>)}
                </div>
                    : <Productnotavailable></Productnotavailable>
            }
        </div>

    );
};

export default Productviews;