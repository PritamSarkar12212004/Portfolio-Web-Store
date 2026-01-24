import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../config/portfolio.config';
import { ICON_MAP } from '../../constants/icons';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const TechStack = () => {
    return (
        <section id="tech" className="py-20 bg-dark-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Tech Stack"
                    subtitle="Technologies and tools I work with"
                />

                <div className="space-y-12">
                    {portfolioData.techStack.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                                {category.category}
                            </h3>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                            >
                                {category.technologies.map((tech, techIndex) => {
                                    const Icon = ICON_MAP[tech.icon];
                                    return (
                                        <motion.div
                                            key={techIndex}
                                            variants={staggerItem}
                                            className="glass p-6 rounded-xl flex flex-col items-center gap-3 hover:bg-white/10 smooth-transition group"
                                            whileHover={{ y: -8, scale: 1.05 }}
                                        >
                                            {Icon && (
                                                <Icon
                                                    className="text-4xl smooth-transition"
                                                    style={{ color: tech.color }}
                                                />
                                            )}
                                            <span className="text-white text-sm font-medium text-center">
                                                {tech.name}
                                            </span>
                                            {/* Glow effect on hover */}
                                            <div
                                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 smooth-transition blur-xl"
                                                style={{ backgroundColor: tech.color }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
