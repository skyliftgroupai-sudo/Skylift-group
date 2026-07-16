import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Schedule = () => {
  return (
    <section
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#00A693",
            fontSize: "36px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Sky Lift Group
        </h2>

        <p
          style={{
            color: "#ccc",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Ready to book your appointment? Our AI Assistant makes it quick and easy.
        </p>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0, 166, 147, 0.3)",
              border: "2px solid #00A693",
              backgroundColor: "#111",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 40px",
            }}
          >
            <div
              style={{
                height: "64px",
                width: "64px",
                borderRadius: "50%",
                backgroundColor: "#00A693",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <MessageCircle size={32} color="#fff" />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "26px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Book Your Appointment with Our AI Assistant
            </h3>
            <p
              style={{
                color: "#ccc",
                fontSize: "16px",
                maxWidth: "560px",
                marginBottom: "8px",
              }}
            >
              Our AI Assistant will help you find the perfect time and schedule your appointment in just a few messages.
            </p>
            <p
              style={{
                color: "#00A693",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Click the chat icon in the bottom-right corner to get started.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
