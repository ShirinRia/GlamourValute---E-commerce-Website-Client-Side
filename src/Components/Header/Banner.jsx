import banner from '../../assets/bannerimage-.png'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
   useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="hero h-[80vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between h-full w-full ">
                    <div className=' h-full w-1/2 text-right'>
                        <img src={banner} className="rounded-lg h-full w-full" />
                    </div>

                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">The Beauty Hub: Your Personal Glam Journey!</h1>
                        <p className="py-6" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">Your ultimate destination for embarking on a personalized glam journey. Explore top-notch products to enhance your unique beauty and confidence.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;