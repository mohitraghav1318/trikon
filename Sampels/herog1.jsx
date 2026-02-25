import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-darkbg">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Soft Glow */}
            <div className="absolute w-[700px] h-[700px] bg-primary opacity-10 blur-[140px] rounded-full"></div>

            <div className="relative z-10 text-center max-w-5xl">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-1 rounded-full bg-cardbg border border-primary text-sm text-lighttext"
                >
                    3rd Edition • 24 Hours • Offline Hackathon
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 text-7xl md:text-8xl font-extrabold tracking-tight"
                >
                    <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                        Trikon 3.0
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mt-6 text-xl text-lighttext max-w-2xl mx-auto"
                >
                    Where innovation meets execution.
                    Build bold ideas. Compete with the best.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 flex justify-center gap-6"
                >
                    <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-[0_0_30px_rgba(223,1,57,0.5)] hover:scale-105 transition">
                        Register Now
                    </button>

                    <button className="px-8 py-3 rounded-full border border-lighttext text-lighttext hover:bg-cardbg transition">
                        Explore Details
                    </button>
                </motion.div>

                {/* Floating Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="mt-20 bg-cardbg/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 inline-block shadow-xl"
                >
                    <div className="flex gap-12 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-primary">300+</h3>
                            <p className="text-sm text-lighttext">Participants</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary">24</h3>
                            <p className="text-sm text-lighttext">Hours</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary">₹50K+</h3>
                            <p className="text-sm text-lighttext">Prize Pool</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;