import React from "react";
import useSeo from "../hooks/useSeo";
import { seoFor } from "../lib/schema";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";

const TermsConditions = () => {

  useSeo(seoFor("/terms-conditions"));

  return (
    <section className="slg-light slg-section-tight">
      

      <div className="slg-legal mx-auto px-6">

        {/* Header */}
        <Reveal as="div"
          className="text-center mb-14"
        >
          <span className="slg-chip mb-6">
            Terms & Conditions
          </span>

          <h1 className="text-[1.875rem] font-extrabold text-[#142A47] sm:text-[2.25rem] lg:text-[2.75rem] mb-6">
            Terms &
            <span className="accent text-[#26A6AD]"> Conditions</span>
          </h1>

          <p className="mx-auto max-w-2xl text-[1.0625rem] leading-[1.7] text-[#475569]">
        Last updated: July 15, 2026. We are committed to protecting your data while delivering
            high-performance digital marketing and AI-powered solutions.
          </p>
        </Reveal>

        {/* Content */}
        <div className="space-y-12">

          {/* Section 1 */}
          <div>
            <h2>
              Terms & Conditions
            </h2>
            <p>
              These Terms and Conditions apply to all SMS messages sent and received as
              part of the A2P 10DLC messaging services provided by Sky Lift Group.
              Your use of this service constitutes acceptance of these terms.
            </p>
          </div>
          <div>
            <h2>
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
            <h2>
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
            <h2>
              Data Rates and Charges
            </h2>
            <p>
              Standard message and data rates may apply to any messages sent or received. Charges depend on your mobile carrier's terms.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2>
              Opt-Out Instructions
            </h2>
            <p>
              To stop receiving messages from Sky Lift Group, reply "STOP" to any message at any time. Reply "HELP" for assistance. This will unsubscribe you from SMS communications.
            </p>
          </div>

          <div>
            <h2>
              Message Delivery
            </h2>
            <p>
              Sky Lift Group does not guarantee message delivery without delays or failures due to factors beyond our control, including network or device limitations.
            </p>
          </div>
          <div>
            <h2>
              User Obligations
            </h2>
            <p>
              Users agree to comply with all applicable laws and must not use the messaging service for offensive, illegal, harmful, or harassing communications.
            </p>
          </div>
          <div>
            <h2>
              Compliance with Laws
            </h2>
            <p>
              The service must be used in compliance with all relevant privacy, telecommunications, and commercial communication laws.
            </p>
          </div>
          <div>
            <h2>
              Changes to Terms and Conditions
            </h2>
            <p>
              Sky Lift LLC reserves the right to update these Terms and Conditions at any time. Updates will be communicated via the website or direct notice where possible.
            </p>
          </div>
          <div>
            <h2>
              Contact Information
            </h2>
            <p >
              For questions regarding these Terms and Conditions, contact:
            </p>

            <div className="mt-4">
              <div>Sky Lift LLC</div>

              <div className="flex items-center gap-2">
                <Mail className="text-[#1C8A90]" size={18} />

                <a href="mailto:hello@skyliftgroup.com"
                  className="hover:text-[#1C8A90]"
                >
                  hello@skyliftgroup.com
                </a>
              </div>
            </div>

          </div>
        </div>
        <Reveal as="div"
          className="text-center mt-24"
        >
          <h3 className="font-display text-[1.375rem] font-extrabold text-[#142A47] sm:text-[1.75rem] mb-8">
            Questions About Our Terms & Conditions?
          </h3>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Contact Sky Lift Group
          </Link>

        </Reveal>

      </div >
    </section >
  );
};

export default TermsConditions;
