import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../../config/portfolio.config';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
                            Portfolio
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Building exceptional mobile experiences with React Native and modern web technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Apps', 'Projects', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-gray-400 hover:text-primary-400 smooth-transition text-sm"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <motion.a
                                href={portfolioData.social.find(s => s.name === 'GitHub')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white smooth-transition"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href={portfolioData.social.find(s => s.name === 'LinkedIn')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white smooth-transition"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href={portfolioData.social.find(s => s.name === 'Twitter')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white smooth-transition"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaTwitter size={24} />
                            </motion.a>
                            <motion.a
                                href={portfolioData.social.find(s => s.name === 'Instagram')?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white smooth-transition"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                <FaInstagram size={24} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Gradient Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-8" />

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    <p className="flex items-center justify-center gap-2">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> by {portfolioData.about.name} © {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
};
