import PropTypes from 'prop-types'; // ES6
const Info = ({ information }) => {
    const { title, amount } = information
    return (
        <div className="flex flex-col justify-center items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-base-500 px-2 ">
            <img src={amount} alt="" />
            <h2 className="text-3xl md:text-lg font-medium md:font-normal py-5">
                {title}
            </h2>
        </div>
    );
};
Info.propTypes = {
    information: PropTypes.object,
};
export default Info;