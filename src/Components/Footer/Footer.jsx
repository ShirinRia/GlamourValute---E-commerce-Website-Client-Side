import logo from '../../assets/logo-.png'
const Footer = () => {
    return (
        <div className='bg-base-300'>

            <footer className="footer place-items-center max-w-screen-2xl mx-auto p-10  text-base-content">
                <nav>
                    <header className="footer-title opacity-100">
                        <img src={logo} alt="logo" className="h-20" />
                    </header>
                    <p className='text-xl max-w-sm'>Your go-to destination for a personalized, transformative journey to unleash your inner glamour and confidence.</p>
                </nav>
                <div className='flex'>
                    <div className='h-20 border-l-8 border-neutral my-auto'></div>
                    <div className='h-40 border-l-8 border-neutral my-auto'></div>
                    <div className='h-20 border-l-8 border-neutral my-auto'></div>
                </div>

                <nav>
                    <header className="footer-title opacity-100 text-2xl">Support</header>
                    <a className="link no-underline hover:text-red-500 hover:font-semibold  text-xl ">Frequently Asked Questions</a>
                    <a className="link no-underline hover:text-red-500 hover:font-semibold  text-xl">Terms & Conditions</a>
                    <a className="link no-underline hover:text-red-500 hover:font-semibold  text-xl">Privacy Policy</a>
                    <a className="link no-underline hover:text-red-500 hover:font-semibold  text-xl">Contact Us</a>
                </nav>

            </footer>


            <div className="footer place-items-center max-w-7xl mx-auto items-center p-4 text-neutral  text-xl">
                <aside className="items-center grid-flow-col">
                   
                    <p >Copyright © 2023 - All right reserved</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;