import PropTypes from 'prop-types'; // ES6
import Brand from './Brand';

const Ourbrands = ({ loadedbrands }) => {

    return (
        <div className='max-w-4xl mx-auto'>
            <h3 className='tet-3xl md:text-5xl font-bold text-center mb-11 '>
                <span className='text-[#86198f]'>GlamourVault</span> EXCLUSIVE BRANDS
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
                {loadedbrands.map(brand => <Brand key={brand.id} loadedbrand={brand}></Brand>)}
            </div>

        </div>
    );
};
Ourbrands.propTypes = {
    loadedbrands: PropTypes.array,
};
export default Ourbrands;