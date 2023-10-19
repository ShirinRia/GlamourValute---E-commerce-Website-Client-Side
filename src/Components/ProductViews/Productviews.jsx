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
            console.log('no')
        }
        fetch(`http://localhost:5000/advertises/${brand}`)
            .then(res => res.json())
            .then(data => setadvertiselist(data))
    }, [])



    return (
        <div className="max-w-6xl mx-auto">
            <div >
                <Marquee className="z-0">
                    {/* <img className="h-[80vh] w-[1280px] mr-7" src={slide1} alt="" /> */}
                    {
                        advertiselist.map(image => <img key={image._id} className="h-[50vh] w-[1280px] mr-7" src={image.product_photo} alt="" />)
                    }

                </Marquee>
            </div>
            {
                isproductavailable ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 my-40">
                    {products.map(product => <Product key={product._id} product={product}></Product>)}
                </div>
                    : <Productnotavailable></Productnotavailable>
            }




        </div>

    );
};

export default Productviews;