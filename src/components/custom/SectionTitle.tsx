import { motion } from 'framer-motion';
import { slideUp } from '../animation/Animation';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
    const alignClass = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    }[align];

    return (
        <motion.div
            className={`flex flex-col gap-3 mb-12 ${alignClass}`}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-400 max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-emerald rounded-full" />
        </motion.div>
    );
};
