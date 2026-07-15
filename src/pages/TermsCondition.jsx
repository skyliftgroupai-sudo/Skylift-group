// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import useSeo from "../hooks/useSeo";

// const TermsConditions = () => {

//     const sections = [
//         {
//             title: "1. Acceptance of Terms",
//             content:
//                 "By accessing or using Sky Lift Group services, including AI chatbots, AI voice agents, automation systems, SEO, PPC, and web development, you agree to comply with these Terms & Conditions."
//         },
//         {
//             title: "2. Services Overview",
//             content:
//                 "Sky Lift Group provides digital marketing, AI automation, social media management, paid advertising, and custom web solutions designed to help businesses grow. Service scope and deliverables are defined in individual agreements."
//         },
//         {
//             title: "3. Client Responsibilities",
//             content:
//                 "Clients agree to provide accurate information, timely feedback, and necessary access to tools or platforms required to deliver services effectively."
//         },
//         {
//             title: "4. Payments & Billing",
//             content:
//                 "All services are subject to agreed pricing. Payments must be made according to the schedule defined in your contract. Delayed payments may result in service suspension."
//         },
//         {
//             title: "5. AI Systems Usage",
//             content:
//                 "Our AI Chatbots, AI Work Agents, and AI Voice systems are provided for lawful business purposes only. Misuse, unethical automation, or illegal activity is strictly prohibited."
//         },
//         {
//             title: "6. Intellectual Property",
//             content:
//                 "All content, designs, automation systems, and strategies developed by Sky Lift Group remain our intellectual property unless otherwise agreed in writing."
//         },
//         {
//             title: "7. Limitation of Liability",
//             content:
//                 "Sky Lift Group is not liable for indirect losses, platform algorithm changes, or third-party service interruptions that may impact marketing performance."
//         },
//         {
//             title: "8. Termination",
//             content:
//                 "Either party may terminate services according to the agreement terms. Outstanding balances remain payable upon termination."
//         },
//         {
//             title: "9. Policy Updates",
//             content:
//                 "We reserve the right to update these Terms & Conditions at any time. Continued use of services indicates acceptance of any modifications."
//         }
//     ];

//     useSeo({
//         title: "Terms & Conditions | Sky Lift Group – AI & Digital Services Agreement",
//         description:
//             "Review the Terms & Conditions for Sky Lift Group’s AI chatbots, automation systems, SEO, PPC, and digital marketing services.",
//         canonical: "https://www.skyliftgroup.com/terms-conditions"
//     });

//     return (
//         <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">

//             {/* Glow Background */}
//             <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#00A693]/20 rounded-full blur-[140px]"></div>
//             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00A693]/10 rounded-full blur-[120px]"></div>

//             <div className="relative max-w-6xl mx-auto px-6 z-10">

//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-24"
//                     initial={{ opacity: 0, y: -40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
//                         Terms & Conditions
//                     </span>

//                     <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//                         Clear Terms.
//                         <span className="bg-gradient-to-r from-[#00A693] to-teal-300 bg-clip-text text-transparent">
//                             {" "}Strong Partnerships.
//                         </span>
//                     </h1>

//                     <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
//                         These terms outline how Sky Lift Group delivers digital marketing,
//                         AI automation, and growth systems while ensuring transparency and accountability.
//                     </p>
//                 </motion.div>

//                 {/* Sections */}
//                 <div className="space-y-12">
//                     {sections.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             whileHover={{ y: -6 }}
//                             className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-lg transition-all duration-500 hover:border-[#00A693]/50 hover:shadow-[0_0_40px_#00A69340]"
//                         >
//                             {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#00A693] to-transparent rounded-l-3xl"></div> */}

//                             <h2 className="text-2xl font-semibold text-white mb-4">
//                                 {item.title}
//                             </h2>
//                             <p className="text-gray-400 leading-relaxed text-lg">
//                                 {item.content}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* CTA */}
//                 <motion.div
//                     className="text-center mt-24"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-3xl font-bold text-white mb-8">
//                         Need Clarification About Our Terms?
//                     </h3>

//                     <Link
//                         to="/contact"
//                         className="inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
//                     >
//                         Contact Sky Lift Group
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default TermsConditions;




import React from "react";
import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const TermsConditions = () => {

  useSeo({
    title: "Terms & Conditions | Sky Lift Group – AI & Digital Services Agreement",
    description:
      "Review the Terms & Conditions for Sky Lift Group’s AI chatbots, automation systems, SEO, PPC, and digital marketing services.",
    canonical: "https://www.skyliftgroup.com/terms-conditions"
  });

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 blur-3xl opacity-20"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10 text-gray-300">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
            Terms & Conditions
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms &
            <span className="text-[#00A693]"> Conditions</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg">
        Last updated: July 15, 2026. We are committed to protecting your data while delivering
            high-performance digital marketing and AI-powered solutions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Terms & Conditions
            </h2>
            <p>
              These Terms and Conditions apply to all SMS messages sent and received as
              part of the A2P 10DLC messaging services provided by Sky Lift Group.
              Your use of this service constitutes acceptance of these terms.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Age Restriction
            </h2>
            <p>
              You must be at least 18 years old to use our website, services, and to consent to
              receive SMS/text messages from Sky Lift Group. By using our services or opting in to
              receive messages, you represent that you are 18 years of age or older. We do not
              knowingly collect personal information from or provide services to individuals under
              the age of 18.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Messaging Consent
            </h2>
            <p>
              Messages sent by Sky Lift Group may include alerts, reminders, promotional offers,
              updates, and other relevant communications. Message frequency will vary based on user
              interaction and preferences.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Rates and Charges
            </h2>
            <p>
              Standard message and data rates may apply to any messages sent or received. Charges depend on your mobile carrier's terms.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Opt-Out Instructions
            </h2>
            <p>
              To stop receiving messages from Sky Lift Group, reply "STOP" to any message at any time. Reply "HELP" for assistance. This will unsubscribe you from SMS communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Message Delivery
            </h2>
            <p>
              Sky Lift Group does not guarantee message delivery without delays or failures due to factors beyond our control, including network or device limitations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Obligations
            </h2>
            <p>
              Users agree to comply with all applicable laws and must not use the messaging service for offensive, illegal, harmful, or harassing communications.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Compliance with Laws
            </h2>
            <p>
              The service must be used in compliance with all relevant privacy, telecommunications, and commercial communication laws.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to Terms and Conditions
            </h2>
            <p>
              Sky Lift LLC reserves the right to update these Terms and Conditions at any time. Updates will be communicated via the website or direct notice where possible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-400">
              For questions regarding these Terms and Conditions, contact:
            </p>

            <div className="mt-4 space-y-2 text-gray-300">
              <div>Sky Lift LLC</div>

              <div className="flex items-center gap-2">
                <Mail className="text-[#00A693]" size={18} />

                <a href="mailto:hello@skyliftgroup.com"
                  className="hover:text-[#00A693] transition-colors"
                >
                  hello@skyliftgroup.com
                </a>
              </div>
            </div>

          </div>
        </div>
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Questions About Our Terms & Conditions?
          </h3>

          <Link
            to="/contact"
            className="relative inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
          >
            Contact Sky Lift Group
          </Link>

        </motion.div>

      </div >
    </section >
  );
};

export default TermsConditions;
