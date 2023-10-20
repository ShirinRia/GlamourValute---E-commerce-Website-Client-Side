import Swal from 'sweetalert2'

const Advertise = () => {
    const handleadvertise = e => {
        e.preventDefault();
        const form = e.target;

        const BrandName = form.brandName.value;

        const product_photo = form.photo.value;

        const newadvertise = { BrandName, product_photo }
        console.log(newadvertise);
        fetch('http://localhost:5000/advertises',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newadvertise)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Advertise Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset()
                }
            })

    }
    return (
        <div className='max-w-6xl mx-auto h-[60vh] my-auto'>
            <div className="card  w-full  bg-base-100">
                <form className="card-body" onSubmit={handleadvertise}>
                    <div className="flex justify-between gap-8">
                        <div className="form-control w-full md:w-1/3">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>

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


                    </div>

                    {/* photo */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Photo</span>
                        </label>
                        <input type="url" placeholder="photo" name="photo" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Create Advertise" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Advertise;