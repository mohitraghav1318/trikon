import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-darkbg">

            {/* Soft background radial glow */}
            <div className="absolute w-[800px] h-[800px] bg-primary opacity-10 blur-[160px] rounded-full"></div>

            <div className="relative z-10 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-7xl md:text-8xl font-extrabold tracking-tight"
                >
                    <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                        Trikon 3.0
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mt-8 text-xl text-lighttext max-w-2xl mx-auto"
                >
                    Where Innovation Meets Code.
                    A 24-hour battlefield for creators.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <button className="mt-12 px-10 py-4 rounded-full bg-primary text-white text-lg font-semibold shadow-[0_0_40px_rgba(223,1,57,0.5)] transition duration-300 hover:scale-105">
                        Register Now 🚀
                    </button>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;