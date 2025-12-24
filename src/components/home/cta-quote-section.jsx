"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle, Star } from "lucide-react";

const CTAQuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    stoneInterest: "",
    message: "",
    timeline: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const projectTypes = [
    "Kitchen Renovation",
    "Bathroom Remodel",
    "Flooring Installation",
    "Commercial Project",
    "Outdoor Application",
    "Custom Design",
    "Other"
  ];

  const stoneTypes = [
    "Marble",
    "Granite",
    "Quartzite",
    "Travertine",
    "Limestone",
    "Onyx",
    "Not Sure Yet"
  ];

  const timelines = [
    "ASAP",
    "Within 1 Month",
    "1-3 Months",
    "3-6 Months",
    "6+ Months",
    "Just Planning"
  ];

  const benefits = [
    "Free consultation with stone experts",
    "Personalized stone recommendations",
    "Detailed project timeline and pricing",
    "Access to exclusive stone varieties",
    "Professional installation guidance"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert guidance and a personalized quote for your stone project. 
            Our specialists are here to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Get Your Free Quote
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  />

                  {/* Project Type */}
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-900">Select Project Type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} className="text-gray-900">
                        {type}
                      </option>
                    ))}
                  </select>

                  {/* Stone Interest */}
                  <select
                    name="stoneInterest"
                    value={formData.stoneInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-900">Stone Type Interest</option>
                    {stoneTypes.map((type, index) => (
                      <option key={index} value={type} className="text-gray-900">
                        {type}
                      </option>
                    ))}
                  </select>

                  {/* Timeline */}
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="" className="text-gray-900">Project Timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline} className="text-gray-900">
                        {timeline}
                      </option>
                    ))}
                  </select>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell us about your project vision, space dimensions, or any specific requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-ring focus:border-transparent backdrop-blur-sm resize-none"
                  ></textarea>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Get My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-gray-300 mb-4">
                    Your request has been submitted. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Benefits & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* What You Get */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-4">What You Get:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-4">Prefer to Talk?</h4>
              <div className="space-y-4">
                <motion.a
                  href="tel:+1-800-MADHAV"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Call Us Now</div>
                    <div className="text-sm text-gray-300">1-800-MADHAV (623-4281)</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:quotes@madhavsurfaces.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm text-gray-300">quotes@madhavsurfaces.com</div>
                  </div>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 w-full"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm text-gray-300">Chat with our experts</div>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-lg font-bold text-primary">4.9</span>
                  </div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            No obligation quotes. Professional consultation. Competitive pricing. 
            Join thousands of satisfied customers who chose Madhav Surfaces for their stone projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAQuoteSection;
