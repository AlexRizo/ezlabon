import { FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { ArmaConcretoIcon, CamesaIcon, CemexIcon, CocaColaIcon, CpcIcon, GrupoMexicoIcon, KuehneNagelIcon, TornelIcon, StanleyIcon, DaltileIcon, HencoIcon, MolycopIcon, PenolesIcon, PandGIcon, IBMEXIcon, MolIcon, MexinoxIcon, MscIcon } from "../icons"

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
                    className="w-[70%] h-full px-14"
                >
                    <div className="swiper-button-prev !text-white !left-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0"></div>
                    <div className="swiper-button-next !text-white !right-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0" ></div>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CocaColaIcon className="h-min w-[160px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CemexIcon className="h-min w-[190px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CamesaIcon className="h-min w-[210px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <GrupoMexicoIcon className="h-min w-[250px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <PenolesIcon className="h-min w-[60px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <PandGIcon className="h-min w-[80px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <TornelIcon className="h-min w-[170px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <StanleyIcon className="h-min w-[180px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <DaltileIcon className="h-min w-[180px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <ArmaConcretoIcon className="h-min w-[200px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <IBMEXIcon className="h-min w-[80px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <MolIcon className="h-min w-[90px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CpcIcon className="h-min w-[100px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <HencoIcon className="h-min w-[175px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <MolycopIcon className="h-min w-[155px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <KuehneNagelIcon className="h-min w-[250px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <MexinoxIcon className="h-min w-[105px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <MscIcon className="h-min w-[70px]" />
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
