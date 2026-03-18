import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, CheckCircle2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Waste Management System',
            description: 'Full-Stack Cloud-Enabled Workflow Optimization Platform.',
            tags: ['React.js', 'Spring Boot', 'SQL Server', 'AWS'],
            highlights: [
                'Engineered distributed Spring Boot modules using SOA to automate pickups, workflow routing, and payment functions.',
                'Enhanced SQL Server/MySQL performance through indexing, schema refinement, and query tuning, reducing latency.',
                'Deployed services on AWS (EC2, S3, RDS), enabling scalable, reliable, and secure cloud-based synchronization.',
                'Built fault-tolerant REST APIs with validation layers, caching strategies, and structured exception handling.'
            ],
            github: '#',
            demo: '#',
        },
        {
            title: 'QR-Based Restaurant Menu System',
            description: 'Touchless Digital Ordering System.',
            tags: ['React.js', 'Node.js', 'MongoDB'],
            highlights: [
                'Designed event-driven Node.js backend services using modular SOA principles for menu management and order workflows.',
                'Accelerated system throughput using optimized indexes, query plans, and MongoDB aggregation pipelines.',
                'Applied secure role-based authentication and delivered a mobile-responsive UI for fast, seamless customer ordering.'
            ],
            github: '#',
            demo: '#',
        },
        {
            title: 'Travel Companion',
            description: 'AI-Powered Routing & Travel Assistance Platform.',
            tags: ['React.js', 'Python', 'MongoDB', 'AWS', 'Generative AI'],
            highlights: [
                'Improved intelligent backend components using FastAPI/Spring Boot for routing, travel insights, and user preference modelling.',
                'Integrated Generative AI (Gemini) to deliver contextual trip summaries, recommendations, and real-time guidance.',
                'Built RAG-style workflows using Open Cage + Wikipedia APIs for accurate location intelligence and information retrieval.',
                'Implemented PostgreSQL/Firebase for secure cloud data handling, real-time synchronization, and user personalization.'
            ],
            github: '#',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 bg-dark text-white relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-dark-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-2xl group flex flex-col ${index === 2 ? 'lg:col-span-2 lg:w-2/3 lg:mx-auto' : ''}`}
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Folder size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                                            <Github size={22} />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                                            <ExternalLink size={22} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 text-lg font-medium border-b border-gray-800 pb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {project.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                            <CheckCircle2 className="text-secondary shrink-0 mt-1" size={16} />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs font-semibold px-3 py-1.5 bg-gray-900 text-primary rounded-full border border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white bg-primary hover:bg-indigo-600 px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-primary/25"
                    >
                        View all projects <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
