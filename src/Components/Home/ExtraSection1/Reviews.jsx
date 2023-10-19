import PropTypes from 'prop-types'; // ES6

const Reviews = ({ reviewdata }) => {
    const { userName, review } = reviewdata
    return (
        <div className="rounded-lg mr-6">
            <div className="card w-96 h-72 bg-base-200 ">
                <div className="card-body">
                    <h2 className="card-title">{userName}</h2>
                    <p className="text-justify">{review}</p>

                </div>
            </div>

        </div>
    );
};
Reviews.propTypes = {
    reviewdata: PropTypes.object,
};
export default Reviews;