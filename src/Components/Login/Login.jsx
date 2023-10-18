import { Link } from 'react-router-dom';
import loginimage from '../../assets/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg'

const Login = () => {
    return (
        <div className='max-w-6xl mx-auto my-10 h-[80vh]'>
            <div className='text-center'>
                <h2 className="text-2xl font-medium text-center mb-3">
                    Customer Login
                </h2>
                <hr></hr>
            </div>

            <div >
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 py-10">
                    <div className="w-1/2">
                        <img src={loginimage} alt="loginimage" />
                    </div>
                    <div className="card w-1/2 ">

                        <form className="card-body w-2/3 shadow-md bg-base-100 mx-auto">
                            <div className='space-y-3'>
                                <h1 className="text-3xl font-bold">Login now!</h1>
                                <p>
                                    Does not have an account? <Link to={'/register'} className='text-[#86198f] underline'>Sign Up</Link>
                                </p>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn text-white text-xl" style={{ backgroundImage: 'linear-gradient(to right, #f9a8d4, #e879f9)' }} type="submit" value="Sign in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;