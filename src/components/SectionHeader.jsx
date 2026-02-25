function SectionHeader({ title }) {
    return (
        <div className="relative w-full mb-16">
            <div className="bg-primary py-4 text-white font-bold text-xl md:text-2xl tracking-widest text-center shadow-lg">
                {title}
            </div>
        </div>
    );
}

export default SectionHeader;