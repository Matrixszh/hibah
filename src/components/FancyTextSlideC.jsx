'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FancyTextSlide = () => {
  return (
    <section className="fancy-text-container mt-[10]">
      <motion.div
        className="fancy-text-wrapper"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="fancy-title">"Hibah"</h1>
        <motion.p
          className="fancy-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        >
          A gift from God
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FancyTextSlide;
