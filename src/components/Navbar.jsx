import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    const navItems = [
        "about",
        "problems",
        "timeline",
        "prize",
        "jury",
        "mentors",
        "sponsors",
        "faq",
        "pastevents",
        "team",
    ];

    // Show navbar after hero
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.6) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }

            // Active section detection
            navItems.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActive(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showNav && (
                    <motion.nav
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 w-full bg-[#111116]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg z-[200]"
                    >
                        <div className="flex justify-between items-center px-6 md:px-16 py-4">

                            {/* Logo */}
                            <h1 className="text-primary font-bold text-xl tracking-wider">
                                Trikon 3.0
                            </h1>

                            {/* Desktop Nav */}
                            <div className="hidden md:flex items-center gap-8 text-sm text-lighttext">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() =>
                                            document
                                                .getElementById(item)
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className={`capitalize transition duration-300 ${active === item
                                                ? "text-primary"
                                                : "hover:text-primary"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}

                                <button className="ml-6 px-6 py-2 rounded-full bg-primary text-white font-semibold hover:scale-105 transition">
                                    Register
                                </button>
                            </div>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMenuOpen(true)}
                                className="md:hidden text-lighttext text-3xl"
                            >
                                <HiOutlineMenu />
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-[#111116] z-[300] flex flex-col"
                    >
                        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
                            <h1 className="text-primary font-bold text-xl">
                                Trikon 3.0
                            </h1>

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl text-lighttext"
                            >
                                <HiOutlineX />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 px-8 py-12 text-2xl text-lighttext">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        document
                                            .getElementById(item)
                                            ?.scrollIntoView({ behavior: "smooth" });
                                        setMenuOpen(false);
                                    }}
                                    className={`text-left capitalize transition ${active === item
                                            ? "text-primary"
                                            : "hover:text-primary"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}

                            <button className="mt-8 px-6 py-3 rounded-full bg-primary text-white font-semibold text-lg">
                                Register
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;