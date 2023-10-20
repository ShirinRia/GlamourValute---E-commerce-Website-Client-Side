import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, product_photo, product_description, product_rating, product_type, product_name, BrandName, product_price } = product
    return (
        <div>
            <div className="card card-compact md:w-96 bg-base-100 border-b-2 border-red-500">
                <figure><img src={product_photo} alt="Shoes" className="h-[300px] w-full" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{product_name}</h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{product_type}</div>
                        </div>
                    </div>

                    <p className="text-justify">{product_description.slice(0, 50)}</p>
                    <div className="space-y-7 my-3 text-center">
                        <p className="text-center font-medium text-lg">BDT {product_price}</p>
                        <div className="rating gap-1 justify-center">
                            <input type="radio" name={product_name} className="mask mask-heart bg-red-400" checked />
                            <input type="radio" name={product_name} className="mask mask-heart bg-orange-400" />
                            <input type="radio" name={product_name} className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name={product_name} className="mask mask-heart bg-lime-400" />
                            <input type="radio" name={product_name} className="mask mask-heart bg-green-400" />
                        </div>
                    </div>

                    <div className="flex justify-center gap-x-5 px-5">
                        <Link to={`/productdetails/${BrandName}/${_id}`} className="btn bg-[#f9a8d4] w-1/2">Details</Link>
                        <Link to={`/updateproduct/${BrandName}/${_id}`} className="btn bg-[#e879f9] w-1/2">Update</Link>

                        {/* <button className="btn bg-[#e879f9] w-1/2">Update</button> */}
                    </div>
                    <div className="card-actions justify-end">
                        <div className=" italic font-bold text-xl">{BrandName}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
};
export default Product;