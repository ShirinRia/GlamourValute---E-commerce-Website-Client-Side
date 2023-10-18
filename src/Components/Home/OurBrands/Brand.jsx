import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const Brand = ({ loadedbrand }) => {
    const { brand, image } = loadedbrand;
    return (
        <div>
            <Link>
                <div className="card md:card-side bg-base-100 mb-8 shadow-md">
                    <div className='w-1/2  '>
                        <figure className='w-full rounded-lg '><img className='h-[150px] rounded-l-lg' src={image} alt="brand" /></figure>
                    </div>

                    <div className="card-body w-1/2">
                        <h2 className="card-title text-3xl my-auto">{brand}</h2>
                        {/* <p>{desc}</p> */}

                    </div>
                </div>
            </Link>

        </div>
    );
};
Brand.propTypes = {
    loadedbrand: PropTypes.object,
};
export default Brand;