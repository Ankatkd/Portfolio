import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Gamepad2, Trophy, Utensils, Star } from 'lucide-react';
import runningImg from '../assets/hobby_running.png';
import chessImg from '../assets/hobby_chess.png';
import footballImg from '../assets/hobby_football.png';
import cookingImg from '../assets/hobby_cooking.png';

const Hobbies = () => {
    const hobbies = [
        {
            title: 'Running',
            icon: <Activity size={32} />,
            description: 'Maintaining physical fitness and endurance through regular running.',
            achievement: 'Marathon Enthusiast',
            image: runningImg,
        },
        {
            title: 'Chess',
            icon: <Gamepad2 size={32} />,
            description: 'Sharpening strategic thinking and problem-solving skills.',
            achievement: 'Club Champion',
            image: chessImg,
        },
        {
            title: 'Football',
            icon: <Trophy size={32} />,
            description: 'Team player on the field, enjoying the competitive spirit.',
            achievement: 'Regional League Player',
            image: footballImg,
        },
        {
            title: 'Cooking',
            icon: <Utensils size={32} />,
            description: 'Exploring culinary arts and experimenting with new recipes.',
            achievement: 'Master Chef at Home',
            image: cookingImg,
        },
    ];

    return (
        <section id="hobbies" className="min-h-screen py-20 bg-dark text-white relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Hobbies & Interests</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-dark-card aspect-[4/5] flex flex-col justify-end p-6 text-center hover:shadow-2xl transition-all border border-gray-800 hover:border-primary/40"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={hobby.image}
                                    alt={hobby.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center h-full justify-end pb-4">
                                <div className="mb-6 text-white bg-white/10 p-4 rounded-2xl backdrop-blur-md group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-lg group-hover:bg-primary/20 group-hover:border-primary/50">
                                    {hobby.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white">{hobby.title}</h3>
                                <p className="text-gray-300 mb-6 text-sm leading-relaxed font-medium">{hobby.description}</p>

                                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-white bg-primary/20 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
                                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                    <span>{hobby.achievement}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
