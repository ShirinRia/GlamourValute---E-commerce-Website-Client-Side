import { useLoaderData } from "react-router-dom";
import moment from 'moment';
const ProductDetails = () => {
    const productdetails = useLoaderData()
    console.log(productdetails)
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="min-h-screen ">
                <div className="flex flex-col lg:flex-row justify-between ">
                    <img src={productdetails.product_photo} className="h-full rounded-lg" />
                    <div className="w-1/2 space-y-7">
                        <h1 className="text-7xl ">{productdetails.product_name
                        }</h1>
                        <hr></hr>
                        <p className="text-xl"><span className="text-[#db2777]">Amount: </span>{productdetails.product_price} g</p>
                        <p className="text-xl"><span className="text-[#db2777]">Price:</span> TK {productdetails.product_price}</p>
                        <p className="py-6 text-justify">{productdetails.product_description}</p>
                        <button className="btn  w-full text-white text-xl " style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }}>Add to Cart</button>
                        <div className="border-2 border-[#db2777] rounded-lg p-5">
                            <p className="text-justify">Buy {productdetails.product_name} - {productdetails.product_type} 60 g from BBB, the best authentic cosmetics store in Bangladesh. Be happy. Be Content. Be Satisfied.<br></br>Inventory Last Updated: {moment().format('MMMM D, YYYY, h:mm a')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;