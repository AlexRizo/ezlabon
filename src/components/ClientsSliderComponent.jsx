import { FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

export const ClientsSliderComponent = () => {

    return ( 
        <div className="flex items-center justify-center h-80 bg-[#2E5AFC]">
            <Swiper
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 5
                    }
                }}
                freeMode={ true }
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[FreeMode, Navigation]}
                loop={ true }
                className="w-9/12 h-full"
            >
                <div className="swiper-button-prev !text-white !left-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0"></div>
                <div className="swiper-button-next !text-white !right-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0" ></div>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/cocacola-client.png" alt="Coca Cola" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/cemex-client.png" alt="Cemex" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/camesa-client.png" alt="Camesa" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/grupo-mexico-client.png" width="235" alt="Grupo México" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/cocacola-client.png" alt="Coca Cola" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/cemex-client.png" alt="Cemex" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/camesa-client.png" alt="Camesa" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/img/slider/grupo-mexico-client.png" width="235" alt="Grupo México" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
