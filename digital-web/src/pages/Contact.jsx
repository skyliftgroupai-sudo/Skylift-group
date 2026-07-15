import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SliderBar from "./Sliderbar";
import useSeo from "../hooks/useSeo";
import "flag-icons/css/flag-icons.min.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);


  useSeo({
    title: "Contact Us | Sky Lift Group – Get in Touch",
    description:
      "Get in touch with Sky Lift Group. Contact us for inquiries about digital marketing, SEO, web design, PPC, and social media services to grow your business.",
    canonical: "https://www.skyliftgroup.com/contact"
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/contact.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Let's Start a Conversation

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          Have a project in mind? Send us a message and our team will get back to you shortly.
        </motion.p>
      </section>
      {/* <SliderBar /> */}
      {/* FORM + INFO SECTION */}
      <section className="py-20 bg-[#0a0a0a] text-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* INFO CARDS */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: "Email Us",
                  lines: ["info@skyliftgroup.com"],
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: "Location",
                  lines: [
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-red-500"></i>
                      United States Of America
                    </div>,
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-blue-500"></i>
                      Canada
                    </div>,
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-green-500"></i>
                      Australia
                    </div>,
                  ],
                },
                {
                  icon: <Clock className="h-6 w-6 text-white" />,
                  title: "Business Hours",
                  lines: ["Mon - Fri: 9AM - 5PM (est)", "Sat - Sun: Closed"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-[#111111] shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#00A693] shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">{item.title}</h3>
                      {item.lines.map((l, idx) => (
                        <p key={idx} className="text-sm text-gray-300">{l}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >

              <div className="relative w-full h-[850px] rounded-lg overflow-hidden">

                {/* Loader */}
                {loading && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-[#111111] z-10 transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="flex flex-col items-center gap-3">

                      {/* Spinner */}
                      <div className="w-10 h-10 border-4 border-[#c1a944] border-t-transparent rounded-full animate-spin"></div>

                      {/* Text */}
                      <p className="text-gray-300 text-sm">Loading form...</p>
                    </div>
                  </div>
                )}

                {/* Iframe */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/J6Gtz1pzBFNFDvoMGV05"
                  className="w-full h-full border-none"
                  title="Form"
                  onLoad={() => setLoading(false)}
                />

              </div>


            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
