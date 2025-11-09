import { motion } from "framer-motion";
import { useEffect } from "react";
import { Waves } from "lucide-react";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="نجمة السمك"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-8 shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        />

        {/* Title */}
        <motion.div
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            نجمة السمك
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="w-6 h-6 text-accent" />
            <motion.p
              className="text-xl md:text-2xl text-white/90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              للمأكولات البحرية
            </motion.p>
            <Waves className="w-6 h-6 text-accent" />
          </div>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <motion.p
            className="text-white/70 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            جاري التحميل...
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          >
            <animate
              attributeName="d"
              values="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z;M0,80 C150,40 350,100 600,80 C850,40 1050,100 1200,80 L1200,120 L0,120 Z;M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
