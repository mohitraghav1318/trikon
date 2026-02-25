import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-darkbg overflow-hidden px-6 md:px-16">

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Moving Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse"></div>

            {/* Soft Floating Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-20 blur-[140px] rounded-full"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">

                {/* LEFT SIDE */}
                <div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-sm text-lighttext tracking-wide"
                    >
                        3rd Edition • 24 Hour Hackathon
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
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
                        Build cutting-edge solutions, collaborate with innovators,
                        and compete for elite recognition.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex flex-wrap gap-6"
                    >
                        {/* Premium Glass Button */}
                        <button className="relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden group backdrop-blur-md bg-white/10 border border-white/20 hover:bg-primary transition duration-500">
                            Register Now
                        </button>

                        <button className="px-8 py-3 rounded-full border border-white/20 text-lighttext hover:bg-white/5 transition duration-500">
                            Explore Details
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT SIDE GLASS CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    whileHover={{ y: -10 }}
                    className="relative"
                >
                    <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                        <h3 className="text-2xl font-bold text-primary mb-8">
                            Event Highlights
                        </h3>

                        <div className="grid grid-cols-2 gap-8">

                            <div>
                                <p className="text-3xl font-bold text-lighttext">₹50K+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Prize Pool</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">10+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Industry Mentors</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">12+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Jury Experts</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">Offline</p>
                                <p className="text-sm text-lighttext/60 mt-1">Networking Experience</p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;