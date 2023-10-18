import { useLoaderData } from 'react-router-dom';
import Banner from '../Header/Banner'
import Ourbrands from './OurBrands/Ourbrands';

const Home = () => {
    const loadedbrands=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <main className='max-w-7xl mx-auto my-20'>
                <Ourbrands loadedbrands={loadedbrands}></Ourbrands>
            </main>
        </div>
    );
};

export default Home;