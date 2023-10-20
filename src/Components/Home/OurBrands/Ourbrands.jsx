import PropTypes from 'prop-types'; // ES6
import Brand from './Brand';
import { useContext } from 'react';
import { Authcontext } from '../../../Provider/Provider';

const Ourbrands = ({ loadedbrands }) => {
    const { theme} = useContext(Authcontext)
    return (
        <div className='max-w-6xl md:mx-auto mx-5'>
            <div className="border-t-2 border-b-2 border-base-500 mb-8 py-8">
                <h3 className={`text-3xl md:text-5xl font-bold text-center ${theme ? "text-white" : ""}`} >
                    <span className='text-[#86198f]'>GlamourVault</span> EXCLUSIVE BRANDS
                </h3>
            </div>

            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16'>
                {loadedbrands.map(brand => <Brand key={brand.id} loadedbrand={brand}></Brand>)}
            </div>

        </div>
    );
};
Ourbrands.propTypes = {
    loadedbrands: PropTypes.array,
};
export default Ourbrands;