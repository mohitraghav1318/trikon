import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-darkbg overflow-hidden px-6 md:px-16">

            {/* Background Glow */}
            <div className="absolute right-[-150px] top-[-150px] w-[500px] h-[500px] bg-primary opacity-15 blur-[120px] rounded-full"></div>
            <div className="absolute left-[-200px] bottom-[-200px] w-[600px] h-[600px] bg-primary opacity-10 blur-[150px] rounded-full"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">

                {/* LEFT SIDE */}
                <div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1 rounded-full bg-cardbg border border-primary/30 text-sm text-lighttext tracking-wide"
                    >
                        3rd Edition • 24 Hours • Offline
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-lighttext"
                    >
                        Trikon <span className="text-primary">3.0</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-lg text-lighttext/80 max-w-lg leading-relaxed"
                    >
                        A premium 24-hour hackathon experience where bold
                        ideas turn into powerful solutions.
                        Compete with the brightest minds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex flex-wrap gap-6"
                    >
                        {/* Primary Button */}
                        <button className="relative px-8 py-3 rounded-full text-white font-semibold overflow-hidden group">

                            <span className="absolute inset-0 bg-primary"></span>

                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></span>

                            <span className="relative z-10">
                                Register Now
                            </span>

                        </button>

                        {/* Secondary Button */}
                        <button className="px-8 py-3 rounded-full border border-lighttext/30 text-lighttext hover:bg-cardbg transition duration-500">
                            Explore Details
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT SIDE CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="bg-cardbg/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

                        <h3 className="text-2xl font-bold text-primary mb-8">
                            Event Highlights
                        </h3>

                        <div className="grid grid-cols-2 gap-8">

                            <div>
                                <p className="text-3xl font-bold text-lighttext">300+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Participants</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">₹50K+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Prize Pool</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">10+</p>
                                <p className="text-sm text-lighttext/60 mt-1">Mentors</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-lighttext">24</p>
                                <p className="text-sm text-lighttext/60 mt-1">Hours</p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;