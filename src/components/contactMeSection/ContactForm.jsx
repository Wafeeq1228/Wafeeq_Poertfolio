// npm install @formspree/react
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdkdydly");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    phone: false,
    organization: false,
    message: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile numbers starting 6-9, total 10 digits

  useEffect(() => {
    setValidations({
      name: formData.name.trim().length > 0,
      email: emailRegex.test(formData.email),
      phone: phoneRegex.test(formData.phone),
      organization: formData.organization.trim().length > 0,
      message: formData.message.trim().length > 0,
    });
  }, [formData]);

  const isFormValid = Object.values(validations).every(Boolean);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {state.succeeded && (
        <p className="text-green-400 mb-4">✅ Message Sent Successfully!</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <div className="relative">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="h-12 w-full rounded-lg bg-lightBrown px-2 text-white focus:outline-none"
          />
          {validations.name && (
            <FaCheckCircle className="absolute right-3 top-3 text-green-400" />
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full rounded-lg bg-lightBrown px-2 text-white focus:outline-none"
          />
          {validations.email && (
            <FaCheckCircle className="absolute right-3 top-3 text-green-400" />
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Your Mobile Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-lg bg-lightBrown px-2 text-white focus:outline-none"
          />
          {validations.phone && (
            <FaCheckCircle className="absolute right-3 top-3 text-green-400" />
          )}
        </div>

        {/* Organization */}
        <div className="relative">
          <input
            id="organization"
            type="text"
            name="organization"
            placeholder="Your Organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="h-12 w-full rounded-lg bg-lightBrown px-2 text-white focus:outline-none"
          />
          {validations.organization && (
            <FaCheckCircle className="absolute right-3 top-3 text-green-400" />
          )}
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="9"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg bg-lightBrown p-2 text-white focus:outline-none"
          />
          {validations.message && (
            <FaCheckCircle className="absolute right-3 top-3 text-green-400" />
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || state.submitting}
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 ${
            isFormValid
              ? "bg-cyan hover:bg-darkCyan"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
