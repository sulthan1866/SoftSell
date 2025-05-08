import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Send,
  User,
  Mail,
  Briefcase,
  FileText,
  MessageSquare,
} from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.license) errs.license = "Please select a license type";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setIsSubmitting(true);
      setErrors({});

      //API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setForm({ name: "", email: "", company: "", license: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const inputClasses =
    "w-full p-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100";
  const labelClasses =
    "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300";
  const errorClasses =
    "flex items-center text-red-500 dark:text-red-400 text-sm mt-1";

  return (
    <div>
      <section className="py-12 sm:py-20 px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 sm:p-10"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-gray-600 dark:text-gray-400 max-w-lg mx-auto"
            >
              {`Have questions about selling your unused software licenses? We're here to help!`}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="h-1 w-16 sm:w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4"
            />
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-400">{`Thank you for contacting us. We'll get back to you shortly.`}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      className={`${inputClasses} pl-10 ${
                        errors.name ? "border-red-500 dark:border-red-500" : ""
                      }`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  {errors.name && (
                    <div className={errorClasses}>
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className={`${inputClasses} pl-10 ${
                        errors.email ? "border-red-500 dark:border-red-500" : ""
                      }`}
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  {errors.email && (
                    <div className={errorClasses}>
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      id="company"
                      type="text"
                      className={`${inputClasses} pl-10`}
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="license" className={labelClasses}>
                    License Type *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <select
                      id="license"
                      className={`${inputClasses} pl-10 appearance-none ${
                        errors.license
                          ? "border-red-500 dark:border-red-500"
                          : ""
                      }`}
                      value={form.license}
                      onChange={(e) =>
                        setForm({ ...form, license: e.target.value })
                      }
                    >
                      <option value="">Select License Type</option>
                      <option value="Office">Microsoft Office</option>
                      <option value="Adobe">Adobe Suite</option>
                      <option value="Antivirus">Antivirus</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.license && (
                    <div className={errorClasses}>
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.license}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    className={`${inputClasses} pl-10`}
                    rows={4}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  * Required fields
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ContactForm;
