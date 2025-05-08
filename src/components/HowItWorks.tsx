import React from "react";
import { motion } from "framer-motion";
import { Upload, DollarSign, CreditCard, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload License",
      icon: <Upload className="w-8 h-8" />,
      description:
        "Upload your software license details through our secure portal. We support all major software vendors.",
      color: "bg-blue-500",
    },
    {
      title: "Get Valuation",
      icon: <DollarSign className="w-8 h-8" />,
      description:
        "Our AI-powered system analyzes the market and provides you with a competitive valuation within minutes.",
      color: "bg-green-500",
    },
    {
      title: "Get Paid",
      icon: <CreditCard className="w-8 h-8" />,
      description:
        "Accept the offer and receive payment directly to your bank account or preferred payment method.",
      color: "bg-purple-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How SoftSell Works
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Our streamlined process makes selling your unused software licenses
            quick and hassle-free.
          </p>
        </div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants}
              >
                <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-6`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    {step.description}
                  </p>

                  {/* Show arrow only between steps, not after the last one */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra information box */}
        <motion.div
          className="mt-16 p-6 md:p-8 bg-blue-50 dark:bg-gray-800/50 rounded-xl border border-blue-100 dark:border-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                What types of licenses can I sell?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We accept most enterprise software licenses, including Adobe,
                Microsoft, Autodesk, and many more.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                How quickly will I receive payment?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Most sellers receive payment within 48 hours of license
                verification.
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                Is the process secure?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Absolutely. We use bank-level encryption and never store your
                license keys on our servers.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
