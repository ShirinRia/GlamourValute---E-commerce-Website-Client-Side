import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleaddproduct = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.pro_name.value;
        const BrandName = form.brandName.value;
        const product_type = form.pro_type.value;
        const product_price = form.price.value;
        const product_rating = form.rating.value;
        const product_description = form.description.value;
        const product_photo = form.photo.value;
        const newProduct = { product_name, BrandName, product_type, product_price, product_rating, product_description, product_photo }
        console.log(newProduct);
        fetch('http://localhost:5000/products',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div>

            <div className="min-h-screen bg-base-200 my-10 max-w-6xl mx-auto px-10 py-10">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Add New Product!</h1>
                    <p className="py-6">Unlock the beauty of tomorrow by adding a touch of fabulousness today. Introducing our latest cosmetic masterpiece to elevate your glam game!</p>
                </div>
                <div className="text-center ">

                    <div className="card  w-full   bg-base-100">
                        <form className="card-body" onSubmit={handleaddproduct}>
                            <div className="flex justify-between">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product Name" name="pro_name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    {/* <input type="text" name="pro_name" placeholder="Product Name" className="input input-bordered" required /> */}
                                    <select className="select select-bordered" name="brandName" defaultValue="Brand Name" required>
                                        <option disabled selected>Brand Name</option>
                                        <option value="BIELENDA">BIELENDA</option>
                                        <option value="Chanel">Chanel</option>
                                        <option value="Dior">Dior</option>
                                        <option value="Revlon">Revlon</option>
                                        <option value="Avon">Avon</option>
                                        <option value="Coty">Coty</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <input type="text" name="pro_type" placeholder="Type" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* second row: bdt, rating */}
                            <div className="flex justify-between gap-8">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <div className="join w-full ">

                                        <div className=" w-full">
                                            <div>
                                                <input className="input input-bordered join-item w-full" name="price" placeholder="Price" />
                                            </div>
                                        </div>

                                        <div >

                                            <span className="btn join-item w-full">BDT</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Product Rating" name="rating" className="input input-bordered" required />

                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea name="description" placeholder="Write your Product Description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                            </div>
                            {/* photo */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="url" placeholder="photo" name="photo" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Add Your Product" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;