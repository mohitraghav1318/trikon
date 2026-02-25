import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {

    const socialLinks = [
        { icon: <FaXTwitter />, link: "https://x.com/IntelliaSociety" },
        { icon: <FaInstagram />, link: "https://instagram.com/intellia_miet" },
        { icon: <FaWhatsapp />, link: "https://chat.whatsapp.com/Lkhkp7Wx7PiHa1ToEZyLwL" },
        { icon: <FaYoutube />, link: "https://www.youtube.com/@IntelliaSociety" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/intellia-society/" },
    ];

    return (
        <footer className="relative bg-[#0d0d12] border-t border-white/10 overflow-hidden">

            {/* Subtle Glow */}
            <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-primary opacity-10 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-20">

                <div className="grid md:grid-cols-3 gap-12 items-start">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-primary font-bold text-2xl tracking-wider">
                            Trikon 3.0
                        </h2>

                        <p className="mt-4 text-lighttext/60 text-sm leading-relaxed max-w-sm">
                            Where innovation meets execution. A 24-hour elite
                            hackathon built to challenge minds and create impact.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-lighttext font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-lighttext/70 text-sm">
                            {["about", "problems", "timeline", "prize", "team"].map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() =>
                                            document
                                                .getElementById(item)
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-left hover:text-primary transition capitalize"
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div>
                        <h3 className="text-lighttext font-semibold mb-6">
                            Connect With Us
                        </h3>

                        <div className="flex gap-5">

                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-lighttext/70 hover:text-primary hover:border-primary transition transform hover:scale-110 duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}

                        </div>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="mt-16 border-t border-white/10 pt-8 text-center text-lighttext/40 text-sm">
                    © 2026 Trikon 3.0 — All Rights Reserved
                </div>

            </div>
        </footer>
    );
}

export default Footer;