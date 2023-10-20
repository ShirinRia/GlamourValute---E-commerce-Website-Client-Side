import { useLoaderData } from 'react-router-dom';
import Banner from '../Header/Banner'
import Ourbrands from './OurBrands/Ourbrands';
import ExtraSection1 from './ExtraSection1/ExtraSection1';
import Extrasection2 from './Extrasection2/Extrasection2';

const Home = () => {
    const loadedbrands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <main className='max-w-7xl mx-auto my-20 space-y-20'>
                <Extrasection2></Extrasection2>
                <Ourbrands loadedbrands={loadedbrands}></Ourbrands>
                <ExtraSection1></ExtraSection1>
            </main>
        </div>
    );
};

export default Home;