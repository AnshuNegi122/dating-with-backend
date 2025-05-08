import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-pink-100"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join thousands of people who are already making meaningful connections every day.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-white rounded-lg p-1 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 p-3 rounded-l-md focus:outline-none text-gray-800"
            />
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-r-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
          <p className="text-center text-sm mt-3 text-pink-100">
            Free to join. No credit card required.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div>
            <div className="text-4xl font-bold">10M+</div>
            <div className="text-pink-100">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold">150+</div>
            <div className="text-pink-100">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold">1M+</div>
            <div className="text-pink-100">Matches Made</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4.8/5</div>
            <div className="text-pink-100">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
