import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { SectionTitle } from '../custom/SectionTitle';
import { Button } from '../custom/Button';
import { portfolioData } from '../../data/main/portfolio.config';
import { slideUp } from '../animation/Animation';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate with a backend or email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Let's discuss your next project or collaboration opportunity"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Let's Connect
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        {/* Email CTA */}
                        <div className="glass p-6 rounded-xl mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <FaEnvelope className="text-2xl text-primary-400" />
                                <h4 className="text-white font-semibold">Email Me</h4>
                            </div>
                            <a
                                href={`mailto:${portfolioData.contact.email}`}
                                className="text-primary-400 hover:text-primary-300 smooth-transition break-all"
                            >
                                {portfolioData.contact.email}
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: FaGithub, name: 'GitHub' },
                                    { icon: FaLinkedin, name: 'LinkedIn' },
                                    { icon: FaTwitter, name: 'Twitter' },
                                    { icon: FaInstagram, name: 'Instagram' }
                                ].map(({ icon: Icon, name }) => {
                                    const social = portfolioData.social.find(s => s.name === name);
                                    return (
                                        <motion.a
                                            key={name}
                                            href={social?.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glass p-4 rounded-lg hover:bg-white/10 smooth-transition"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                        >
                                            <Icon className="text-2xl text-gray-400 hover:text-white smooth-transition" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl">
                            {!submitted ? (
                                <>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block text-white font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none smooth-transition"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-white font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none smooth-transition"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-white font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none smooth-transition resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <Button
                                        icon={<FaPaperPlane />}
                                        size="lg"
                                        className="w-full"
                                    >
                                        Send Message
                                    </Button>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <HiCheckCircle className="text-6xl text-accent-emerald mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-400">
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
