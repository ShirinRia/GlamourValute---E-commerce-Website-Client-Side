import { FcDeleteDatabase } from 'react-icons/fc';
import { FaBan } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { BiUnlink } from 'react-icons/bi';
import { SiProgress } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div >
      <div className="hero min-h-screen" >
        <h3 className='text-[400px]'>
          404
        </h3>
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="text-left text-neutral-content ">

          <div className="flex flex-col md:flex-row w-full max-w-7xl gap-96 md:gap-10 mt-80 md:mt-auto">

            <div className='flex-grow text-center md:text-left space-y-14'>
              <h1 className="mb-5 text-7xl font-bold text-red-500" >

                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Page not found',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '5rem', display: 'inline-block' }}
                  repeat={Infinity}
                /></h1>
              <p className="mb-5 text-3xl md:text-2xl font-medium text-slate-800 ">We looked everywhere for this page. <br></br> Are you sure the URL is correct? </p>

            </div>

            <div>
              <h3 className='text-5xl text-black font-medium mb-4 italic' >Why you see this page?</h3>
              <ul className='flex-grow space-y-4'>
                <li className=' flex items-center gap-2 text-2xl italic text-black'>
                  <FcDeleteDatabase className='text-5xl'></FcDeleteDatabase>This Page got deleted form the website</li>
                <li className=' flex items-center gap-2 text-2xl italic text-black'>
                  <BiUnlink className='text-5xl'></BiUnlink>The URL was typed incorrectly</li>
                <li className=' flex items-center gap-2 text-2xl italic text-black'>
                  <BiError className='text-5xl'></BiError>A server Error</li>
                <li className=' flex items-center gap-2 text-2xl italic text-black'>
                  <SiProgress className='text-5xl'></SiProgress>You’ve reached a page while it’s being edited</li>
                <li className=' flex items-center gap-2 text-2xl italic text-black'>
                  <FaBan className='text-5xl'></FaBan>Search Engines Think Your Page Shouldn’t Exist</li>
              </ul>
            </div>

          </div>
          <div className='text-center mt-8'>
            <Link to={'/'} className="btn w-full md:w-auto bg-red-700 border-none text-xl text-white font-medium">Back to Home</Link>
          </div>



        </div>
      </div>
    </div>


  );
};

export default Errorpage;