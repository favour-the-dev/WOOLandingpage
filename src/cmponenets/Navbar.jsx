import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Logo from '../assets/woo logo.png'
export default function Navbar(){
    const [open, setOpen] = useState(false)
    const [navbarbg, setNavbarbg] = useState('transparent');

    const handleScroll = () =>{
        if(scrollY > 0){
            setNavbarbg('white')
        }else{
            setNavbarbg('transparent')
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const isOpen = ()=>{
        setOpen(true)
    }
    const isClosed = ()=>{
        setOpen(false)
    }
    return(
        <Fragment>
            <div className={`shadow-md sticky top-0 left-0 w-full z-10 bg-${navbarbg}`}>   
                <div className='p-4 lg:p-6 flex items-center justify-between header' id='header'>
                <div className='flex items-center justify-between w-full lg:w-fit'>
                    <div className='lg:mr-12 flex justify-between items-center font-bold text-md w-full md:text-lg  lg:w-fit' id='Logo-cont'>
                            <div id="logo" className='flex items-center'>
                                <img src={Logo} alt="My Logo" className='w-1/6 lg:w-1/3'/>
                                COMMERCE
                            </div>
                            {open? <button id='menubtn' className='block lg:hidden text-3xl md:text-4xl z-50'><i className="fa-solid fa-xmark" onClick={isClosed}></i></button> :   <button id='menubtn' className='block lg:hidden text-2xl md:text-4xl z-50' onClick={isOpen}><i className="fa-solid fa-bars"></i></button>}
                        </div>
                        <div id='nav' className={open? `absolute shadow-md lg:shadow-none bg-white lg:static top-0 p-32 lg:p-0 left-0 z-10 flex-col justify-center gap-4 w-full h-100dvh lg:h-fit lg:w-fit lg:static items-center lg:gap-8 lg:text-gray-600 lg:text-sm lg:flex-row flex` : 'hidden items-center gap-8 text-gray-600 text-sm lg:flex'}>
                        <a href="/" className='flex items-center gap-2'>Sell <span className='text-sm'>&#8964;</span></a>
                        <a href="/" className='flex items-center gap-2'>Marketplace <span className='text-sm'>&#8964;</span></a>
                        <a href="/" className='flex items-center gap-2'>Community <span className='text-sm'>&#8964;</span></a>
                        <a href="/" className='flex items-center gap-2'>Develop <span className='text-sm'>&#8964;</span></a>
                        <a href="/" className='flex items-center gap-2'>Resources <span className='text-sm'>&#8964;</span></a>
                        {open ? <div className='flex flex-col gap-5 lg:hidden'><button className='text-custom font-bold uppercase text-sm'>Get Started</button>
                        <button className='uppercase font-bold text-sm'>Log in</button>
                        <button className='uppercase text-sm'><i className="fa-solid fa-magnifying-glass"></i></button></div> : null}
                        </div>
                </div>
                <div id='controlbutton' className='hidden lg:flex items-center gap-4 w-1/2 justify-end'>
                        <button className='text-custom font-bold uppercase text-sm'>Get Started</button>
                        <button className='uppercase font-bold text-sm'>Log in</button>
                        <button className='uppercase text-sm'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                </div>
            </div>
        </Fragment>
    );
}
// 9A208C
