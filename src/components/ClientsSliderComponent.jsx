import { FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

export const ClientsSliderComponent = () => {

    return ( 
        <>
            <div className="hidden xl:flex items-center justify-center xl:h-80 bg-[#2E5AFC]">
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
            <div className="bg-gradient-to-t from-[#172D7E] to-[#2E5AFC] grid grid-cols-2 items-center py-28 gap-x-5 gap-y-20 xl:hidden">
                    <img src="/img/slider/mobile/cocacola.png" alt="cocacola" className="m-auto" />
                    <img src="/img/slider/mobile/cocacola2.png" alt="grupo-mexico" className="m-auto" />
                    <img src="/img/slider/mobile/tornel.png" alt="tornel" className="m-auto" />
                    <img src="/img/slider/mobile/arma-concreto.png" alt="arma-concreto" className="m-auto" />
                    <img src="/img/slider/mobile/cpc.png" alt="cpc" className="m-auto" />
                    <img src="/img/slider/mobile/kuehne-nagel.png" alt="kuehne-nagel" className="m-auto" />
                    <img src="/img/slider/mobile/cemex.png" alt="cemex" className="m-auto" />
                    <img src="/img/slider/mobile/camesa.png" alt="camesa" className="m-auto" />
                    <img src="/img/slider/mobile/stanley.png" alt="stanley" className="m-auto" />
                    <img src="/img/slider/mobile/daltile.png" alt="daltile" className="m-auto" />
                    <img src="/img/slider/mobile/henco.png" alt="henco" className="m-auto" />
                    <img src="/img/slider/mobile/molycop.png" alt="molycop" className="m-auto" />
            </div>
        </>
    )
}
