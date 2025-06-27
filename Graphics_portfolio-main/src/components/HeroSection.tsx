import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";


interface HeroSectionProps {
  name?: string;
  title?: string;
  tags?: string[];
}

const HeroSection = ({
  name = "Vaishnavi Pawar",
  title = "Graphic Designer | UI & Brand Creator | Digital Storyteller",
  tags = ["Open to Work", "Creative Soul", "Design + Tech"],
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[800px] w-full bg-[#0B0C2A] flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(#BB86FC_1px,transparent_1px),linear-gradient(90deg,#BB86FC_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-[20%] w-32 h-32 rounded-full bg-[#FF5EA0] opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-[15%] w-40 h-40 rounded-full bg-[#E9FF70] opacity-20 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      {/* Squiggly lines */}
      <svg
        className="absolute top-[15%] left-[10%] w-32 h-32 text-[#FF5EA0] opacity-60"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10,50 Q25,30 40,50 T70,50 T100,50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
      </svg>

      <svg
        className="absolute bottom-[20%] right-[10%] w-40 h-24 text-[#E9FF70] opacity-60"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,50 Q20,20 40,50 T80,50 T120,50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
          }}
        />
      </svg>

      {/* Sticker-like elements */}
      <motion.div
        className="absolute top-[30%] right-[15%] bg-[#BB86FC] text-white p-3 rounded-full rotate-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 12 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <span className="text-xl">✌️</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] left-[20%] bg-[#FFF4F0] p-3 rounded-full -rotate-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -6 }}
        transition={{ type: "spring", delay: 0.8 }}
      >
        <span className="text-xl">✨</span>
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[10%] bg-[#E9FF70] p-4 rounded-full rotate-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 6 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <span className="text-xl">👋</span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#FF5EA0]">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=vaishnavi"
              alt="Vaishnavi Pawar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {name} <span className="text-[#E9FF70]">|</span>{" "}
          <span className="text-[#FF5EA0]">Portfolio</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#FFF4F0] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className={`text-sm md:text-base py-2 px-4 rounded-full ${
                index === 0
                  ? "bg-[#E9FF70] text-[#0B0C2A]"
                  : index === 1
                    ? "bg-[#FF5EA0] text-white"
                    : "bg-[#BB86FC] text-white"
              }`}
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#E9FF70] text-[#0B0C2A] rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            View My Work
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
