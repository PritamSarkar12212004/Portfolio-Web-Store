import { motion } from 'framer-motion';

interface BadgeProps {
    name: string;
    color?: string;
    className?: string;
}

export const Badge = ({ name, color, className = '' }: BadgeProps) => {
    return (
        <motion.span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/20 ${className}`}
            style={{ borderColor: color ? `${color}40` : undefined }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            {color && (
                <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                />
            )}
            <span className="text-white/90">{name}</span>
        </motion.span>
    );
};
