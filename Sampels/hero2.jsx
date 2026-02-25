import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden bg-darkbg">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#df0139] via-[#1e1e27] to-[#df0139] bg-[length:400%_400%] animate-gradient opacity-20"></div>

            {/* Mouse Glow */}
            <div
                className="pointer-events-none absolute w-96 h-96 rounded-full blur-[120px] opacity-20"
                style={{
                    background: "#df0139",
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                }}
            />

            {/* Glitch Title */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative text-6xl md:text-8xl font-extrabold text-primary tracking-widest"
            >
                <span className="relative">
                    Trikon 3.0
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-8 text-lg md:text-xl text-lighttext max-w-2xl"
            >
                Where Innovation Meets Code.
                Build. Break. Create.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="mt-12 px-10 py-4 rounded-full bg-primary text-white text-lg font-semibold shadow-lg shadow-primary/40"
            >
                Register Now 🚀
            </motion.button>
        </section>
    );
}

export default Hero;