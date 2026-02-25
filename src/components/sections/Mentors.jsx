import { motion } from "framer-motion";

function Mentors() {

    const mentors = [
        {
            name: "Coming Soon",
            role: "Technical Mentor",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        },
        {
            name: "Coming Soon",
            role: "Startup Advisor",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        },
        {
            name: "Coming Soon",
            role: "Industry Specialist",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        }
    ];

    return (
        <section
            id="mentors"
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
                    Our <span className="text-primary">Mentors</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Experienced professionals guiding teams toward impactful solutions.
                </motion.p>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-primary/40 transition duration-300"
                        >

                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-white/10">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="mt-6 text-lighttext font-semibold text-lg">
                                {mentor.name}
                            </h3>

                            <p className="mt-2 text-primary text-sm">
                                {mentor.role}
                            </p>

                            <p className="mt-1 text-lighttext/60 text-sm">
                                {mentor.organization}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Mentors;