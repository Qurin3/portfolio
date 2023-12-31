import React from 'react';
import { motion } from 'framer-motion';
import './blob.scss';

const BlobComponent = () => {
  return (
    <div className="wrapper">
      <motion.div
        className="box"
        initial={{ borderRadius: '30% 70% 43% 57% / 56% 36% 64% 44%' }}
        animate={{
          borderRadius: [
            '30% 70% 43% 57% / 56% 36% 64% 44%',
            '14% 86% 20% 80% / 55% 22% 78% 45%',
            '64% 36% 20% 80% / 55% 50% 50% 45%',
            '24% 76% 73% 27% / 55% 50% 50% 45%',
            "30% 70% 43% 57% / 56% 36% 64% 44%"
          ],
        }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default BlobComponent;