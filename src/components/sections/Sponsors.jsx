import { motion } from "framer-motion";

function Sponsors() {

    const sponsorsData = [
        {
            category: "Title Sponsor",
            logos: [
                "/images/sponsors/placeholder.png"
            ]
        },
        {
            category: "Platform Partner",
            logos: [
                "/images/sponsors/placeholder.png",
                "/images/sponsors/placeholder.png"
            ]
        },
        {
            category: "Community Partners",
            logos: [
                "/images/sponsors/placeholder.png",
                "/images/sponsors/placeholder.png",
                "/images/sponsors/placeholder.png"
            ]
        }
    ];

    return (
        <section
            id="sponsors"
            className="relative py-32 px-6 md:px-16 bg-[#0f0f15] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Our <span className="text-primary">Sponsors</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Proudly supported by organizations that believe in innovation and growth.
                </motion.p>

                <div className="mt-20 space-y-16">

                    {sponsorsData.map((group, index) => (
                        <div key={index}>

                            <h3 className="text-center text-primary text-lg font-semibold mb-8">
                                {group.category}
                            </h3>

                            <div className="flex flex-wrap justify-center items-center gap-10">

                                {group.logos.map((logo, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 w-40 h-24 flex items-center justify-center hover:border-primary/40 transition duration-300"
                                    >
                                        <img
                                            src={logo}
                                            alt="Sponsor Logo"
                                            className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-500"
                                        />
                                    </motion.div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Sponsors;