import { Link } from "react-router-dom";


const Productnotavailable = () => {
    return (
        <div className="h-[70vh] md:h-[80vh] flex flex-col justify-center items-center space-y-11 mx-5 md:mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <h1 className="text-8xl md:text-9xl text-red-600">OH NO!</h1>
                <p className="text-3xl">But that&rsquo;s okay</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <p className="text-justify">We apologize for any inconvenience, but it seems the product you are looking for is currently out of stock on our website. We understand your interest in this product, but unfortunately, it is temporarily unavailable for purchase at the moment. Rest assured, we are working diligently to restock the product and make it available for you as soon as possible.</p>
                
            </div>
            <Link to={'/'} className="p-5 bg-red-600 text-white">Back to Home</Link>
        </div>
    );
};

export default Productnotavailable;