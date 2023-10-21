import { useLoaderData } from "react-router-dom";
import moment from 'moment';
import { useContext } from "react";
import { Authcontext } from '../../Provider/Provider';
import Swal from 'sweetalert2'
const ProductDetails = () => {

    const { theme} = useContext(Authcontext)
    const productdetails = useLoaderData()
    const { user } = useContext(Authcontext)
    // eslint-disable-next-line no-unused-vars
    const { _id, ...cartdetails} = productdetails;
    console.log(productdetails)
    console.log(cartdetails)
    const cartitem = cartdetails
    cartitem['UserUid'] = user.uid;
    // cartitem['_id'] = user.uid;
    // console.log(cartitem)
    const addtoCart = () => {
        fetch('https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/carts',
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
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'item already added to your cart',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    const handlereviewform = e => {
        e.preventDefault();
        const userName = user.displayName;
        const productName = productdetails.product_name;
        const form = e.target;
        const review = form.review.value;
        console.log(userName, review)
        const newReview = { userName, review, productName }
        fetch('https://cosmetics-beauty-backend-2d9gc5snl-shirin-sultanas-projects.vercel.app/reviews',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newReview)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have reviewed this product',
                        icon: 'success',
                        confirmButtonText: 'Congratulation'
                    })
                    form.reset();
                }
            })

    }

    // console.log(productdetails)
    return (
        <div className="max-w-6xl mx-5 md:mx-auto  my-10">
            <div className="min-h-screen ">
                <div className="flex flex-col lg:flex-row justify-between ">
                    <img src={productdetails.product_photo} className="h-[300px] w-[300px] rounded-lg" />
                    <div className="w-full md:w-1/2 space-y-7">
                        <h1 className={`text-7xl ${theme ? "text-white" : ""}`}>{productdetails.product_name}</h1>
                        <hr></hr>
                        <p className={`text-xl ${theme ? "text-white" : ""}`}><span className="text-[#db2777]">Amount: </span>{productdetails.product_amount}</p>
                        <p className={`text-xl ${theme ? "text-white" : ""}`}><span className="text-[#db2777]">Price:</span> TK {productdetails.product_price}</p>
                        <p className={`py-6 text-justify ${theme ? "text-white" : ""}`} >{productdetails.product_description}</p>
                        <button onClick={addtoCart} className="btn  w-full text-white text-xl " style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }}>Add to Cart</button>
                        <div className="border-2 border-[#db2777] rounded-lg p-5">
                            <p className={`text-justify ${theme ? "text-white" : ""}`}>Buy {productdetails.product_name} - {productdetails.product_type} {productdetails.product_amount} from GlamourVault, the best authentic cosmetics store in Bangladesh. Be happy. Be Content. Be Satisfied.<br></br>Inventory Last Updated: {moment().format('MMMM D, YYYY, h:mm a')}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handlereviewform}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className={`label-text text-xl ${theme ? "text-white" : ""}`}>Write Review</span>
                        </label>
                        <textarea name="review" placeholder="Write Product Review" className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Review" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;