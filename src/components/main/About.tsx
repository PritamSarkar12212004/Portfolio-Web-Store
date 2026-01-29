import { motion } from 'framer-motion';
import { SectionTitle } from '../custom/SectionTitle';
import { portfolioData } from '../../data/main/portfolio.config';
import { staggerContainer, staggerItem } from '../animation/Animation';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Learn more about my journey and expertise"
                />

                {/* Introduction */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
                            {portfolioData.about.introduction}
                        </p>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <div className="mb-16">
                    <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
                        Experience Journey
                    </h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        {portfolioData.about.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="relative pl-8 border-l-2 border-primary-500/30"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan" />

                                <div className="glass p-6 rounded-lg">
                                    <div className="flex flex-wrap items-center justify-between mb-2">
                                        <h4 className="text-xl font-semibold text-white">
                                            {exp.title}
                                        </h4>
                                        <span className="text-sm text-primary-400 font-medium">
                                            {exp.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-400">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Skills */}
                <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
                        Core Competencies
                    </h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
                    >
                        {portfolioData.about.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="glass p-4 rounded-lg text-center hover:bg-white/10 smooth-transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-white font-medium">{skill}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
