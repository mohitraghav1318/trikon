import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the maximum size for team participants?",
            answer:
                "Each team must consist of a minimum of 3 members and a maximum of 5 members. This ensures balanced collaboration while maintaining effective coordination within the team."
        },
        {
            question: "When do teams need to submit their documentation?",
            answer:
                "Teams are required to submit all necessary documentation at the time of registration. This includes team details, project idea summary (if required), and contact information."
        },
        {
            question: "Can teams register with fewer than three members?",
            answer:
                "No. A minimum of three members is mandatory to ensure diversity of skills and teamwork during the 24-hour innovation sprint."
        },
        {
            question: "Is there a deadline for registration submissions?",
            answer:
                "Yes. The registration deadline is April 13. All forms, documentation, and confirmations must be completed before 11:59 PM on that date."
        },
        {
            question: "Is the hackathon online or offline?",
            answer:
                "Trikon 3.0 will be conducted offline to provide a high-energy collaborative environment and better networking opportunities."
        },
        {
            question: "Will food and accommodation be provided?",
            answer:
                "Yes. Meals and basic accommodation facilities will be provided during the 24-hour event to ensure participants can focus entirely on innovation."
        },
        {
            question: "Are first-year students allowed to participate?",
            answer:
                "Absolutely. Students from all years and eligible disciplines are encouraged to participate and showcase their creativity."
        },
        {
            question: "What technologies are allowed?",
            answer:
                "Participants are free to use any technology stack, programming language, or framework suitable for solving the given problem statements."
        },
        {
            question: "How will projects be evaluated?",
            answer:
                "Projects will be judged based on innovation, technical implementation, real-world impact, presentation quality, and feasibility."
        }
    ];

    return (
        <section id="faq" className="relative py-32 px-6 md:px-16 bg-[#111116] overflow-hidden">

            {/* Subtle Glow */}
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-[160px] rounded-full pointer-events-none" />

            <div className="relative max-w-4xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-lighttext"
                >
                    Frequently Asked <span className="text-primary">Questions</span>
                </motion.h2>

                <div className="mt-16 space-y-6">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex justify-between items-center px-6 py-5 text-left text-lighttext font-medium hover:bg-white/5 transition"
                            >
                                {faq.question}
                                <HiOutlineChevronDown
                                    className={`text-xl transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-lighttext/70 text-sm md:text-base"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default FAQ;