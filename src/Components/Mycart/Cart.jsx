import { RiDeleteBin6Fill } from 'react-icons/ri';
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'; // ES6
const Cart = ({ loadedcart, carts, setcarts }) => {
    const { _id, product_photo, product_rating, product_type, product_name, BrandName, product_price } = loadedcart
    const cartDelete = (id_) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id_}`,
                    {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const filtered = carts.filter(cart => cart._id !== id_)
                            setcarts(filtered)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="md:flex bg-base-200 mb-8 ">
                <div>
                    <figure className='rounded-lg h-[150px]'><img className=' h-[150px] w-[150px] rounded-l-lg' src={product_photo} alt="brand" /></figure>
                </div>

                <div className=" w-1/2 p-5">
                    <div className="flex justify-between">
                        <h2 className="text-3xl">{product_name}</h2>
                        <p>TK {product_price}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>{product_type}</p>
                        <button onClick={() => cartDelete(_id)}><RiDeleteBin6Fill /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};
Cart.propTypes = {
    loadedcart: PropTypes.object,
};
export default Cart;