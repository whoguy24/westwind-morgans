///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import {Navigation, EffectFade, Autoplay, Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Slideshow()
{
    return (
        <div>
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                navigation
                effect={'fade'}
                speed={800}
                autoplay={{
                delay: 8000,
                pauseOnMouseEnter: true
                }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop
                className='swiper'
            >


                <SwiperSlide className='swiper-slide'>
                <img className='swiper-image' src='/images/slide_1.png' />
                </SwiperSlide>

                <SwiperSlide className='swiper-slide'>
                <img className='swiper-image' src='/images/slide_2.png' />
                </SwiperSlide>

                <SwiperSlide className='swiper-slide'>
                <img className='swiper-image' src='/images/slide_3.png' />
                </SwiperSlide>

                <SwiperSlide className='swiper-slide'>
                <img className='swiper-image' src='/images/slide_4.png' />
                </SwiperSlide>

                <SwiperSlide className='swiper-slide'>
                <img className='swiper-image' src='/images/slide_5.png' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slideshow;