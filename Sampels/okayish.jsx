import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-darkbg overflow-hidden px-6 md:px-16">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* DIAGONAL STRIP 1 */}
            <div className="absolute -rotate-12 top-20 -left-40 whitespace-nowrap opacity-10 text-[120px] font-extrabold tracking-widest text-primary animate-marquee">
                TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
            </div>

            {/* DIAGONAL STRIP 2 */}
            <div className="absolute rotate-12 bottom-20 -right-40 whitespace-nowrap opacity-10 text-[120px] font-extrabold tracking-widest text-primary animate-marquee-reverse">
                TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-20 w-full max-w-7xl mx-auto items-center">

                {/* LEFT SIDE */}
                <div>

                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-5 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-lighttext backdrop-blur-md"
                    >
                        3rd Edition • 24 Hours • Elite Hackathon
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight text-lighttext"
                    >
                        Trikon <span className="text-primary">3.0</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-lg text-lighttext/70 max-w-lg leading-relaxed"
                    >
                        A high-intensity innovation battlefield where creators
                        build solutions that matter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-10 flex gap-6"
                    >
                        <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                            Register Now
                        </button>

                        <button className="px-8 py-3 rounded-full border border-white/20 text-lighttext hover:bg-white/5 transition duration-300">
                            Explore Details
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT SIDE PREMIUM CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-40"></div>

                        <div className="relative grid grid-cols-2 gap-10">

                            <div>
                                <p className="text-4xl font-bold text-primary">₹50K+</p>
                                <p className="text-sm text-lighttext/60 mt-2">Prize Pool</p>
                            </div>

                            <div>
                                <p className="text-4xl font-bold text-primary">10+</p>
                                <p className="text-sm text-lighttext/60 mt-2">Industry Mentors</p>
                            </div>

                            <div>
                                <p className="text-4xl font-bold text-primary">12+</p>
                                <p className="text-sm text-lighttext/60 mt-2">Jury Experts</p>
                            </div>

                            <div>
                                <p className="text-4xl font-bold text-primary">Offline</p>
                                <p className="text-sm text-lighttext/60 mt-2">Networking Experience</p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;