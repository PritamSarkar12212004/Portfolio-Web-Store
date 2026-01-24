import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAV_ITEMS } from '../../constants/navigation';
import { scrollToSection } from '../../utils/scroll';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = NAV_ITEMS.map(item => item.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        scrollToSection(href);
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className="text-2xl font-heading font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        Portfolio
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`text-sm font-medium smooth-transition relative ${activeSection === item.href.substring(1)
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {item.name}
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"
                                        layoutId="activeSection"
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden glass-strong border-t border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="px-4 py-6 space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`block text-base font-medium smooth-transition ${activeSection === item.href.substring(1)
                                    ? 'text-primary-400'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ x: 10 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};
