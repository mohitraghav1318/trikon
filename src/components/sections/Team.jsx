import { motion } from "framer-motion";

function Team() {
    return (
        <section
            id="team"
            className="relative py-32 px-6 md:px-16 bg-[#0f0f15] overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[160px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.6)]">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-lighttext"
                            >
                                Meet The <span className="text-primary">Core Team</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mt-6 text-lighttext/70 text-base md:text-lg leading-relaxed"
                            >
                                The visionaries, organizers, and innovators
                                powering Trikon 3.0. From logistics to mentorship,
                                this team ensures the ultimate hackathon experience.
                            </motion.p>

                        </div>

                        {/* RIGHT CTA SIDE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start md:items-end"
                        >
                            <a
                                href="https://www.intelliamiet.in/team"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative px-10 py-4 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:scale-105 transition duration-300 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300"></span>
                                View Full Team →
                            </a>

                            <p className="mt-4 text-lighttext/50 text-sm">
                                Explore organizers, mentors & contributors.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Team;