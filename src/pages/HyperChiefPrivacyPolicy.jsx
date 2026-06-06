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

const HyperChiefPrivacyPolicy = () => {
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
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 pb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">
            HYPER CHIEFS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 md:p-20 rounded-[3rem] border-white/5 bg-black/40">
            <div className="prose prose-invert max-w-none">

              <LegalSection number="01" title="Privacy Policy for HYPER Chiefs">
                <p>
                  This Privacy Policy applies to the HYPER Chiefs application and related services (hereinafter referred to as the "Application"), developed and operated by HYPER.
                </p>
                <p>
                  HYPER Chiefs is a venue management platform intended for venue owners, managers, and authorized staff to manage bookings, availability, customer reservations, payments, operational workflows, and business analytics.
                </p>
                <p>
                  By accessing or using the Application, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
                <p className="text-white font-bold tracking-widest mt-4">
                  Effective Date: June 10, 2026
                </p>
              </LegalSection>

              <LegalSection number="02" title="Information We Collect">
                <p>
                  The Application may collect information including:
                </p>
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Account Information</h4>
                    <BulletList items={[
                      "Full Name",
                      "Email Address",
                      "Mobile Number",
                      "Username and Login Credentials",
                      "Designation or Role"
                    ]} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Venue Information</h4>
                    <BulletList items={[
                      "Venue Name",
                      "Venue Address",
                      "Venue Contact Information",
                      "Venue Pricing",
                      "Operating Hours",
                      "Slot Availability",
                      "Venue Descriptions",
                      "Promotional Information"
                    ]} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Booking Information</h4>
                    <BulletList items={[
                      "Reservation Details",
                      "Booking Status",
                      "Customer Booking Information",
                      "Check-In Records",
                      "Refund and Cancellation Records",
                      "Payment Status"
                    ]} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technical Information</h4>
                    <BulletList items={[
                      "IP Address",
                      "Device Information",
                      "Operating System",
                      "Application Version",
                      "Diagnostic Information",
                      "Crash Logs",
                      "Usage Data"
                    ]} />
                  </div>
                </div>
              </LegalSection>

              <LegalSection number="03" title="Analytics & Reporting">
                <p>
                  HYPER Chiefs provides venue owners with business analytics and operational reporting tools.
                </p>
                <p className="font-semibold text-white mt-4">
                  Analytics may include:
                </p>
                <BulletList items={[
                  "Booking Trends",
                  "Occupancy Rates",
                  "Peak-Hour Utilization",
                  "Revenue Summaries",
                  "Customer Booking Patterns",
                  "Venue Performance Metrics",
                  "Historical Booking Reports"
                ]} />
                <p className="mt-6">
                  These insights help venue partners improve operational efficiency, optimize availability, and make informed business decisions.
                </p>
                <p className="font-semibold text-white mt-6">
                  We may also use aggregated and anonymized information for:
                </p>
                <BulletList items={[
                  "Product Improvements",
                  "Platform Optimization",
                  "Market Research",
                  "Business Intelligence",
                  "Service Development"
                ]} />
                <p className="mt-6 text-sm text-gray-400 italic">
                  Aggregated information does not identify individual users.
                </p>
              </LegalSection>

              <LegalSection number="04" title="How We Use Information">
                <p>
                  Information collected through HYPER Chiefs may be used to:
                </p>
                <BulletList items={[
                  "Create and manage venue accounts",
                  "Process bookings and reservations",
                  "Manage slot availability",
                  "Enable customer check-ins",
                  "Generate analytics and reports",
                  "Provide customer and venue support",
                  "Improve platform functionality",
                  "Monitor application performance",
                  "Detect fraud and unauthorized activity",
                  "Comply with legal obligations",
                  "Develop new platform features"
                ]} />
              </LegalSection>

              <LegalSection number="05" title="Customer Information Access">
                <p>
                  Authorized venue owners and venue staff may access customer booking information necessary to:
                </p>
                <BulletList items={[
                  "Verify reservations",
                  "Manage bookings",
                  "Process check-ins",
                  "Provide booked services",
                  "Resolve booking-related issues"
                ]} />
                <p className="mt-6 border-l-2 border-indigo-500 pl-4 py-2 italic text-gray-300 bg-white/5 rounded-r-xl">
                  Venue personnel are prohibited from selling, distributing, copying, or misusing customer information obtained through the Application.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Payments & Financial Information">
                <p>
                  Payments processed through HYPER are handled by secure third-party payment providers, including Razorpay and associated banking partners.
                </p>
                <p className="font-semibold text-white mt-4">
                  HYPER Chiefs does not store:
                </p>
                <BulletList items={[
                  "Credit Card Numbers",
                  "Debit Card Numbers",
                  "CVV Information",
                  "UPI PINs"
                ]} />
                <p className="font-semibold text-white mt-6">
                  We may retain:
                </p>
                <BulletList items={[
                  "Transaction References",
                  "Order IDs",
                  "Settlement Information",
                  "Payment Status Information"
                ]} />
                <p className="mt-6 text-sm text-gray-400">
                  for accounting, dispute resolution, settlement processing, and compliance purposes.
                </p>
              </LegalSection>

              <LegalSection number="07" title="Data Sharing">
                <p>
                  We do not sell personal information.
                </p>
                <p className="font-semibold text-white mt-4">
                  Information may be shared only:
                </p>
                <div className="space-y-6 mt-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-1">With Authorized HYPER Personnel</h4>
                    <p className="text-sm text-gray-400">To operate, maintain, and improve services.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-1">With Venue Personnel</h4>
                    <p className="text-sm text-gray-400">To facilitate bookings and operational workflows.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-2">With Service Providers</h4>
                    <p className="text-sm text-gray-400 mb-2">Including:</p>
                    <BulletList items={[
                      "Razorpay",
                      "Cloud Hosting Providers",
                      "Analytics Providers",
                      "Notification Services",
                      "Technical Support Providers"
                    ]} />
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-1">When Required By Law</h4>
                    <p className="text-sm text-gray-400">To comply with legal obligations, government requests, court orders, or regulatory requirements.</p>
                  </div>
                </div>
              </LegalSection>

              <LegalSection number="08" title="Location Data">
                <p>
                  HYPER Chiefs does not collect precise location data from venue owners or staff unless explicitly required by a future feature and consent is obtained.
                </p>
              </LegalSection>

              <LegalSection number="09" title="Data Security">
                <p>
                  We implement commercially reasonable security measures designed to protect information against:
                </p>
                <BulletList items={[
                  "Unauthorized Access",
                  "Disclosure",
                  "Alteration",
                  "Destruction",
                  "Misuse"
                ]} />
                <p className="font-semibold text-white mt-6">
                  Security measures may include:
                </p>
                <BulletList items={[
                  "Secure Authentication",
                  "Encrypted Data Transmission",
                  "Access Controls",
                  "Infrastructure Monitoring"
                ]} />
                <p className="mt-6 text-sm text-gray-400 italic">
                  However, no method of electronic storage or transmission can be guaranteed to be completely secure.
                </p>
              </LegalSection>

              <LegalSection number="10" title="Data Retention">
                <p>
                  Information may be retained for as long as necessary to:
                </p>
                <BulletList items={[
                  "Operate the platform",
                  "Maintain booking records",
                  "Generate business reports",
                  "Resolve disputes",
                  "Meet legal requirements",
                  "Support accounting and auditing obligations"
                ]} />
                <p className="mt-6">
                  Where appropriate, information may be anonymized or aggregated.
                </p>
              </LegalSection>

              <LegalSection number="11" title="Account & Data Deletion">
                <p>
                  Venue owners may request deletion of their account and associated personal information by contacting:
                </p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl my-4">
                  <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-1">Email Support</div>
                  <div className="text-sm md:text-lg font-black text-indigo-400">gethyperindia@gmail.com</div>
                </div>
                <p>
                  Upon verification of the request, data will be deleted within a reasonable timeframe unless retention is required by:
                </p>
                <BulletList items={[
                  "Applicable Laws",
                  "Fraud Prevention",
                  "Accounting Requirements",
                  "Ongoing Disputes",
                  "Regulatory Compliance"
                ]} />
                <p className="mt-6 text-sm text-gray-400">
                  Certain anonymized analytics information may be retained.
                </p>
              </LegalSection>

              <LegalSection number="12" title="Third-Party Services">
                <p>
                  The Application may integrate with:
                </p>
                <BulletList items={[
                  "Razorpay",
                  "Firebase",
                  "Google Analytics",
                  "Cloud Hosting Services",
                  "Notification Providers",
                  "Other Infrastructure Providers"
                ]} />
                <p className="mt-6">
                  These services operate under their own privacy policies.
                </p>
              </LegalSection>

              <LegalSection number="13" title="Children's Privacy">
                <p>
                  HYPER Chiefs is intended exclusively for:
                </p>
                <BulletList items={[
                  "Venue Owners",
                  "Venue Managers",
                  "Authorized Business Personnel"
                ]} />
                <p className="mt-6">
                  The Application is not intended for children under the age of 18.
                </p>
              </LegalSection>

              <LegalSection number="14" title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy periodically.
                </p>
                <p>
                  Changes become effective upon publication within the Application, website, or official communication channels.
                </p>
                <p>
                  Continued use of the Application after changes constitutes acceptance of the revised Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection number="15" title="Your Consent">
                <p>
                  By using HYPER Chiefs, you consent to the collection, use, storage, and processing of information as described in this Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection number="16" title="Contact Us">
                <p>
                  If you have any questions regarding this Privacy Policy, please contact:
                </p>
                <p className="text-white font-bold text-lg mb-4">HYPER</p>
                <div className="space-y-4 pt-2">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Email Support</div>
                    <div className="text-sm md:text-xl font-black text-white break-all">gethyperindia@gmail.com</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Website</div>
                    <a href="https://gethyper.in" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl font-black text-indigo-400 hover:text-indigo-300 transition-colors">https://gethyper.in</a>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em] mb-2">Phone Number</div>
                    <div className="text-sm md:text-xl font-black text-white">+91 7678457527</div>
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

export default HyperChiefPrivacyPolicy;
