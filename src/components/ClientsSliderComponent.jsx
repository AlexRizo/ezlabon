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
                className="mySwiper bg-gradient-to-t from-[#172D7E] to-[#2E5AFC] xl:hidden !h-auto py-20"
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <CocaColaIcon className="m-auto" width={ 100 } height={ 31.37 } />
                            </div>
                            <div className="w-full">
                                <GrupoMexicoIcon className="m-auto" width={ 160 } height={ 30.72 } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <TornelIcon className="m-auto" width={ 110 } height={ 26.63 } />
                            </div>
                            <div className="w-full">
                                <ArmaConcretoIcon className="m-auto" width={ 120 } height={ 18.08 } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <CpcIcon className="m-auto" width={ 70 } height={ 34.86 } />
                            </div>
                            <div className="w-full">
                                <KuehneNagelIcon className="m-auto" width={ 150 } height={ 30.08 } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <CemexIcon className="m-auto" width={ 125 } height={ 22.39 } />
                            </div>
                            <div className="w-full">
                                <CamesaIcon className="m-auto" width={ 125 } height={ 16.3 } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center ">
                            <div className="w-full">
                                <StanleyIcon className="m-auto" width={ 115 } height={ 17.28 } />
                            </div>
                            <div className="w-full">
                                <DaltileIcon className="m-auto" width={ 115 } height={ 25.28 } />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <HencoIcon className="m-auto" width={  } height={  } />
                            </div>
                            <div className="w-full">
                                <MolycopIcon className="m-auto" width={  } height={  } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <PenolesIcon className="m-auto" width={  } height={  } />
                            </div>
                            <div className="w-full">
                                <PandGIcon className="m-auto" width={  } height={  } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <IBMEXIcon className="m-auto" width={  } height={  } />
                            </div>
                            <div className="w-full">
                                <MolIcon className="m-auto" width={  } height={  } />
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="w-full">
                                <MexinoxIcon className="m-auto" width={  } height={  } />
                            </div>
                            <div className="w-full">
                                <MscIcon className="m-auto" width={  } height={  } />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
