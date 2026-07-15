// const Schedule = () => {
//   return (
//     <section
//       style={{
//         backgroundColor: "#000",
//         minHeight: "100vh",
//         padding: "80px 20px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1000px",
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         {/* Heading */}
//         <h1
//           style={{
//             color: "#fff",
//             fontSize: "40px",
//             marginBottom: "15px",
//           }}
//         >
//           Schedule a Meeting with
//         </h1>

//         <h2
//           style={{
//             color: "#00A693",
//             fontSize: "36px",
//             marginBottom: "20px",
//             fontWeight: "bold",
//           }}
//         >
//           Sky Lift Group
//         </h2>

//         <p
//           style={{
//             color: "#ccc",
//             marginBottom: "50px",
//             fontSize: "18px",
//           }}
//         >
//           Select a time that works best for you. We look forward to connecting.
//         </p>

//         {/* Calendar Container */}
//         <div
//           style={{
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 0 30px rgba(0, 166, 147, 0.3)",
//             border: "2px solid #00A693",
//             backgroundColor: "#111",
//             padding: "10px",
//           }}
//         >
//           <iframe
//             src="https://api.leadconnectorhq.com/widget/booking/Mi5gk5QCFKULntPciL7d"
//             style={{
//               width: "100%",
//               height: "900px",
//               border: "none",
//               borderRadius: "15px",
//               backgroundColor: "#fff",
//             }}
//             scrolling="no"
//             title="Sky Lift Group Appointment Booking"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Schedule;



import React, { useState } from "react";
import { motion } from "framer-motion";

const Schedule = () => {
  const [loading, setLoading] = useState(true);

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
          Fill out the form below and our team will get back to you shortly.
        </p>

        {/* FORM SECTION */}
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
              height: "850px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0, 166, 147, 0.3)",
              border: "2px solid #00A693",
              backgroundColor: "#111",
            }}
          >
            {/* Loader */}
            {loading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#111111",
                  zIndex: 10,
                  transition: "opacity 0.5s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {/* Spinner */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "4px solid #00A693",
                      borderTop: "4px solid transparent",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>

                  {/* Text */}
                  <p style={{ color: "#ccc", fontSize: "14px" }}>
                    Loading form...
                  </p>
                </div>
              </div>
            )}

            {/* Iframe Form */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/J6Gtz1pzBFNFDvoMGV05"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "#fff",
              }}
              title="Sky Lift Form"
              onLoad={() => setLoading(false)}
            />
          </div>
        </motion.div>
      </div>

      {/* Spinner Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Schedule;