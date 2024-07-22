import { FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import 'swiper/css/pagination';

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
                    className="w-[1300px] h-full px-14"
                >
                    <div className="swiper-button-prev !text-white !left-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0"></div>
                    <div className="swiper-button-next !text-white !right-0 bg-[#2e5afc] !top-0 h-full flex items-center justify-center !m-0" ></div>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CocaColaIcon className="h-min w-[150px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CemexIcon className="h-min w-[180px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <CamesaIcon className="h-min w-[200px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <GrupoMexicoIcon className="h-min w-[240px]" />
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
                            <TornelIcon className="h-min w-[160px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <StanleyIcon className="h-min w-[170px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <DaltileIcon className="h-min w-[170px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <ArmaConcretoIcon className="h-min w-[190px]" />
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
                            <HencoIcon className="h-min w-[165px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <MolycopIcon className="h-min w-[145px]" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center ">
                        <div className="flex items-center justify-center">
                            <KuehneNagelIcon className="h-min w-[240px]" />
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

            <Swiper
                cssMode={ true }
                pagination={{ clickable: true }}
                modules={[ Pagination ]}
                className="mySwiper bg-gradient-to-t from-[#172D7E] to-[#2E5AFC] xl:hidden h-min py-20"
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <CocaColaIcon className="w-[100px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <GrupoMexicoIcon className="w-[160px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <TornelIcon className="w-[110px] h-min  m-auto" />
                            </div>
                            <div className="w-full">
                                <ArmaConcretoIcon className="w-[120px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <CpcIcon className="w-[70px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <KuehneNagelIcon className="w-[150px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <CemexIcon className="w-[125px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <CamesaIcon className="w-[125px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <StanleyIcon className="w-[115px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <DaltileIcon className="w-[115px] h-min m-auto" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <HencoIcon className="w-[105px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <MolycopIcon className="w-[90px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <PenolesIcon className="w-[40px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <PandGIcon className="w-[50px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <IBMEXIcon className="w-[50px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <MolIcon className="w-[60px] h-min m-auto" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <MexinoxIcon className="w-[65px] h-min m-auto" />
                            </div>
                            <div className="w-full">
                                <MscIcon className="w-[50px] h-min m-auto" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
