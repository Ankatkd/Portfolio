import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, GraduationCap, BookOpen, Cpu, Globe } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <Layout />, description: 'React.js, Tailwind CSS, HTML5, CSS3' },
        { name: 'Backend Development', icon: <Server />, description: 'Spring Boot, Node.js, FastAPI, Python, Java' },
        { name: 'Database Management', icon: <Database />, description: 'MySQL, SQL Server, PostgreSQL, Firebase, MongoDB' },
        { name: 'Cloud & DevOps', icon: <Globe />, description: 'AWS (EC2, S3), Docker, Jenkins, API Gateway' },
        { name: 'AI & Machine Learning', icon: <Cpu />, description: 'Generative AI (Gemini, GPT), RAG Pipelines, ML APIs' },
        { name: 'Problem Solving', icon: <Code />, description: 'Data Structures, Algorithms, OOP, MVC Architecture' },
    ];

    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: "Vivekanand Education Society's Institute of Technology (VESIT), Mumbai",
            year: '2024 – 2026',
            description: 'Pursuing MCA with a focus on advanced computing technologies.',
        },
        {
            degree: 'BBA (Computer Application)',
            institution: 'Christ College, Pune',
            year: '2017 – 2020',
            description: 'Graduated with a strong foundation in computer applications and business administration.',
        },
        {
            degree: 'Class XII (Science - PCMCs)',
            institution: 'Kendriya Vidyalaya No.1 AFS Pune (CBSE)',
            year: '2017',
            description: 'Completed Higher Secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.',
        },
    ];

    return (
    return (
        <section id="about" className="min-h-screen py-20 bg-dark text-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Bio and Education */}
                    <div className="lg:col-span-5 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                <span className="p-2 bg-primary/10 rounded-lg text-primary"><BookOpen size={24} /></span>
                                Who I Am
                            </h3>
                            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                                <p className="mb-6">
                                    Motivated <span className="text-white font-medium">Full Stack Developer</span> with hands-on experience in building scalable web applications using Spring Boot, Hibernate, and React.
                                    Skilled in developing secure REST APIs, integrating frontend–backend modules, and optimizing database operations.
                                </p>
                                <p>
                                    Strong foundation in OOP, Java, MERN and Python, with exposure to cloud services, CI/CD, and Agile methodologies.
                                    Known for clean coding practices, quick learning, and strong problem-solving abilities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="p-2 bg-primary/10 rounded-lg text-primary"><GraduationCap size={24} /></span>
                                Education
                            </h3>
                            <div className="space-y-10">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-gray-800 group">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gray-800 rounded-full group-hover:bg-primary transition-colors duration-300 border-2 border-dark"></div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h4>
                                        <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                                        <p className="text-sm text-gray-500 mb-3 font-mono">{edu.year}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                            <span className="p-2 bg-primary/10 rounded-lg text-primary"><Code size={24} /></span>
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-dark-card p-6 rounded-xl hover:bg-gray-800 transition-all border border-gray-800 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg group"
                                >
                                    <div className="text-primary mb-4 text-3xl bg-primary/10 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">{skill.name}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
