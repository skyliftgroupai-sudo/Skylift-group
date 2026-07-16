import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import SliderBar from "./Sliderbar";
import useSeo from "../hooks/useSeo";
import "flag-icons/css/flag-icons.min.css";

const Contact = () => {


  useSeo({
    title: "Contact Us | Sky Lift Group – Get in Touch",
    description:
      "Get in touch with Sky Lift Group. Contact us for inquiries about digital marketing, SEO, web design, PPC, and social media services to grow your business.",
    canonical: "https://www.skyliftgroup.com/contact"
  });


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
                  lines: ["hello@skyliftgroup.com"],
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
  ><div className="relative w-full h-full min-h-[600px] rounded-lg overflow-hidden bg-[#111111] shadow-md flex flex-col items-center justify-center text-center p-10 md:p-16"
     >
  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#00A693] shadow-md mb-6">
    <MessageCircle className="h-8 w-8 text-white" />
  </div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Talk With Our AI Business Assistant</h2>
    <p className="text-gray-300 text-base md:text-lg max-w-xl mb-3">Get instant answers about our services, pricing, websites, AI automation, Google Business Profile optimization, SEO, and marketing solutions.</p>
    <p className="text-gray-300 text-base md:text-lg max-w-xl mb-3">Our AI Assistant is available 24/7 to answer your questions, qualify your needs, and help you get started.</p>
    <p className="text-[#00A693] font-semibold text-base md:text-lg">Click the chat icon in the bottom-right corner to begin.</p>
  </div>
</motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
