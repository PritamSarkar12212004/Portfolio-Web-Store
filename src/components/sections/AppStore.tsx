import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaAppStore, FaDownload } from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { portfolioData } from '../../config/portfolio.config';
import { APP_FILTERS } from '../../constants/navigation';
import type { FilterType } from '../../constants/navigation';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const AppStore = () => {
    const [filter, setFilter] = useState<FilterType>('All');

    const filteredApps = portfolioData.apps.filter(app => {
        if (filter === 'All') return true;
        return app.category === filter;
    });

    return (
        <section className="py-20 bg-dark-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="App Store"
                    subtitle="Browse all my applications in one place"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {APP_FILTERS.map((f) => (
                        <motion.button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full font-medium smooth-transition ${filter === f
                                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
                                : 'glass text-gray-400 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {f}
                        </motion.button>
                    ))}
                </div>

                {/* Apps Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredApps.map((app) => (
                        <motion.div key={app.id} variants={staggerItem} layout>
                            <Card className="h-full flex flex-col">
                                {/* Screenshot Preview */}
                                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                                    <img
                                        src={app.screenshots[0].url}
                                        alt={app.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {app.isPremium && (
                                        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold">
                                            ⭐ PREMIUM
                                        </div>
                                    )}
                                </div>

                                {/* App Info */}
                                <h3 className="text-xl font-heading font-bold text-white mb-2">
                                    {app.name}
                                </h3>
                                <p className="text-primary-400 text-sm mb-3">{app.tagline}</p>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                                    {app.description}
                                </p>

                                {/* Download Buttons */}
                                <div className="flex gap-2">
                                    {app.downloads.playStore && (
                                        <Button
                                            href={app.downloads.playStore}
                                            icon={<FaGooglePlay />}
                                            size="sm"
                                            className="flex-1"
                                        >
                                            Play
                                        </Button>
                                    )}
                                    {app.downloads.appStore && (
                                        <Button
                                            href={app.downloads.appStore}
                                            icon={<FaAppStore />}
                                            variant="secondary"
                                            size="sm"
                                            className="flex-1"
                                        >
                                            App
                                        </Button>
                                    )}
                                    {app.downloads.apk && !app.downloads.playStore && !app.downloads.appStore && (
                                        <Button
                                            href={app.downloads.apk}
                                            icon={<FaDownload />}
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                        >
                                            APK
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredApps.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                        No apps found in this category
                    </div>
                )}
            </div>
        </section>
    );
};
