import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center bg-[#0e0e14] overflow-hidden px-6 md:px-16">

            {/* Animated Gradient Background */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(270deg,#1a1a24,#111116,#1a1a24)] bg-[length:400%_400%]"
            />

            {/* TOP MOVING STRIP */}
            <div className="absolute top-12 left-0 w-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap text-primary/25 text-2xl sm:text-3xl md:text-4xl tracking-[0.5em] font-semibold"
                >
                    <span>
                        TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
                    </span>
                    <span className="ml-16">
                        TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
                    </span>
                </motion.div>
            </div>

            {/* BOTTOM MOVING STRIP */}
            <div className="absolute bottom-12 left-0 w-full overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap text-primary/25 text-2xl sm:text-3xl md:text-4xl tracking-[0.5em] font-semibold"
                >
                    <span>
                        TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
                    </span>
                    <span className="ml-16">
                        TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 — TRIKON 3.0 —
                    </span>
                </motion.div>
            </div>

            {/* Subtle Moving Glow */}
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-15 blur-[160px] rounded-full pointer-events-none"
            />

            {/* Parallax Grid */}
            <div
                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div className="text-center md:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-lighttext backdrop-blur-md"
                    >
                        3rd Edition • 24 Hours • Elite Hackathon
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold text-lighttext leading-tight"
                    >
                        Trikon <span className="text-primary drop-shadow-lg">3.0</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-sm sm:text-base md:text-lg text-lighttext/70 max-w-md mx-auto md:mx-0 leading-relaxed"
                    >
                        A high-intensity innovation battlefield where creators
                        build solutions that matter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <button className="relative w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition duration-300 overflow-hidden">
                            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300"></span>
                            Register Now
                        </button>

                        <button
                            onClick={() =>
                                document.getElementById("about")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/20 text-lighttext hover:bg-white/5 transition duration-300"
                        >
                            Explore Details
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ rotateX: 3, rotateY: -3 }}
                    className="mt-12 md:mt-0 perspective-1000"
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg transition duration-500">

                        <div className="grid grid-cols-2 gap-6">

                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-primary">₹50K+</p>
                                <p className="text-xs sm:text-sm text-lighttext/60 mt-1">Prize Pool</p>
                            </div>

                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-primary">10+</p>
                                <p className="text-xs sm:text-sm text-lighttext/60 mt-1">Industry Mentors</p>
                            </div>

                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-primary">12+</p>
                                <p className="text-xs sm:text-sm text-lighttext/60 mt-1">Jury Experts</p>
                            </div>

                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-primary">Offline</p>
                                <p className="text-xs sm:text-sm text-lighttext/60 mt-1">Networking Experience</p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;