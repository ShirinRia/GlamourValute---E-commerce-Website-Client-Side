import Marquee from "react-fast-marquee";
import Reviews from "./Reviews";
import { useEffect, useState } from "react";
const ExtraSection1 = () => {

    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <div>
            <div className="max-w-6xl mx-auto border-t-2 border-b-2 border-base-500 mb-8 py-8">

                <h3 className='text-3xl md:text-5xl font-bold text-center  '>
                    Customer Reviews
                </h3>
            </div>
            <div className="max-w-6xl mx-auto">
                <Marquee pauseOnHover="true">
                    {
                        reviews.map((review) =>

                            <Reviews key={review.id}
                                reviewdata={review}>

                            </Reviews>
                        )
                    }
                </Marquee>
            </div>

        </div>
    );
};

export default ExtraSection1;