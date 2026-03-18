import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-dark text-white relative overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-primary to-secondary">
                            <img
                                src={profileImg}
                                alt="Gudimitla Ankababu"
                                className="w-full h-full object-cover rounded-full border-4 border-dark shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                    <div className="max-w-2xl text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-primary font-bold text-lg mb-4 tracking-widest uppercase">Hello, I'm</h2>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Gudimitla Ankababu
                            </h1>
                            <h3 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-6 flex items-center justify-center md:justify-start gap-3">
                                <span className="text-secondary">Full Stack Developer</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                                Building scalable web applications using <span className="text-white font-medium">Spring Boot</span>, <span className="text-white font-medium">Hibernate</span>, and <span className="text-white font-medium">React</span>.
                                Passionate about creating secure REST APIs and optimizing database performance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-10 flex items-center md:justify-start justify-center gap-6"
                        >
                            <a href="#" className="text-gray-400 hover:text-white transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:2024.gudimitla.ankababu@ves.ac.in" className="text-gray-400 hover:text-white transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
