import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { portfolioData } from '../../config/portfolio.config';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const BackendProjects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Backend Projects"
                    subtitle="Scalable server-side solutions and API development"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {portfolioData.backendProjects.map((project) => (
                        <motion.div key={project.id} variants={staggerItem}>
                            <Card className="h-full flex flex-col">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-cyan/20">
                                        <FaServer className="text-2xl text-primary-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-400">{project.description}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-white font-semibold mb-2 text-sm">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <Badge key={i} name={tech.name} color={tech.color} />
                                        ))}
                                    </div>
                                </div>

                                {/* APIs Used */}
                                <div className="mb-4">
                                    <h4 className="text-white font-semibold mb-2 text-sm">APIs & Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.apis.map((api, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded glass text-gray-300"
                                            >
                                                {api}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6 flex-grow">
                                    <h4 className="text-white font-semibold mb-2 text-sm">Features</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-accent-emerald mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {project.github && (
                                        <Button
                                            href={project.github}
                                            icon={<FaGithub />}
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                        >
                                            GitHub
                                        </Button>
                                    )}
                                    {project.liveDemo && (
                                        <Button
                                            href={project.liveDemo}
                                            icon={<FaExternalLinkAlt />}
                                            variant="secondary"
                                            size="sm"
                                            className="flex-1"
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
