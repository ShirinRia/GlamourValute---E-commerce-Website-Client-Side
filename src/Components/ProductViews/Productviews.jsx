import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Productviews = () => {
    const loadedproducts = useLoaderData()
    const [products, setproducts] = useState(loadedproducts)
    console.log(products)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 max-w-6xl mx-auto my-40">
            {products.map(product => <Product key={product._id} product={product}></Product>)}
        </div>
    );
};

export default Productviews;