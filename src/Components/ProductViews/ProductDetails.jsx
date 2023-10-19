import { useLoaderData } from "react-router-dom";
import moment from 'moment';
import { useContext } from "react";
import { Authcontext } from '../../Provider/Provider';
import Swal from 'sweetalert2'
const ProductDetails = () => {

    const productdetails = useLoaderData()
    const { user } = useContext(Authcontext)
    const cartitem =productdetails
    cartitem['UserUid'] = user.uid;
    console.log(cartitem)
    const addtoCart = () => {
        fetch('http://localhost:5000/carts',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartitem)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New item have been added to your cart',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'item already added to your cart',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    // console.log(productdetails)
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="min-h-screen ">
                <div className="flex flex-col lg:flex-row justify-between ">
                    <img src={productdetails.product_photo} className="h-full rounded-lg" />
                    <div className="w-1/2 space-y-7">
                        <h1 className="text-7xl ">{productdetails.product_name}</h1>
                        <hr></hr>
                        <p className="text-xl"><span className="text-[#db2777]">Amount: </span>{productdetails.product_amount}</p>
                        <p className="text-xl"><span className="text-[#db2777]">Price:</span> TK {productdetails.product_price}</p>
                        <p className="py-6 text-justify">{productdetails.product_description}</p>
                        <button onClick={addtoCart} className="btn  w-full text-white text-xl " style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }}>Add to Cart</button>
                        <div className="border-2 border-[#db2777] rounded-lg p-5">
                            <p className="text-justify">Buy {productdetails.product_name} - {productdetails.product_type} {productdetails.product_amount} from GlamourVault, the best authentic cosmetics store in Bangladesh. Be happy. Be Content. Be Satisfied.<br></br>Inventory Last Updated: {moment().format('MMMM D, YYYY, h:mm a')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;