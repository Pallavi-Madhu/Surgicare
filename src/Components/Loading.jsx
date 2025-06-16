import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = ({department}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // 4 second delay
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heartbeat monitor style */}
          <div className="relative">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-8 bg-gradient-to-t from-green-500 to-green-900 rounded-full"
                  animate={{
                    scaleY: [0.3, 1, 0.3],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-900 rounded-full"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2"> Loading {department} products</h3>
            <motion.p
              className="text-gray-600"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              Syncing medical inventory...
            </motion.p>
          </div>
        </motion.div>
      </div>
    );
  }
};

export default Loading;
