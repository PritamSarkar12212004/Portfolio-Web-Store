import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGooglePlay, FaGithub } from 'react-icons/fa';
import { SectionTitle } from '../custom/SectionTitle';
import { Badge } from '../custom/Badge';
import { Button } from '../custom/Button';
import { portfolioData } from '../../data/main/portfolio.config';
import { staggerContainer, staggerItem } from '../animation/Animation';
import type { App } from '../../data/types/portfolio.types';

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
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
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
                    {app.downloads.github && (
                        <Button
                            href={app.downloads.github}
                            icon={<FaGithub />}
                            variant="outline"
                        >
                            Source Code
                        </Button>
                    )}
                </div>
            </div>

            {/* Premium Mobile Frame Carousel */}
            <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                style={{ y }}
            >
                <div className="relative overflow-hidden">
                    {/* Animated Track */}
                    <motion.div
                        className="flex gap-12 w-max py-10"
                        animate={{
                            x: [0, "-50%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Double the items for seamless loop */}
                        {[...app.screenshots, ...app.screenshots].map((screenshot, i) => (
                            <div key={i} className="flex-shrink-0">
                                <MobileFrame>
                                    <img
                                        src={screenshot.url}
                                        alt={screenshot.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </MobileFrame>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Fade Edges */}
                    <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 via-dark-900/40 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 via-dark-900/40 to-transparent z-10 pointer-events-none" />
                </div>
            </motion.div>
        </motion.div>
    );
};

// Google Pixel 8 Inspired Mobile Frame Component
const MobileFrame = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-[280px] h-[580px] bg-dark-800 rounded-[2.8rem] p-[10px] shadow-2xl border-[6px] border-[#3c4043] ring-1 ring-white/10"
        >
            {/* Pixel Punch Hole Camera */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-dark-900 rounded-full z-20 border border-white/5" />

            {/* Speaker Grill */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-dark-700 rounded-full z-20 opacity-50" />

            {/* Inner Screen */}
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-dark-950 z-10 shadow-inner">
                {children}
                {/* Screen Reflection Map */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Pixel Buttons (All on Right) */}
            {/* Power Button */}
            <div className="absolute -right-[8px] top-24 w-[3px] h-12 bg-[#3c4043] rounded-r-md border-r border-white/10" />
            {/* Volume Rocker */}
            <div className="absolute -right-[8px] top-44 w-[3px] h-24 bg-[#3c4043] rounded-r-md border-r border-white/10" />

            {/* Antenna Lines (Subtle) */}
            <div className="absolute top-12 -left-[6px] w-[2px] h-4 bg-white/5" />
            <div className="absolute bottom-12 -right-[6px] w-[2px] h-4 bg-white/5" />

            {/* Glossy Overlay/Screen Edge */}
            <div className="absolute inset-[10px] border border-white/10 rounded-[2.2rem] pointer-events-none z-30 opacity-30" />
        </motion.div>
    );
};
