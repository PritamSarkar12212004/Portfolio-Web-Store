import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { portfolioData } from '../../config/portfolio.config';
import { scrollToSection } from '../../utils/scroll';
import { fadeIn, slideUp } from '../../utils/animations';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

                {/* Floating Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
                <div className="text-center">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-300 text-sm font-medium mb-4">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
                    >
                        I'm <span className="gradient-text">{portfolioData.about.name}</span>
                    </motion.h1>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8"
                    >
                        <span className="font-heading">{portfolioData.about.title}</span>
                    </motion.div>

                    <motion.p
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Crafting beautiful, high-performance mobile applications that users love.
                        Specializing in React Native, React.js, and modern full-stack development.
                    </motion.p>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    >
                        <Button onClick={() => scrollToSection('#apps')} size="lg">
                            View My Apps
                        </Button>
                        <Button variant="outline" size="lg" href="#contact">
                            Get in Touch
                        </Button>
                        <div className="flex gap-3">
                            <Button
                                variant="ghost"
                                href={portfolioData.social.find(s => s.name === 'GitHub')?.url}
                                icon={<FaGithub size={20} />}
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="ghost"
                                href={portfolioData.social.find(s => s.name === 'LinkedIn')?.url}
                                icon={<FaLinkedin size={20} />}
                            >
                                LinkedIn
                            </Button>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="flex flex-col items-center gap-2 text-gray-500"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-sm">Scroll to explore</span>
                        <HiChevronDown size={24} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
