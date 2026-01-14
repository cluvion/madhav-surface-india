"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Award,
  Shield,
  Leaf,
  Clock
} from "lucide-react";

const ComprehensiveFooter = () => {
  const quickLinks = [
    { name: "Our Story", href: "/about" },
    { name: "Stone Collections", href: "/collections" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "Design Services", href: "/design" },
    { name: "Installation", href: "/installation" },
    { name: "Maintenance", href: "/maintenance" }
  ];

  const products = [
    { name: "Marble", href: "/marble" },
    { name: "Granite", href: "/granite" },
    { name: "Quartzite", href: "/quartzite" },
    { name: "Travertine", href: "/travertine" },
    { name: "Limestone", href: "/limestone" },
    { name: "Onyx", href: "/onyx" }
  ];

  const resources = [
    { name: "Design Blog", href: "/blog" },
    { name: "Care Guide", href: "/care" },
    { name: "Technical Specs", href: "/specs" },
    { name: "CAD Downloads", href: "/downloads" },
    { name: "Sample Request", href: "/samples" },
    { name: "Trade Program", href: "/trade" }
  ];

  const support = [
    { name: "Contact Us", href: "/contact" },
    { name: "Get Quote", href: "/quote" },
    { name: "Find Installer", href: "/installers" },
    { name: "Warranty", href: "/warranty" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" }
  ];

  const certifications = [
    { name: "ISO 9001", icon: Award },
    { name: "LEED", icon: Leaf },
    { name: "CE Marking", icon: Shield },
    { name: "Green Certified", icon: Leaf }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Inspired with Design Updates
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest stone trends, design tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-4 sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Madhav Surfaces
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over 25 years, we've been crafting exceptional spaces with the world's
                finest natural stone. From quarry to installation, we ensure every project
                reflects our commitment to quality and sustainability.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Stone Avenue, Marble District, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">1-800-MADHAV (623-4281)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@madhavsurfaces.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Products */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2">
                {products.map((product, index) => (
                  <li key={index}>
                    <a
                      href={product.href}
                      className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-0"
        >
          <h4 className="text-lg font-semibold text-foreground mb-4 text-center">Visit Our Showroom</h4>
          <div className="h-80 max-w-8xl mx-auto rounded-2xl overflow-hidden bg-gray-800">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Stone Avenue, Marble District, NY 10001</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 overflow-hidden">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <p className="text-muted-foreground text-sm">Certified by:</p>
              <div className="flex gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg"
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                    <span className="text-xs text-muted-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400"
            >
              <span>© 2024 Madhav Surfaces. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-amber-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ComprehensiveFooter;
