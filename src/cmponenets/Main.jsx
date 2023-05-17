import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import img1 from '../assets/images/image1.jfif';
import img2 from '../assets/images/image2.jfif';
import img3 from '../assets/images/image3.jfif';
import img4 from '../assets/images/image4.jfif';
import img5 from '../assets/images/image5.png';
import img6 from '../assets/images/image6.png';
import img7 from '../assets/images/image7.png';

export default function Main(){

    return(
        <>
            <div id="main" className="flex flex-col lg:flex-row items-center header px-4 py-4  lg:px-8 md:h-fit lg:h-100dvh overflow-hidden gap-8 lg:gap-0">
                <div id="text-cont" className="w-full lg:w-1/2 flex flex-col gap-4 mt-8 lg:mt-0">
                    <h1 className="text-custom text-3xl md:text-4xl font-semibold">Build exactly the eCommerce Website you want</h1>
                    <p className="text-md md:text-xl lg:text-md text-gray-600">WooCommerce is a customizeable, open-source eCommerce platform built and developed by Favour Odili.  Get started quickly and make your way</p>
                    <div className=" flex items-center gap-2 w-full">
                        <button className="bg-text-custom text-gray-100 p-2 px-4 rounded-full uppercase text-xs lg:text-sm shadow-md">Start a new Store</button>
                        <span>or</span>
                        <button className="text-custom capitalize font-bold">Customize & extend ></button>
                    </div>
                </div>
                <div id="image-cont" className="w-full md:w-2/3 lg:w-2/3 h-100 flex gap-4 lg:gap-0 p-4 overflow-hidden">
                        <Swiper
                            spaceBetween={1}
                            direction="vertical"
                            slidesPerView={2.75}
                            onSlideChange={()=>console.log('slide-change')}
                            onSwiper={(swiper)=>console.log(swiper)}
                        >
                            <div className='flex flex-col'>
                               <SwiperSlide>
                                    <div className='w-full lg:w-2/3 mx-auto shadow-lg'><img src={img1} alt="" className='w-full'/></div>
                               </SwiperSlide>
                               <SwiperSlide>
                                    <div className='w-full lg:w-2/3 mx-auto shadow-lg'><img src={img2} alt="" className='w-full'/></div>
                               </SwiperSlide>
                               <SwiperSlide>
                                    <div className='w-full  lg:w-2/3 mx-auto shadow-lg'><img src={img3} alt="" className='w-full'/></div>
                               </SwiperSlide>
                            </div>
                        </Swiper>
                        <Swiper
                            spaceBetween={1}
                            direction="vertical"
                            slidesPerView={3.125}
                            onSlideChange={()=>console.log('slide-change')}
                            onSwiper={(swiper)=> console.log(swiper)}
                        >
                            <div className='flex flex-col md:gap-2'>
                               <SwiperSlide>
                                    <div className='w-full lg:w-2/3 mx-auto shadow-lg'><img src={img4} alt="" className='w-full'/></div>
                               </SwiperSlide>
                               <SwiperSlide>
                                    <div className='w-full lg:w-2/3 mx-auto shadow-lg'><img src={img5} alt="" className='w-full'/></div>
                               </SwiperSlide>
                               <SwiperSlide>
                                    <div className='w-full  lg:w-2/3 mx-auto shadow-lg'><img src={img6} alt="" className='w-full'/></div>
                               </SwiperSlide>
                               <SwiperSlide>
                                    <div className='w-full  lg:w-2/3 mx-auto shadow-md'><img src={img7} alt="" className='w-full'/></div>
                               </SwiperSlide>
                            </div>
                        </Swiper>
                </div>
            </div>
        </>
    )
}