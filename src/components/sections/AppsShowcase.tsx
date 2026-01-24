import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGooglePlay, FaAppStore, FaDownload, FaCheck } from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { portfolioData } from '../../config/portfolio.config';
import { staggerContainer, staggerItem } from '../../utils/animations';
import type { App } from '../../types/portfolio.types';

export const AppsShowcase = () => {
    return (
        <section id="apps" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="My Apps"
                    subtitle="Explore the mobile applications I've built with passion and precision"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-20"
                >
                    {portfolioData.apps.map((app, index) => (
                        <AppCard key={app.id} app={app} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const AppCard = ({ app, index }: { app: App; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for images
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <motion.div
            ref={cardRef}
            variants={staggerItem}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
        >
            {/* App Info */}
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-4">
                    {app.isPremium && (
                        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-3">
                            ⭐ PREMIUM
                        </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        {app.name}
                    </h3>
                    <p className="text-primary-400 text-lg mb-4">{app.tagline}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        {app.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {app.techStack.map((tech, i) => (
                            <Badge key={i} name={tech.name} color={tech.color} />
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                        {app.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                                <FaCheck className="text-accent-emerald mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-3">
                    {app.downloads.playStore && (
                        <Button
                            href={app.downloads.playStore}
                            icon={<FaGooglePlay />}
                            variant="primary"
                        >
                            Google Play
                        </Button>
                    )}
                    {app.downloads.appStore && (
                        <Button
                            href={app.downloads.appStore}
                            icon={<FaAppStore />}
                            variant="secondary"
                        >
                            App Store
                        </Button>
                    )}
                    {app.downloads.apk && (
                        <Button
                            href={app.downloads.apk}
                            icon={<FaDownload />}
                            variant="outline"
                        >
                            Download APK
                        </Button>
                    )}
                </div>
            </div>

            {/* Screenshot Carousel */}
            <motion.div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                style={{ y }}
            >
                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div className="overflow-x-auto hide-scrollbar pb-4">
                        <div className="flex gap-4 min-w-max">
                            {app.screenshots.map((screenshot, i) => (
                                <motion.div
                                    key={i}
                                    className="relative w-64 h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                >
                                    <div className="glass-strong h-full p-2">
                                        <img
                                            src={screenshot.url}
                                            alt={screenshot.alt}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 hover:opacity-100 smooth-transition" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Fade Edges */}
                    <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </motion.div>
    );
};
