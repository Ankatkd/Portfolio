import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Developer (Spring Boot + React)',
            company: 'Revive Analytics',
            period: 'June 2023 – June 2024',
            responsibilities: [
                'Developed 5+ Spring Boot microservices and REST APIs supporting key business operations.',
                'Enforced JWT authentication, validation, and exception handling, enhancing security for all endpoints.',
                'Integrated React with Spring Boot and implemented JWT authentication with enhance DB queries.'
            ],
        },
        {
            title: 'Full Stack Developer Intern (JAVA)',
            company: 'Revive Analytics',
            period: 'Jan 2023 – June 2023',
            responsibilities: [
                'Built 10+ backend features using Spring Boot & Hibernate, including REST APIs and ORM components.',
                'Integrated React UI with Spring Boot services across multiple internal modules.',
                'Performed CRUD operations and improved MySQL/MongoDB queries to improve data access.',
                'Contributed to Agile sprints with a 4–6 member team using Git & Jira.'
            ],
        },
    ];

    return (
    return (
        <section id="experience" className="min-h-screen py-20 bg-dark text-white relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Experience</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 pb-16 last:pb-0 border-l-2 border-gray-800 last:border-l-0 group"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gray-800 rounded-full group-hover:bg-primary transition-colors duration-300 border-2 border-dark shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>

                            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1 group-hover:bg-gray-800/50">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <div className="flex items-center text-primary text-lg font-medium">
                                            <Briefcase size={20} className="mr-2" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700 whitespace-nowrap self-start">
                                        <Calendar size={16} className="mr-2" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {exp.responsibilities.map((resp, rIndex) => (
                                        <li key={rIndex} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                                            <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
