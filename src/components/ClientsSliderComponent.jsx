import { FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { ArmaConcretoIcon, CamesaIcon, CemexIcon, CocaColaIcon, CpcIcon, GrupoMexicoIcon, KuehneNagelIcon, TornelIcon, StanleyIcon, DaltileIcon, HencoIcon, MolycopIcon } from "../icons"

export const ClientsSliderComponent = () => {

    return ( 
        <>
            <div className="hidden xl:flex items-center justify-center xl:h-72 bg-[#2E5AFC]">
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
                    className="w-2/3 h-full"
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
                    <div className="m-auto">
                        <CocaColaIcon />
                    </div>
                    <div className="m-auto">
                        <GrupoMexicoIcon />
                    </div>
                    <div className="m-auto">
                        <TornelIcon />
                    </div>
                    <div className="m-auto">
                        <ArmaConcretoIcon />
                    </div>
                    <div className="m-auto">
                        <CpcIcon />
                    </div>
                    <div className="m-auto">
                        <KuehneNagelIcon />
                    </div>
                    <div className="m-auto">
                        <CemexIcon />
                    </div>
                    <div className="m-auto">
                        <CamesaIcon />
                    </div>
                    <div className="m-auto">
                        <StanleyIcon />
                    </div>
                    <div className="m-auto">
                        <DaltileIcon />
                    </div>
                    <div className="m-auto">
                        <HencoIcon />
                    </div>
                    <div className="m-auto">
                        <MolycopIcon />
                    </div>
            </div>
        </>
    )
}
