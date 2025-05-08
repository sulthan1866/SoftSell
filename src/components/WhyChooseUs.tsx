import React from "react";
import { motion } from "framer-motion";
import { Gauge, Wallet, ShieldCheck, Headphones, CheckCircle } from "lucide-react";
import Testimonials from "./Testimonials";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Instant Valuation",
      description: "Get real-time license valuations based on current market trends using our AI-powered pricing engine.",
      icon: Gauge,
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      highlights: ["30-second valuation", "Market-based pricing", "No obligations"],
    },
    {
      title: "Fast Payments",
      description: "Receive your payment within 24 hours of license approval with multiple payout options available.",
      icon: Wallet,
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      highlights: ["Same-day processing", "Multiple payment methods", "No hidden fees"],
    },
    {
      title: "Secure Transfers",
      description: "We ensure safe and legal transfer of software licenses with proper documentation and verification.",
      icon: ShieldCheck,
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
      highlights: ["Encrypted transfers", "Legal compliance", "Verified buyers"],
    },
    {
      title: "24/7 Support",
      description: "Our support team is always ready to help you through the process with expert guidance.",
      icon: Headphones,
      color: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-600 dark:text-amber-400",
      highlights: ["Live chat support", "Dedicated agents", "Seller protection"],
    },
  ];

  // Testimonials data

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full mb-4">
            Trusted by Thousands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell?</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
           {` We've helped companies recover over $10M from unused software licenses with our secure and streamlined process.`}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map(({ title, description, icon: Icon, color, textColor, highlights }) => (
            <motion.div
              key={title}
              className="relative group"
              variants={itemVariants}
            >
              <div className="p-6 md:p-8 h-full border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className={`${color} ${textColor} w-14 h-14 flex items-center justify-center rounded-full mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
                
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 py-10 px-6 md:px-10 bg-blue-600 dark:bg-blue-800 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-blue-100 dark:text-blue-200">Licenses Sold</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">$10M+</p>
              <p className="text-blue-100 dark:text-blue-200">Paid to Sellers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">99%</p>
              <p className="text-blue-100 dark:text-blue-200">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials/>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.button
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Selling Your Licenses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;