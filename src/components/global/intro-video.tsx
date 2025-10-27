"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroVideoProps {
  onComplete?: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if intro video has already played in this session
    const hasPlayedIntro = sessionStorage.getItem("introVideoPlayed");

    if (!hasPlayedIntro) {
      setShowVideo(true);
      setIsPlaying(true);
      sessionStorage.setItem("introVideoPlayed", "true");
    }
  }, []);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    // Fade out transition before hiding video
    setTimeout(() => {
      setShowVideo(false);
      onComplete?.();
    }, 500);
  };

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  return (
    <AnimatePresence>
      {showVideo && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Video Container */}
          <motion.div
            className="w-full h-full flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPlaying ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              onEnded={handleVideoEnd}
              playsInline
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Skip Button */}
            <motion.button
              onClick={skipVideo}
              className="absolute top-8 right-8 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip
            </motion.button>

            {/* Video Progress Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gold"
              initial={{ width: "0%" }}
              animate={{
                width: isPlaying ? "100%" : "0%",
              }}
              transition={{
                duration: 0,
                ease: "linear",
              }}
              style={{
                width: `${
                  videoRef.current
                    ? (videoRef.current.currentTime / videoRef.current.duration) *
                      100
                    : 0
                }%`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
