import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const LegalSection = ({ title, children, number }) => (
    <div className="mb-16 last:mb-0">
        <div className="flex items-center gap-4 md:gap-6 mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-base md:text-lg shrink-0 tabular-nums">
                {number}
            </div>
            <h2 className="text-lg md:text-3xl font-bold text-white tracking-tight leading-tight md:leading-snug">
                {title}
            </h2>
        </div>
        <div className="space-y-6 text-gray-400 leading-relaxed pl-0 md:pl-20">
            {children}
        </div>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="space-y-4 pt-2">
        {items.map((item, i) => (
            <li key={i} className="flex gap-4 text-sm text-gray-300">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const RefundPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-4 relative overflow-hidden font-sans">

            {/* Subtle Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 pb-4">
                        Refund Policy
                    </h1>
                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">
                        Hyper Digital Support
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <GlassCard className="p-8 md:p-20 rounded-[3rem] border-white/5 bg-black/40">
                        <div className="prose prose-invert max-w-none">

                            <LegalSection number="01" title="Refund & Cancellation Policy for HYPER">
                                <p>
                                    This Refund and Cancellation applies to the HYPER application and its related infrastructure (hereinafter referred to as the “Application”), developed by Hitendra Singh Shaktawat and Manan Arora (hereinafter referred to as the “Service Provider”) as a commercial service. This service is provided “AS IS.”
                                </p>
                                <p>
                                    By making a booking through the Application, you agree to the terms below.
                                </p>
                            </LegalSection>

                            <LegalSection number="02" title="Booking Confirmation">
                                <p>
                                    A booking is considered confirmed only after successful payment of the required advance amount through the Application.
                                </p>
                                <p>
                                    All bookings are subject to venue availability and respective venue policies.
                                </p>
                            </LegalSection>

                            <LegalSection number="03" title="User-Initiated Cancellations">
                                <h3 className="text-xl font-bold text-white mb-4">A. Full Refund Eligibility</h3>
                                <p>
                                    Users are eligible for a 100% refund of the advance amount paid if the cancellation request is made at least 12 (twelve) hours prior to the scheduled booking time.
                                </p>
                                <h3 className="text-xl font-bold text-white mb-4 mt-8">B. No Refund Eligibility</h3>
                                <p>
                                    If a cancellation request is made less than 12 (twelve) hours before the scheduled booking time, no refund shall be issued.
                                </p>
                                <p>
                                    The advance amount will be retained as a slot-blocking and operational fee.
                                </p>
                            </LegalSection>

                            <LegalSection number="04" title="No-Show Policy">
                                <p>
                                    If a user fails to attend the booking and does not cancel at least 12 hours prior to the scheduled time, the booking shall be treated as a No-Show, and no refund shall be issued.
                                </p>
                            </LegalSection>

                            <LegalSection number="05" title="Venue-Initiated Cancellations">
                                <p>
                                    If a booking is cancelled by the venue due to operational issues, maintenance, force majeure events, or unforeseen circumstances, the user shall be entitled to a 100% refund, irrespective of timing.
                                </p>
                            </LegalSection>

                            <LegalSection number="06" title="Refund Processing">
                                <p>
                                    Approved refunds shall be processed to the original payment method within 5–7 business days from the date of approval.
                                </p>
                                <p>
                                    Refund timelines may vary depending on the bank, UPI provider, or payment gateway. HYPER shall not be liable for delays caused by third-party financial institutions.
                                </p>
                            </LegalSection>

                            <LegalSection number="07" title="Payment Gateway & Disputes">
                                <p>
                                    Payments are processed via secure third-party payment providers (including but not limited to Razorpay, UPI, and partner banks).
                                </p>
                                <p>
                                    In case of chargebacks or disputes initiated through banks or card providers, HYPER reserves the right to:
                                </p>
                                <BulletList items={[
                                    "Temporarily suspend the user account during investigation",
                                    "Recover applicable chargeback-related fees",
                                    "Restrict future bookings"
                                ]} />
                                <p>
                                    Fraudulent refund claims may result in permanent suspension.
                                </p>
                            </LegalSection>

                            <LegalSection number="08" title="Non-Refundable Scenarios">
                                <p>
                                    Refunds will not be provided for:
                                </p>
                                <BulletList items={[
                                    "Late arrivals",
                                    "Reduced play time",
                                    "Booking errors made by the user",
                                    "Violations of venue rules",
                                    "Dissatisfaction with venue facilities (venue-specific policies apply)"
                                ]} />
                            </LegalSection>

                            <LegalSection number="09" title="Policy Updates">
                                <p>
                                    HYPER reserves the right to modify this policy at any time. Updates will be reflected within the Application. Continued use constitutes acceptance of the revised policy.
                                </p>
                            </LegalSection>

                            <LegalSection number="10" title="Contact for Refund Queries">
                                <p>
                                    For refund-related concerns, please contact:
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Email Support</div>
                                        <div className="text-lg md:text-xl font-black text-white break-all">gethyperindia@gmail.com</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Phone Number</div>
                                        <div className="text-lg md:text-xl font-black text-white">+91 7678457527</div>
                                    </div>
                                </div>
                            </LegalSection>

                        </div>
                    </GlassCard>
                </motion.div>

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
                        {/* Shimmer Effect */}
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

export default RefundPolicy;
