import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Squiggly line SVG paths for background elements
  const squigglyLines = [
    "M10,30 Q20,0 30,30 T50,30 T70,30 T90,30",
    "M10,50 Q30,20 50,50 T90,50",
    "M10,70 Q40,40 70,70 T130,70",
  ];

  return (
    <div className="min-h-screen bg-[#0B0C2A] text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Squiggly lines */}
        {squigglyLines.map((path, index) => (
          <motion.svg
            key={index}
            className="absolute"
            style={{
              top: `${index * 25 + 10}%`,
              left: `${index * 15}%`,
              width: "300px",
              height: "100px",
              transform: `rotate(${index * 30}deg)`,
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: index * 0.5 }}
          >
            <motion.path
              d={path}
              stroke={index % 2 === 0 ? "#FF5EA0" : "#E9FF70"}
              strokeWidth="3"
              fill="none"
            />
          </motion.svg>
        ))}

        {/* Floating stickers/elements */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-12 h-12 rounded-full bg-[#BB86FC] opacity-60"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[5%] w-16 h-16 rounded-full bg-[#E9FF70] opacity-40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-10 h-10 rounded-full bg-[#FF5EA0] opacity-50"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="mb-24">
          <HeroSection />
        </motion.section>

        {/* Project Grid */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block">
            <span className="relative">
              Selected Work
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E9FF70] opacity-70"></span>
              <span className="ml-2">✨</span>
            </span>
          </h2>
          <ProjectGrid />
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block">
            <span className="relative">
              Tools & Skills
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#FF5EA0] opacity-70"></span>
              <span className="ml-2">🛠️</span>
            </span>
          </h2>
          <SkillsSection />
        </motion.section>

        {/* Education & Experience - Brief version */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block">
            <span className="relative">
              Journey So Far
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#BB86FC] opacity-70"></span>
              <span className="ml-2">🚀</span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#E9FF70]/30 transition-all">
              <div className="text-[#E9FF70] text-xl mb-2">
                📚 2022 – Present
              </div>
              <h3 className="text-2xl font-bold mb-2">
                B.Tech in Computer Science – MESCoE
              </h3>
              <p className="text-white/70">
                Active in GDG, FOSS, TechVerse, and design cells
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FF5EA0]/30 transition-all">
              <div className="text-[#FF5EA0] text-xl mb-2">
                🎨 2023 – Present
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Graphic & UI Designer – GDG MESCOE
              </h3>
              <p className="text-white/70">
                Event banners, UI flows, motion posts, team coordination
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#BB86FC]/30 transition-all md:col-span-2">
              <div className="text-[#BB86FC] text-xl mb-2">🧠 2024</div>
              <h3 className="text-2xl font-bold mb-2">
                Branding Lead – ROOTX (Freelance)
              </h3>
              <p className="text-white/70">Logo, social kit, motion reveal</p>
            </div>
          </div>
        </motion.section>

        {/* Fun Highlights */}
        <motion.section variants={itemVariants} className="mb-24">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#E9FF70] opacity-10"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#FF5EA0] opacity-10"></div>

            <h3 className="text-2xl font-bold mb-6">
              Things I Love Designing:
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Posters",
                "Logos",
                "UI Flows",
                "Social Media",
                "Motion Graphics",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-white/20 hover:border-[#E9FF70] hover:text-[#E9FF70] transition-all cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Currently Exploring:</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {["Motion Graphics", "AR Filters", "Fashion UI", "3D Design"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-[#FF5EA0] hover:text-[#FF5EA0] transition-all cursor-pointer"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="mt-12 text-center">
              <p
                className="text-xl italic font-light text-white/80 max-w-lg mx-auto"
                style={{ fontFamily: "cursive" }}
              >
                "Design is how I connect tech with emotion."
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants}>
          <ContactSection />
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;
