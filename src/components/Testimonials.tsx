import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "IT Manager",
      company: "TechNova Inc.",
      message: "SoftSell made it incredibly easy to sell our unused licenses. The process was smooth and transparent.",
      avatar: "https://i.pravatar.cc/150?img=3"
,
      rating: 5
    },
    {
      name: "Joseph Paul",
      role: "Procurement Head",
      company: "NextGen Solutions",
      message: "We recouped value from old software thanks to SoftSell. Highly recommended for any business with surplus licenses.",
      avatar: "https://i.pravatar.cc/150?img=53"
,
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Operations Director",
      company: "Global Systems",
      message: "The ROI we've seen from using SoftSell has been tremendous. Their platform helped us optimize our software budget effectively.",
      avatar: "https://i.pravatar.cc/150?img=10"
,
      rating: 4
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Innovate Corp",
      message: "SoftSell's marketplace is a game-changer for companies looking to manage software assets more efficiently. The transaction process is seamless.",
      avatar: "https://i.pravatar.cc/150?img=69"
,
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);

//   useEffect(() => {
//     // Check system preference for dark mode
//     if (typeof window !== 'undefined') {
//       setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      
//       // Listen for changes in system preference
//       const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//       const handleChange = (e) => setIsDarkMode(e.matches);
//       mediaQuery.addEventListener('change', handleChange);
      
//       return () => mediaQuery.removeEventListener('change', handleChange);
//     }
//   }, []);

  useEffect(() => {
    let interval:NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index:number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating:number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ));
  };

  return (
    <div >
      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg transition-colors duration-300 m-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
            >
              What Our Customers Say
            </motion.h2>
            
           
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="h-1 w-16 sm:w-24 bg-indigo-600 dark:bg-indigo-400 rounded mb-8 sm:mb-12"
          />

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl p-4 sm:p-6 md:p-10 transition-colors duration-300">
              <Quote size={40} className="absolute text-indigo-100 dark:text-indigo-900 opacity-50 top-6 left-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-indigo-500 dark:border-indigo-400"
                    />
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      
                      <blockquote className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 italic">
                       {`"${testimonials[currentIndex].message}"`}
                      </blockquote>
                      
                      <div className="mt-3 sm:mt-4">
                        <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</p>
                        <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-indigo-600 dark:text-indigo-400" />
              </button>
              
              <div className="hidden sm:flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-indigo-600 dark:bg-indigo-400 w-4 sm:w-6' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-indigo-600 dark:text-indigo-400" />
              </button>
            </div>
            
            {/* Mobile indicator (current/total) */}
            <div className="flex sm:hidden justify-center mt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;