import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CreditCard, Clock, Smartphone, Zap, Trophy, Gamepad2, Target } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const FeatureItem = ({ icon: Icon, text }) => (
    <li className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
            <Icon size={18} strokeWidth={1.5} />
        </div>
        <span className="text-gray-300 leading-relaxed">{text}</span>
    </li>
);

const Hyper = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-4 relative overflow-hidden font-sans">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black mb-6">
                        About the Platform
                    </p>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 pb-4">
                        What is Hyper?
                    </h1>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassCard className="p-8 md:p-16 rounded-[3rem] border-white/5 bg-black/40">
                        <div className="space-y-16">

                            {/* Intro */}
                            <div>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                    Hyper is a sports and venue booking app that makes discovering and reserving activity spaces effortless. Find and book slots at cricket turfs, football arenas, table tennis courts, PS5 game lounges, and more — with real-time availability, flexible payment options, and transparent booking workflows that keep the game going.
                                </p>
                            </div>

                            {/* With Hyper Section */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                        <Zap size={24} strokeWidth={1.5} />
                                    </div>
                                    With Hyper, you can
                                </h2>
                                <ul className="space-y-5">
                                    <FeatureItem icon={MapPin} text="Discover nearby sports venues and play zones" />
                                    <FeatureItem icon={Clock} text="Check live slot availability instantly" />
                                    <FeatureItem icon={CreditCard} text="Book your time with a secure partial advance" />
                                    <FeatureItem icon={Calendar} text="Pay the rest directly at the venue" />
                                    <FeatureItem icon={Smartphone} text="View booking history and manage reservations easily" />
                                </ul>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mt-8">
                                    Whether you're planning a casual game with friends or securing a play slot on the go, Hyper simplifies the entire booking experience.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] w-full bg-white/5" />

                            {/* Key Features Section */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                        <Trophy size={24} strokeWidth={1.5} />
                                    </div>
                                    Key Features
                                </h2>
                                <ul className="space-y-5">
                                    <FeatureItem icon={Gamepad2} text="Discover Local Sports Venues: Cricket, football, table tennis & esports zones" />
                                    <FeatureItem icon={Clock} text="Live Slot Availability: Always see open time slots before you book" />
                                    <FeatureItem icon={CreditCard} text="Flexible Payments: Partial advance + pay-at-venue option" />
                                    <FeatureItem icon={Calendar} text="Booking History: Keep track of your reservations" />
                                    <FeatureItem icon={Smartphone} text="Fast, Easy & Mobile-First: Designed for players on the go" />
                                </ul>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] w-full bg-white/5" />

                            {/* Who Is Hyper For */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 flex items-center gap-4">
                                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                        <Target size={24} strokeWidth={1.5} />
                                    </div>
                                    Who Is Hyper For?
                                </h2>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                    Players who want quick bookings, flexible play options, and an app that gets you into the game faster.
                                </p>
                            </div>

                            {/* Tagline */}
                            <div className="text-center pt-8">
                                <motion.p
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                    className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] pb-2"
                                >
                                    Book Smooth. Play Savage.
                                </motion.p>
                            </div>

                        </div>
                    </GlassCard>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    className="mt-24 pb-12 flex justify-center"
                >
                    <motion.button
                        onClick={() => navigate('/')}
                        initial="initial"
                        whileHover="hovered"
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-gray-100 transition-colors shadow-2xl shadow-white/5 group"
                    >
                        <motion.div
                            variants={{
                                initial: { x: "-100%", opacity: 0 },
                                hovered: {
                                    x: "250%",
                                    opacity: [0, 1, 1, 0],
                                    transition: { repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 0.2 }
                                }
                            }}
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{
                                background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), transparent)",
                                skewX: "-25deg",
                            }}
                        />
                        <ArrowLeft size={16} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform relative z-10" />
                        <span className="relative z-10">Back to Home</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hyper;
