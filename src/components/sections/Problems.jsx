import { motion } from "framer-motion";

function Problems() {

    const problemStatements = [
        {
            title: "AI-Powered Healthcare Assistant",
            category: "AI / ML",
            description:
                "Develop an intelligent system that assists doctors in early disease detection using predictive analytics and real-time patient data."
        },
        {
            title: "Smart Campus Management",
            category: "Web / App",
            description:
                "Build a digital platform that streamlines campus activities such as attendance, event management, and student services."
        },
        {
            title: "Sustainable Energy Monitoring",
            category: "IoT",
            description:
                "Create a solution that monitors and optimizes energy consumption in residential or commercial buildings."
        },
        {
            title: "FinTech Fraud Detection",
            category: "Cybersecurity",
            description:
                "Design a fraud detection system that identifies suspicious transactions using pattern recognition and anomaly detection."
        }
    ];

    return (
        <section
            id="problems"
            className="relative py-32 px-6 md:px-16 bg-[#111116] overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Problem <span className="text-primary">Statements</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Choose a challenge that aligns with your skills and build innovative solutions within 24 hours.
                </motion.p>

                {/* Cards */}
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {problemStatements.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-2 transition duration-300"
                        >

                            {/* Category Badge */}
                            <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium">
                                {problem.category}
                            </span>

                            <h3 className="text-lighttext font-semibold text-lg">
                                {problem.title}
                            </h3>

                            <p className="mt-4 text-lighttext/70 text-sm leading-relaxed">
                                {problem.description}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Problems;