import regimage from '../../assets/johanne-pold-jacobsen-XYkc3MfT7b4-unsplash.jpg'
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Authcontext } from '../../Provider/Provider';
const Register = () => {
    const [regerror, setregerror] = useState('')
    const { createuser, signgoogle } = useContext(Authcontext)
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const formreg = new FormData(e.currentTarget);
        const email = formreg.get('email')
        const password = formreg.get('password')
        const name = formreg.get('name')
        let photo = formreg.get('photo')
        if (!photo) {
            photo = "https://i.ibb.co/0jQwXPz/download.jpg"
        }
        setregerror('')

        if (password.length < 6) {
            setregerror("password length less then 6")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setregerror("Password should have a capital letter")
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)) {
            setregerror("Password should have a Special Character")
            return;
        }
        createuser(email, password)
            .then((userCredential) => {

                const currentuser = userCredential.user;
                console.log(currentuser)

                // updateprofile(name,photo)
                updateProfile(currentuser, {
                    displayName: name,

                    photoURL: photo
                })
                    .then(() => {
                        // Profile updated!
                        Swal.fire({
                            title: 'Success!',
                            text: 'Registered with email Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                       

                        navigate("/");

                    })
                    .catch((error) => {

                        setregerror(error.message);
                    });

            })
            .catch((error) => {
                const er = error.message;
                console.log(er)

            });

    }
    return (
        <div className='max-w-6xl mx-auto my-10 h-[80vh]'>
            <div className='text-center'>
                <h2 className="text-2xl font-medium text-center mb-3">
                    New Customer
                </h2>
                <hr></hr>
            </div>

            <div >
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 py-10">
                    <div className="w-1/2">
                        <img src={regimage} alt="regimage" className='w-[550px] h-[400px]' />
                    </div>
                    <div className="card w-1/2 ">

                        <form onSubmit={handleRegister} className="card-body w-full shadow-md bg-base-100 mx-auto">
                            <div className='space-y-3'>
                                <h1 className="text-3xl font-bold">Sign up!</h1>
                                <p>
                                    Already have an account? <Link to={'/login'} className='text-[#86198f] underline'>Sign In</Link>
                                </p>

                            </div>
                            <div className="form-control flex-row" >
                                <label className="label w-1/3">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control flex-row">
                                <label className="label w-1/3">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control flex-row">
                                <label className="label w-1/3">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo" className="input input-bordered w-full" required />

                            </div>
                            <div className="form-control flex-row">
                                <label className="label w-1/3">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;