"use client"
import { motion } from "framer-motion";

const MenuIcon = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: (open: boolean) => void }) => {
    return (
        <button
            onClick={() => setOpen(!isOpen)}
            className="flex flex-col justify-between items-center w-10 h-6 relative z-50 scale-75 px-2 md:scale-95 lg:hidden"
        >
            <motion.span
                className="block w-8 h-[3px] bg-foreground rounded-lg"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block w-6 h-[3px] bg-foreground rounded-lg mx-auto"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block w-8 h-[3px] bg-foreground rounded-lg"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </button>
    );
};

export {MenuIcon};