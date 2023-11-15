import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import vid1 from './assets/Canlis.mp4';
import vid2 from './assets/Nue.mp4';
import vid3 from './assets/Tavolata.mp4';
import './carousel.css';

function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);
    const slideIntervals = [10000, 7000, 1000000000];

    const goToNextSlide = () => {
        if (swiperRef.current !== null && swiperRef.current.swiper) {
            let nextIndex = (currentIndex + 1) % slideIntervals.length;
            swiperRef.current.swiper.slideTo(nextIndex);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            goToNextSlide();
        }, slideIntervals[currentIndex]);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentIndex]);




    const navigate = useNavigate();
    const handleOpen = (event) => {
      navigate('/mezcal');
    };





    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
               
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                ref={swiperRef}
            >
                <SwiperSlide>
                <div
        className="video-container"
        onClick={() => navigate('/mezcal')} // Add the onClick handler
       
    >
                        <video
                            src={vid1}
                            alt="video"
                            loop
                            autoPlay
                            muted
                            style={{ width: '80%', height: '80%' }}
                        />
                        <div className="video-overlay">
                            <div className="video-text">
                                <h2>KISS A MEZCAL</h2>
                                <p>30 OCT 2022</p>
                                <p>Venue</p>
                                <p>Neighborhood</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="video-container">
                        <video
                            src={vid2}
                            alt="video"
                            loop
                            autoPlay
                            muted
                            style={{ width: '80%', height: '80%' }}
                        />
                        <div className="video-overlay">
                            <div className="video-text">
                                <h2>MBAR ROOTOP</h2>
                                <p>30 OCT 2022</p>
                                <p>Venue</p>
                                <p>Neighborhood</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="video-container">
                        <video
                            src={vid3}
                            alt="video"
                            loop
                            autoPlay
                            muted
                            style={{ width: '80%', height: '80%' }}
                        />
                        <div className="video-overlay">
                            <div className="video-text">
                                <h2>NOTE FROM JEN</h2>
                                <p>30 OCT 2022</p>
                                <p>Venue</p>
                                <p>Neighborhood</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Carousel;