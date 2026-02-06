import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const Section = ({ title, children, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group box-border"
  >
    <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
    <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-2xl font-bold text-white gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  </motion.div>
);

const DeleteAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-4 relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
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
          <Section title="How to Delete Your Account" icon="🗑️">
            <p>You can delete your account directly from within the Hyper app by following these steps:</p>
            <ol className="list-decimal list-inside space-y-3 ml-2">
              <li>Open the Hyper app</li>
              <li>Log in to your account</li>
              <li>Navigate to the Profile tab</li>
              <li>Scroll to the bottom of the Profile screen</li>
              <li>Select <span className="text-white font-semibold">Delete Account</span></li>
              <li>Confirm the deletion when prompted</li>
            </ol>
            <p className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm italic">
              Once confirmed, your account deletion request is processed automatically.
            </p>
          </Section>

          <Section title="Data That Is Deleted" icon="📄">
            <p>After account deletion, the following personal data is permanently removed:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {['Name', 'Email address', 'Phone number', 'Profile information', 'Authentication credentials'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              This ensures your identity is no longer associated with the app.
            </p>
          </Section>

          <Section title="Data That Is Retained (Anonymized)" icon="📘">
            <p>For official, legal, and accounting purposes, certain records are retained in an anonymized form:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span><span className="text-white font-semibold">Booking history</span> (with all personal identifiers removed)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span><span className="text-white font-semibold">Transaction references</span> required for compliance</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              These records cannot be used to identify you and are not linked to your deleted account.
            </p>
          </Section>

          <Section title="Deletion Timeline" icon="⏱️">
            <ul className="space-y-4">
              <li className="flex gap-4 items-center">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">1</div>
                <p>Account deletion starts immediately after confirmation</p>
              </li>
              <li className="flex gap-4 items-center">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">2</div>
                <p>Personal data is erased within 7 days</p>
              </li>
              <li className="flex gap-4 items-center">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">3</div>
                <p>Anonymized booking and transaction records are retained only as required by applicable laws</p>
              </li>
            </ul>
          </Section>

          <Section title="Support" icon="📞">
            <p>If you experience any issues with account deletion, please contact:</p>
            <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:support@gethyper.in" className="text-blue-400 hover:text-blue-300 transition-colors">support@gethyper.in</a>
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
            className="mt-12 p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent text-center"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">🔐</span> Privacy Assurance
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Hyper is committed to protecting user privacy. Retained anonymized data is used strictly for compliance and operational reporting and cannot be traced back to an individual user.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DeleteAccount;
