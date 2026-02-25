import { motion } from "framer-motion";

function Jury() {

    const juryMembers = [
        {
            name: "Coming Soon",
            role: "Industry Expert",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        },
        {
            name: "Coming Soon",
            role: "Tech Leader",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        },
        {
            name: "Coming Soon",
            role: "Innovation Mentor",
            organization: "Details To Be Announced",
            image: "/images/jury/placeholder.jpg"
        }
    ];

    return (
        <section
            id="jury"
            className="relative py-32 px-6 md:px-16 bg-[#0f0f15] overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Our <span className="text-primary">Jury Panel</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 text-center text-lighttext/70 max-w-2xl mx-auto"
                >
                    Esteemed professionals evaluating innovation, creativity, and execution.
                </motion.p>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {juryMembers.map((member, index) => (
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
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="mt-6 text-lighttext font-semibold text-lg">
                                {member.name}
                            </h3>

                            <p className="mt-2 text-primary text-sm">
                                {member.role}
                            </p>

                            <p className="mt-1 text-lighttext/60 text-sm">
                                {member.organization}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Jury;