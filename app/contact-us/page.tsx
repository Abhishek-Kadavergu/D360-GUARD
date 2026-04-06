"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 relative z-[20]">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
          </motion.div>

          <motion.h2
            variants={slideInFromLeft(0.3)}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-white mb-3 sm:mb-4"
          >
            Ready to Secure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI Workflows?
            </span>
          </motion.h2>

          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-gray-400 text-sm sm:text-base text-center max-w-md px-2"
          >
            Fill out the form below and our team will reach out to schedule a
            personalized demo.
          </motion.p>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-5 sm:p-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md flex items-start gap-3 sm:gap-4"
          >
            <CheckCircleIcon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold text-base sm:text-lg">
                Thank you for reaching out!
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                We&apos;ve received your request. Our team will get back to you
                within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6"
        >
          {/* Gradient glow accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-300"
              >
                First Name <span className="text-purple-400">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-300"
              >
                Last Name <span className="text-purple-400">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Work Email <span className="text-purple-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
            />
          </div>

          {/* Company + Job Title Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-gray-300"
              >
                Company <span className="text-purple-400">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="jobTitle"
                className="text-sm font-medium text-gray-300"
              >
                Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="CTO"
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your use case, team size, or any specific requirements..."
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-[#0a0520] border border-[#7042f83b] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none text-sm sm:text-base"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-3.5 px-6 button-primary text-white font-semibold rounded-lg text-sm sm:text-base shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Request a Demo"
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
            By submitting, you agree to our privacy policy. We&apos;ll never
            share your data.
          </p>
        </motion.form>
      </div>
    </main>
  );
}
