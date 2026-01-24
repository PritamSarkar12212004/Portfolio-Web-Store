import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    icon?: ReactNode;
    className?: string;
    disabled?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    icon,
    className = '',
    disabled = false
}: ButtonProps) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg smooth-transition disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/30',
        secondary: 'bg-gradient-to-r from-accent-cyan to-accent-emerald text-white hover:shadow-lg hover:shadow-accent-cyan/30',
        outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10',
        ghost: 'text-primary-400 hover:bg-primary-500/10 hover:text-primary-300'
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = (
        <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                whileHover={{ scale: disabled ? 1 : 1.05 }}
                whileTap={{ scale: disabled ? 1 : 0.95 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
        >
            {content}
        </motion.button>
    );
};
