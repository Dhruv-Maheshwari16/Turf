import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserX, Trash2, ShieldAlert, Clock4, Headset, ShieldCheck, ArrowLeft } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const Section = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group box-border"
  >
    <GlassCard className="p-8 hover:border-white/20 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-white gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        {children}
      </div>
    </GlassCard>
  </motion.div>
);

const DeleteAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20 px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Delete Your <span className="gradient-text">Hyper Account</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This page explains how users can delete their Hyper account and how their data is handled after deletion.
          </p>
        </motion.div>

        <div className="grid gap-8">
          <Section title="How to Delete Your Account" icon={UserX}>
            <p>You can delete your account directly from within the Hyper app by following these steps:</p>
            <ul className="space-y-3 ml-2">
              {[
                "Open the Hyper app",
                "Log in to your account",
                "Navigate to the Profile tab",
                "Go to Support Section",
                "Navigate to Help & Support button",
                "Scroll to the bottom of the Help & Support page",
                "Select <span className='text-white font-semibold'>Click here</span>",
                "Scroll down on the Warning popup",
                "Confirm the deletion by clicking on <span className='text-white font-semibold'>Proceed with Deletion</span>"
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: step }} />
                </li>
              ))}
            </ul>
            <p className="mt-4 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm italic">
              Once confirmed, your account deletion request is processed automatically.
            </p>
          </Section>

          <Section title="Data That Is Deleted" icon={Trash2}>
            <p>After account deletion, the following personal data is permanently removed:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {['Name', 'Email address', 'Phone number', 'Profile information', 'Authentication credentials'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              This ensures your identity is no longer associated with the app.
            </p>
          </Section>

          <Section title="Data That Is Retained (Anonymized)" icon={ShieldAlert}>
            <p>For official, legal, and accounting purposes, certain records are retained in an anonymized form:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span><span className="text-white font-semibold">Booking history</span> (with all personal identifiers removed)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span><span className="text-white font-semibold">Transaction references</span> required for compliance</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              These records cannot be used to identify you and are not linked to your deleted account.
            </p>
          </Section>

          <Section title="Deletion Timeline" icon={Clock4}>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400/80 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <p>Account deletion starts immediately after confirmation</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400/80 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <p>Personal data is erased within 7 days</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400/80 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                <p>Anonymized booking and transaction records are retained only as required by applicable laws</p>
              </li>
            </ul>
          </Section>

          <Section title="Support" icon={Headset}>
            <p>If you experience any issues with account deletion, please contact:</p>
            <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:gethyperindia@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">gethyperindia@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">App Name:</span>
                <span className="text-white font-semibold">Hyper</span>
              </div>
            </div>
          </Section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12"
          >
            <GlassCard className="p-8 text-center transition-all duration-300 hover:border-white/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <ShieldCheck className="text-indigo-400" size={28} strokeWidth={1.5} />
                <h3 className="text-xl font-bold transition-colors duration-500 group-hover:text-indigo-400">Privacy Assurance</h3>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Hyper is committed to protecting user privacy. Retained anonymized data is used strictly for compliance and operational reporting and cannot be traced back to an individual user.
              </p>
            </GlassCard>
          </motion.div>
        </div>

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

export default DeleteAccount;
