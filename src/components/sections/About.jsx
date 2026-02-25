import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="relative py-32 px-6 md:px-16 bg-[#111116] overflow-hidden"
        >

            {/* Subtle background glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-lighttext"
                    >
                        What is <span className="text-primary">Trikon 3.0</span>?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-6 text-lighttext/70 text-base md:text-lg leading-relaxed"
                    >
                        Trikon 3.0 is a 24-hour elite hackathon designed to push
                        innovation beyond limits. It brings together developers,
                        designers, and problem-solvers to create impactful
                        real-world solutions under pressure.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 text-lighttext/60 text-sm md:text-base"
                    >
                        This isn’t just a coding event — it’s an innovation arena.
                    </motion.p>

                </div>

                {/* RIGHT SIDE FEATURE CARDS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition duration-300">
                        <h3 className="text-primary font-semibold text-lg">
                            24 Hours
                        </h3>
                        <p className="text-lighttext/60 text-sm mt-2">
                            Continuous innovation sprint with no limits.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition duration-300">
                        <h3 className="text-primary font-semibold text-lg">
                            Real Problems
                        </h3>
                        <p className="text-lighttext/60 text-sm mt-2">
                            Solve industry-level impactful challenges.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition duration-300">
                        <h3 className="text-primary font-semibold text-lg">
                            Expert Mentors
                        </h3>
                        <p className="text-lighttext/60 text-sm mt-2">
                            Guidance from industry professionals.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition duration-300">
                        <h3 className="text-primary font-semibold text-lg">
                            Networking
                        </h3>
                        <p className="text-lighttext/60 text-sm mt-2">
                            Build connections beyond the hackathon.
                        </p>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default About;