import { RiDeleteBin6Fill } from 'react-icons/ri';
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'; // ES6
const Cart = ({ loadedcart, carts, setcarts }) => {
    const { _id, product_photo, product_type, product_name, BrandName, product_price } = loadedcart
    console.log(typeof (setcarts))
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
            <div className="flex flex-col md:flex-row bg-base-200 mb-8 ">
                <div className='flex-grow flex flex-col md:flex-row gap-10 items-center'>
                    <figure className='rounded-lg h-full w-full md:w-1/3 md:h-[150px]'><img className='h-full md:h-[150px] w-full md:w-[150px] rounded-l-lg' src={product_photo} alt="brand" /></figure>
                    <div className="flex flex-col w-full md:w-2/3 space-y-3 md:py-5 ">
                        <h2 className="text-5xl md:text-2xl text-center md:text-left">{product_name}</h2>
                        <p className="text-3xl md:text-lg text-center md:text-left">{product_type}</p>
                        <div className='flex justify-between'>
                            <p className="text-3xl md:text-lg text-center md:text-left">TK {product_price}</p>
                            <p className=" italic font-bold text-xl text-center md:text-left">{BrandName}</p>
                        </div>

                    </div>
                </div>
                <div className='border-r-2 border-gray-400 my-5 pl-2'></div>
                <div className="p-5">

                    <div className='flex justify-center items-center'>

                        <button onClick={() => cartDelete(_id)}><RiDeleteBin6Fill className='text-7xl md:text-5xl' /></button>
                    </div>

                </div>

            </div>

        </div>
    );
};
Cart.propTypes = {
    loadedcart: PropTypes.object,
    carts: PropTypes.array,
    setcarts: PropTypes.func
};
export default Cart;