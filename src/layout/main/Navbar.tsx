import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../const/navigation';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activePath = location.pathname;

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
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-heading font-bold gradient-text flex items-center gap-2"
                    >
                        <FaCode className="text-primary-500" />
                        <span>PritamDev</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-sm font-medium smooth-transition relative ${isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`
                                }
                            >
                                {item.name}
                                {activePath === item.href && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"
                                        layoutId="activeSection"
                                    />
                                )}
                            </NavLink>
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
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block text-base font-medium smooth-transition ${isActive
                                        ? 'text-primary-400'
                                        : 'text-gray-400 hover:text-white'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};
