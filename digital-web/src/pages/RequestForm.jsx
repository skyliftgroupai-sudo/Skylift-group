import { useState } from "react";
import { motion } from "framer-motion";

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
    service: "",
    description: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Our team will contact you soon.");
    setFormData({
      businessName: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      website: "",
      service: "",
      description: "",
      agree: false
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Request a Free Quote
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill out the form below and our team at <strong>Sky Lift Group</strong> will craft a personalized strategy for your business.
        </p>
      </div>

      <motion.form
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6 max-w-3xl mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website URL"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
          >
            <option value="">Select Service</option>
            <option value="SEO">SEO</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Paid Advertising">Paid Advertising</option>
            <option value="Full Digital Strategy">Full Digital Strategy</option>
          </select>
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your requirements..."
          rows="4"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#00A693] focus:outline-none w-full"
        />

        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
            className="w-5 h-5 text-[#00A693] border-gray-300 rounded focus:ring-2 focus:ring-[#00A693]"
          />
          <span className="text-gray-700 text-sm">
            I agree to be contacted by the Sky Lift Group team regarding my request.
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-[#00A693] hover:bg-[#00947F] text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
        >
          Submit Request
        </button>

        <p className="text-gray-500 text-sm mt-2">
          Our team will review your information and get back to you promptly with a custom digital marketing plan.
        </p>
      </motion.form>
    </section>
  );
}
