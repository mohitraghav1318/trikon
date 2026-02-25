import { motion } from "framer-motion";

function Timeline() {

    const timelineData = [
        {
            title: "Registrations Open",
            date: "March 20, 2026",
            description: "Teams can begin registering through the official website."
        },
        {
            title: "Registration Deadline",
            date: "April 13, 2026",
            description: "All team registrations and required documentation must be submitted before midnight."
        },
        {
            title: "Problem Statement Release",
            date: "April 18, 2026",
            description: "Final problem statements will be officially revealed to registered teams."
        },
        {
            title: "Hackathon Day",
            date: "April 20, 2026",
            description: "24-hour innovation sprint begins. Build, collaborate, and create impactful solutions."
        },
        {
            title: "Final Presentation & Results",
            date: "April 21, 2026",
            description: "Teams present their solutions to the jury and winners are announced."
        }
    ];

    return (
        <section
            id="timeline"
            className="relative py-32 px-6 md:px-16 bg-[#0f0f15] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-5xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Event <span className="text-primary">Timeline</span>
                </motion.h2>

                <div className="mt-20 relative">

                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-white/10"></div>

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                        >

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-[#0f0f15]"></div>

                            {/* Card */}
                            <div className="ml-12 md:ml-0 md:w-5/12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

                                <p className="text-primary text-sm font-medium">
                                    {item.date}
                                </p>

                                <h3 className="text-lighttext text-lg font-semibold mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-lighttext/70 text-sm mt-3 leading-relaxed">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Timeline;