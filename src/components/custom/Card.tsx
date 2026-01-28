import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    gradient?: boolean;
}

export const Card = ({
    children,
    className = '',
    hover = true,
    gradient = false
}: CardProps) => {
    const baseClasses = 'rounded-xl p-6 smooth-transition';
    const glassClasses = gradient
        ? 'glass-strong border-gradient'
        : 'glass';

    return (
        <motion.div
            className={`${baseClasses} ${glassClasses} ${className}`}
            whileHover={hover ? { y: -8, scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};
