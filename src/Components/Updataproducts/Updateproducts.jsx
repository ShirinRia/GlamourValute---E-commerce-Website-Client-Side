import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Updateproducts = () => {
    const loadedproducts = useLoaderData()
    const  { _id,product_photo, product_description, product_rating, product_type, product_name, BrandName, product_price } =loadedproducts
    const handleupdateproduct = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.pro_name.value;
        const BrandName = form.brandName.value;
        const product_type = form.pro_type.value;
        const product_price = form.price.value;
        const product_rating = form.rating.value;
        const product_description = form.description.value;
        const product_photo = form.photo.value;
        const product_amount = form.amount.value;
        const newProduct = { product_name, BrandName, product_type, product_price, product_rating, product_description, product_photo, product_amount }
        console.log(newProduct);
        
        fetch(`http://localhost:5000/products/${BrandName}/${_id}`,
        {
            method:'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                  })
              
            }
            else{
                Swal.fire({
                    title: 'Success!',
                    text: 'Update FAILED',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
         })

    }

    return (
        <div >
            <div className="min-h-screen bg-base-200 my-10 max-w-6xl mx-auto px-10 py-10">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Update Existing Product!</h1>
                    <p className="py-6">Introducing the newest additions to our cosmetic collection, designed to enhance your natural radiance and empower your inner glow. Beauty awaits!</p>
                </div>
                <div className="text-center ">

                    <div className="card  w-full   bg-base-100">
                        <form className="card-body" onSubmit={handleupdateproduct}>
                            <div className="flex justify-between gap-8">


                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product Name" defaultValue={product_name} name="pro_name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    {/* <input type="text" name="pro_name" placeholder="Product Name" className="input input-bordered" required /> */}
                                    <select className="select select-bordered" name="brandName" defaultValue={BrandName} required>
                                        <option disabled selected>Brand Name</option>
                                        <option value="BIELENDA">BIELENDA</option>
                                        <option value="Chanel">Chanel</option>
                                        <option value="Dior">Dior</option>
                                        <option value="Revlon">Revlon</option>
                                        <option value="Avon">Avon</option>
                                        <option value="Coty">Coty</option>
                                    </select>
                                </div>

                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <input type="text" name="pro_type" defaultValue={product_type} placeholder="Type" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* second row: bdt, rating */}
                            <div className="flex justify-between gap-8">
                                <div className="w-1/3">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <div className="join w-full ">

                                        <div className=" w-full">
                                            <div>
                                                <input className="input input-bordered join-item w-full" name="price" defaultValue={product_price} placeholder="Price" />
                                            </div>
                                        </div>

                                        <div >

                                            <span className="btn join-item w-full">BDT</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Product Rating" defaultValue={product_rating} name="rating" className="input input-bordered" required />

                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="text" placeholder="Product Amount" name="amount" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea name="description" placeholder="Write your Product Description" defaultValue={product_description} className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                            </div>
                            {/* photo */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="url" placeholder="photo" name="photo" defaultValue={product_photo} className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Update Your Product" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Updateproducts;