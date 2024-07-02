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
                    <div className="m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100.043" height="31.38" viewBox="0 0 100.043 31.38">
                            <g id="Cocacola" transform="translate(-7.222 -0.125)">
                                <path id="Trazado_379" data-name="Trazado 379" d="M44.985,6.627h-.006c.731-.8,1.54-1.649,2.392-2.464-1.033-.507-1.987-1.075-2.911-1.631-2-1.2-3.854-2.3-6.046-2.452a11.241,11.241,0,0,0-4.977.828s-.858-1.16-3.479-.785S19.241,3.878,12.349,14.9c-6.228,9.961-3.3,15.669,1.172,15.608,4.85-.066,9.465-5.461,11.03-9.906s-.284-5.648-1.7-5.533a8.117,8.117,0,0,0-5.859,4.609,12.572,12.572,0,0,0-1.522,4.983,15.408,15.408,0,0,1,2.024-1.794,9.1,9.1,0,0,1,2.138-1.238,10.789,10.789,0,0,1,.791-2.313,4.573,4.573,0,0,1,2.5-2.609c2.193-.55,1.142,3.443-.465,6.04-.864,1.389-3.932,5.406-6.566,5.406s-3.141-2.537-2.585-4.917,1.323-5.394,5.171-10.879A34.765,34.765,0,0,1,28.906,2.247c2.471-1.4,3.479-.785,3.479-.785a21.47,21.47,0,0,0-4.959,4.283c-1.715,2.241-2.742,4.754-1.951,5.992.767,1.172,3.443,1.2,6.391-3.056,2.911-4.2,2.181-6.7,2.181-6.7a4.88,4.88,0,0,1,.586-.145c1.419-.193,2.561.187,4.319,1.087a27.931,27.931,0,0,1,2.6,1.607,33.409,33.409,0,0,0,3.431,2.1ZM33.049,2.3A12.467,12.467,0,0,0,29,5.455c-2.181,2.4-3.455,5.1-2.513,5.823.362.272,1.19.314,2.706-1.045a11.915,11.915,0,0,0,3.2-4.434,6.316,6.316,0,0,0,.67-3.485L33.049,2.3" transform="translate(44.256 0.233)" fill="#fff" fillRule="evenodd"/>
                                <path id="Trazado_380" data-name="Trazado 380" d="M15.408,8.075h0C20.53,9.09,25.018,5.918,27.4,3.212A15.738,15.738,0,0,0,29.633.029a19.95,19.95,0,0,1-3.624,2.978L26,3c-2.223,1.426-5.3,2.718-8.251,2.434C17,6.208,16.2,7.1,15.4,8.075Z" transform="translate(77.632 0.144)" fill="#fff"/>
                                <path id="Trazado_381" data-name="Trazado 381" d="M38.555,25.977c-.417.683-.9,1.987.5,1.178,1.7-.991,4.138-4.693,4.138-4.693h1.111a36.464,36.464,0,0,1-3.358,4.4c-1.722,1.921-3.836,3.66-5.328,3.491-1.74-.205-1.2-2.489-1.2-2.489s-2.495,2.64-4.2,2.458c-2.326-.254-1.625-3.129-1.625-3.129s-2.634,3.226-4.416,3.129c-2.8-.163-2.1-3.588-1.323-5.986.429-1.287.809-2.3.809-2.3s-.284.072-.882.163c-.314.042-.882.072-.882.072a36.263,36.263,0,0,1-2.1,3.3c-.936,1.244-4.9,5.515-7.248,4.657-2.168-.791-1.456-4.1-.187-6.741,1.836-3.836,7.007-9.351,9.985-8.626,3.093.755.072,6.391.072,6.391l.03.036a1.2,1.2,0,0,0,.586-.036,6.96,6.96,0,0,0,1.136-.332,65.7,65.7,0,0,1,6.536-10.764C34.139,5.911,40.995-1.41,43.689.36c.652.441.356,1.939-.538,3.763a11.537,11.537,0,0,1-1.214.314,9.413,9.413,0,0,0,1.105-2.615c.4-2.193-4.73,2.44-8.4,7.424a70.425,70.425,0,0,0-5.865,9.508,15.706,15.706,0,0,0,1.9-1.353,55.422,55.422,0,0,0,4.651-4.343,50.965,50.965,0,0,0,3.956-4.591,10.847,10.847,0,0,0,1.172-.121,51.793,51.793,0,0,1-4.373,5.171c-.133.127-.26.26-.4.387-1.353,1.359-2.779,2.785-4.023,3.842a36.931,36.931,0,0,1-3.872,2.9s-3.232,6.469-1.468,6.886c1.027.242,3.05-2.875,3.05-2.875a71.24,71.24,0,0,1,4.24-5.865c2.156-2.458,4.035-3.878,5.889-3.914a2.2,2.2,0,0,1,1.734,1.142l.519-.791h3.147s-5.883,10-6.354,10.752Zm1.987-8.843a2.226,2.226,0,0,0,.091-.211.524.524,0,0,0-.157-.308.531.531,0,0,0-.314-.139c-.483-.024-1.154.066-2.893,2a26.293,26.293,0,0,0-3.715,5.273c-1,1.83-1.4,3.189-.828,3.54a.836.836,0,0,0,.6.06c.393-.091.821-.459,1.492-1.232.254-.29.526-.683.84-1.124l.012-.006c.072-.109.145-.223.236-.338C37.063,23.078,39.962,18.131,40.542,17.134Zm-18.133,2.1c.29-.761.658-2.259-.109-2.845-.828-.622-2.936.84-2.948,2.344A2.611,2.611,0,0,0,21.2,21.06c.2.06.272.048.375-.115a13.881,13.881,0,0,0,.834-1.7Zm-1.595,2.8a6.493,6.493,0,0,1-1.45-.924,4.706,4.706,0,0,1-1.093-1.323c-.024-.042-.048-.012-.072.012l-.018.018a16.8,16.8,0,0,0-1.293,1.812c-1.13,1.655-2.851,5.068-1.287,5.648,1,.375,2.67-1.383,3.576-2.543a21.446,21.446,0,0,0,1.685-2.555c.048-.1,0-.127-.048-.145" transform="translate(56.285 0.448)" fill="#fff" fillRule="evenodd"/>
                                <path id="Trazado_382" data-name="Trazado 382" d="M13.744,1.334h-3l-1.7,2.742h3Z" transform="translate(45.586 6.723)" fill="#fff"/>
                                <path id="Trazado_383" data-name="Trazado 383" d="M37.547,9.181h1.087s-5.509,7.961-8.626,7.6c-1.734-.205-1.22-2.344-1.22-2.344s-2.446,2.857-4.687,2.283c-2.036-.519-.719-3.9-.719-3.9a4.219,4.219,0,0,0-.368.332c-1.154,1.111-4.73,4.542-7.357,3.534-3.226-1.25-1.552-5.4-.942-6.65.526-1.051,1.1-2.078,1.1-2.078s-.5.139-.8.211-.779.163-.779.163-1.528,2.489-2.464,3.727-4.911,5.5-7.248,4.657-1.758-4.126-.447-6.741C6.2,5.75,11.266.561,14.328,1.346s.532,5.781.532,5.781.61.079,2.078-.924a18.383,18.383,0,0,0,1.975-1.679c1.758-1.631,3.793-3.516,5.938-3.189,1.419.211,2.742,1.673.93,4.434-.586.882-1.546,1.685-2.3.9-.459-.489-.054-1.377.429-1.987a1.931,1.931,0,0,1,.725-.58,1.965,1.965,0,0,1,.912-.169s.5-1.142-.773-1.117c-1.027.018-3.63,2.41-5.1,4.832-1.329,2.229-3.371,6.016-1.329,6.844,1.873.761,5.448-3.485,7.1-5.708s5.424-7.267,8.589-7.466a2.1,2.1,0,0,1,1.74.918l.368-.586h3.159s-5.95,9.961-6.415,10.71c-.368.586-.852,1.915.5,1.172s4.156-4.349,4.156-4.349m-7.164,1.981c1.275-1.758,4.8-7.883,4.8-7.883a.515.515,0,0,0-.151-.308.571.571,0,0,0-.314-.139c-.489-.024-1.3.139-2.936,2.162a36.59,36.59,0,0,0-3.763,5.3c-1,1.824-1.438,3.117-.864,3.467a.872.872,0,0,0,.6.06,3.713,3.713,0,0,0,1.54-1.244C29.61,12.219,29.967,11.736,30.383,11.162Zm-16.1-8.293c-.834-.628-2.936.84-2.954,2.344s1.9,1.975,2.156,1.987a.217.217,0,0,0,.163-.012.248.248,0,0,0,.127-.109c.223-.441.429-.894.61-1.359.29-.761.658-2.253-.115-2.839ZM13.023,8.154A6.958,6.958,0,0,1,11.4,7.4a3.383,3.383,0,0,1-1.172-1.287c-.03-.042-.054-.012-.079.018l-.012.018c-.03.03-.2.254-1.329,1.909S6,13.107,7.575,13.687c1,.375,2.688-1.389,3.594-2.555a29.733,29.733,0,0,0,1.9-2.833c.042-.1,0-.121-.054-.139Z" transform="translate(14.738 6.384)" fill="#fff" fillRule="evenodd"/>
                                <path id="Trazado_384" data-name="Trazado 384" d="M44.532,31.4a13.1,13.1,0,0,0-7.955-2.32,4.89,4.89,0,0,0-2.193.586A4.951,4.951,0,0,0,32.7,31.183c-1.208-2.108-3.594-3.4-7.285-3.371a40.6,40.6,0,0,0-9.163,1.534,32.623,32.623,0,0,1-7.393,1.281c-4.494,0-7.768-2.827-7.659-7.84C1.391,14,8.821,6.085,14.384,2.515,17.58.462,20.25-.142,22.007.057a2.551,2.551,0,0,1,1.836,3.787c-1.419,3.177-3.383,2.911-3.31,1.4A2.518,2.518,0,0,1,20.9,4.122a2.446,2.446,0,0,1,.834-.834A2.39,2.39,0,0,1,22.9,3c.29-.242.5-1.975-1.794-1.407s-5.068,2.821-7.7,5.72S6.7,15.7,5.692,21.446c-.471,2.67-.157,7.538,6.155,7.49a40.42,40.42,0,0,0,8.583-1.558c3.83-.954,7.991-1.993,11.966-1.963a13.943,13.943,0,0,1,7.188,1.969,19.988,19.988,0,0,1,4.935,4Z" transform="translate(6.026 0.104)" fill="#fff"/>
                            </g>
                        </svg>
                    </div>
                    <img src="/img/slider/mobile/cocacola-small.png" alt="tornel" className="m-auto" />
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
