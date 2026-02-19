import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GlassCard from './GlassCard';

const LegalSection = ({ title, children, number }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-lg">
        {number}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
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

const PrivacyPolicy = () => {
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
            Privacy Policy
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

              <LegalSection number="01" title="Privacy Policy for HYPER">
                <p>
                  This Privacy Policy applies to the HYPER application and its related infrastructure (hereinafter referred to as the “Application”), developed by Hitendra Singh Shaktawat and Manan Arora (hereinafter referred to as the “Service Provider”) as a commercial service. This service is provided “AS IS.”
                </p>
              </LegalSection>

              <LegalSection number="02" title="Information Collection and Use">
                <p>
                  The Application collects information when you download and use it. This information may include:
                </p>
                <BulletList items={[
                  "Your device’s Internet Protocol (IP) address",
                  "The pages of the Application that you visit, including the time and date of your visit",
                  "The time spent within the Application",
                  "The operating system used on your mobile device"
                ]} />
                <p>
                  We collect this information to create and manage your account, process bookings, communicate with you, provide customer support, improve performance, and ensure platform security.
                </p>
              </LegalSection>

              <LegalSection number="03" title="Personal Information">
                <p>
                  For an improved experience, we may ask you to provide certain personally identifiable information, including but not limited to:
                </p>
                <BulletList items={[
                  "Name",
                  "Email address",
                  "Contact number",
                  "Age",
                  "Gender"
                ]} />
                <p>
                  This information is retained and used in accordance with this Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection number="04" title="Payments & Financial Information">
                <p>
                  Payments are processed through secure third-party payment providers such as Razorpay, UPI, or partner banks. We do not store full card details on our servers.
                </p>
                <p>
                  We may store limited transaction-related information such as transaction history and Razorpay order IDs for payment verification, refunds, dispute resolution, and accounting purposes.
                </p>
                <p>
                  Certain booking details (such as name, contact number, and booking time) may be shared with the venue owner solely to fulfill your reservation.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Location Data & Usage">
                <p>
                  We collect approximate or precise location data only when you actively use location-based features (such as finding nearby venues). Location data is not collected in the background without your consent. You may disable location access at any time through your device settings.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Location Awareness Disclosure">
                <p>
                  HYPER collects location data to enable venue distance calculation, nearby venue discovery, and proximity-based suggestions only while the application is in use (foreground). Location data is not collected when the app is closed or running in the background.
                </p>
              </LegalSection>

              <LegalSection number="07" title="Use of Location Data">
                <BulletList items={[
                  "Geolocation Services: To provide personalized content, relevant recommendations, and location-based services",
                  "Analytics & Improvements: Aggregated and anonymized data helps analyze trends and improve app performance"
                ]} />
              </LegalSection>

              <LegalSection number="08" title="Analytics & App Activity">
                <p>
                  We may share anonymized or aggregated data with analytics providers such as Google Analytics, Firebase, or similar services to improve application performance, stability, and user experience.
                </p>
              </LegalSection>

              <LegalSection number="09" title="Third-Party Access">
                <p>
                  We may share your information with third parties only in the following circumstances:
                </p>
                <BulletList items={[
                  "When required by law or legal process",
                  "To protect our rights, user safety, or prevent fraud",
                  "With trusted service providers who process data on our behalf and are bound by confidentiality obligations"
                ]} />
              </LegalSection>

              <LegalSection number="10" title="Third-Party Services Used">
                <p>
                  The Application integrates with the following third-party services, which may process user data in accordance with their respective privacy policies:
                </p>
                <BulletList items={[
                  "Google Maps SDK – map display and distance calculations",
                  "Firebase / Google Sign-In – authentication, analytics, and infrastructure",
                  "Razorpay – secure payment processing and verification",
                  "Expo Framework – application updates, diagnostics, and performance monitoring"
                ]} />
              </LegalSection>

              <LegalSection number="11" title="Use of Artificial Intelligence">
                <p>
                  Any AI-based features within the Application process data only within our systems to provide recommendations and personalization. We do not sell or share personal data for AI training with third parties.
                </p>
              </LegalSection>

              <LegalSection number="12" title="Opt-Out Rights">
                <p>
                  You may stop all data collection by uninstalling the Application using standard uninstall procedures available on your device or app store. You may also opt out of marketing communications at any time by contacting us or adjusting your preferences within the Application.
                </p>
              </LegalSection>

              <LegalSection number="13" title="Data Retention & Account Deletion">
                <p>
                  We retain personal data as long as your account remains active.
                </p>
                <p>
                  Users can delete their account and all associated personal data directly within the Application’s Profile or Settings section, or by contacting us at gethyperindia@gmail.com. Upon request, data will be deleted within 30 days, except where retention is required by law.
                </p>
              </LegalSection>

              <LegalSection number="14" title="Children’s Privacy">
                <p>
                  The Application is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13. If such data is discovered, it will be deleted immediately.
                </p>
                <p>
                  If you believe a child has shared personal information with us, please contact gethyperindia@gmail.com.
                </p>
              </LegalSection>

              <LegalSection number="15" title="Security">
                <p>
                  We take reasonable physical, electronic, and procedural measures to protect personal information from unauthorized access, misuse, or disclosure.
                </p>
              </LegalSection>

              <LegalSection number="16" title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page. Continued use of the Application constitutes acceptance of the updated policy.
                </p>
                <p className="text-white font-bold tracking-widest mt-4">
                  Effective Date: January 3, 2026
                </p>
              </LegalSection>

              <LegalSection number="17" title="Your Consent">
                <p>
                  By using the Application, you consent to the collection and processing of your information as described in this Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection number="18" title="Contact Us">
                <p>
                  If you have any questions regarding this Privacy Policy, please contact us:
                </p>
                <div className="space-y-4 pt-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Email Support</div>
                    <div className="text-xl font-black text-white">gethyperindia@gmail.com</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Phone Number</div>
                    <div className="text-xl font-black text-white">+91 7678457527</div>
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

export default PrivacyPolicy;
