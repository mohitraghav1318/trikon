import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">

            {/* Animated Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-primary opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>

            <div className="absolute w-[400px] h-[400px] bg-primary opacity-10 blur-[100px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

            {/* Content */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent"
            >
                Trikon 3.0
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-6 text-lg md:text-xl text-lighttext max-w-2xl"
            >
                Where Innovation Meets Code.
                Join the ultimate 24-hour hackathon and build the future.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-8 py-3 rounded-full bg-primary text-white text-lg font-semibold shadow-lg shadow-primary/40"
            >
                Register Now 🚀
            </motion.button>

        </section>
    );
}

export default Hero;