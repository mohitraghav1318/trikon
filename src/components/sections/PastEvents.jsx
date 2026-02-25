import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function PastEvents() {

    const images = [
        "images/pe/TEAM.jpg",
        "/images/pe/IMG_6312.jpg",
        "/images/pe/IMG_6355.JPG",
        "/images/pe/IMG_6444.JPG",
        "/images/pe/IMG_6722.JPG",
        "/images/pe/IMG_6726.JPG",
        "/images/pe/IMG_7025.JPG",
        "/images/pe/IMG_7459.JPG",
        "/images/pe/IMG_7553.JPG",
        "/images/pe/IMG_7598.JPG",
    ];

    return (
        <section
            id="pastevents"
            className="relative py-32 px-6 md:px-16 bg-[#0f0f15] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Past <span className="text-primary">Events</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Moments that defined innovation and collaboration.
                </motion.p>

                <div className="mt-16">

                    <Swiper
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        effect="coverflow"
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        autoplay={{ delay: 3500 }}
                        pagination={{ clickable: true }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        className="w-full"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[280px] sm:!w-[350px] md:!w-[450px]"
                            >
                                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-xl">

                                    <img
                                        src={src}
                                        alt={`Event ${index + 1}`}
                                        className="w-full h-[350px] object-contain bg-black"
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
}

export default PastEvents;