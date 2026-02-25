import { motion } from "framer-motion";

function Prize() {

    const prizes = [
        {
            position: "1st Place",
            reward: "₹30,000",
            description: "Awarded to the most innovative and impactful solution."
        },
        {
            position: "2nd Place",
            reward: "₹15,000",
            description: "Recognized for strong execution and technical excellence."
        },
        {
            position: "3rd Place",
            reward: "₹5,000",
            description: "Honored for creativity and problem-solving approach."
        }
    ];

    return (
        <section
            id="prize"
            className="relative py-32 px-6 md:px-16 bg-[#111116] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Prize <span className="text-primary">Pool</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Compete for exciting rewards and recognition at Trikon 3.0.
                </motion.p>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {prizes.map((prize, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-primary/40 hover:-translate-y-2 transition duration-300"
                        >

                            <h3 className="text-lighttext text-xl font-semibold">
                                {prize.position}
                            </h3>

                            <p className="mt-4 text-primary text-3xl font-bold">
                                {prize.reward}
                            </p>

                            <p className="mt-4 text-lighttext/70 text-sm leading-relaxed">
                                {prize.description}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Prize;