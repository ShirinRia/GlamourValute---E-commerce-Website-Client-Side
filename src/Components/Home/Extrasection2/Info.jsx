import { FaBeer } from 'react-icons/fa';

const Info = ({information}) => {
    const {title,amount}=information
    return (
        <div className="flex flex-col justify-center items-center gap-3 border-r-2 border-base-500 px-2">
           
            {/* <p className="text-[#FEBF05] text-xl font-extrabold">
               { amount}
            </p> */}
            <img src={amount} alt="" />
            <h2 className="text-lg font-normal">
                {title}
            </h2>
        </div>
    );
};

export default Info;