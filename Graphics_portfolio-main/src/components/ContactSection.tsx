import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, Paintbrush } from "lucide-react";

interface ContactSectionProps {
  heading?: string;
  subtext?: string;
  email?: string;
  linkedinUrl?: string;
  behanceUrl?: string;
  instagramUrl?: string;
}

const ContactSection = ({
  heading = "Let's Build Something Cool Together 💌",
  subtext = "I'm currently open for freelance work, internships, or creative collabs.",
  email = "vaishnavi.pawar@example.com",
  linkedinUrl = "https://linkedin.com/in/vaishnavipawar",
  behanceUrl = "https://behance.net/vaishnavipawar",
  instagramUrl = "https://instagram.com/vaishnavipawar",
}: ContactSectionProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0B0C2A] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Squiggly line 1 */}
        <svg
          className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 text-[#FF5EA0] opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M30.9,-51.2C40.1,-46.7,47.6,-38.3,53.9,-28.5C60.2,-18.7,65.2,-7.4,64.5,3.8C63.8,15,57.3,26.1,49.1,35.3C40.9,44.5,31,51.8,19.8,56.5C8.6,61.2,-3.9,63.3,-15.3,60.1C-26.7,56.9,-37,48.4,-45.6,38.5C-54.2,28.6,-61.1,17.3,-63.3,4.9C-65.5,-7.5,-63,-21,-56.2,-31.2C-49.4,-41.4,-38.3,-48.3,-27.1,-51.7C-15.9,-55.1,-4.7,-55,5.3,-53.1C15.3,-51.2,21.7,-55.7,30.9,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Squiggly line 2 */}
        <svg
          className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 text-[#E9FF70] opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M42.7,-73.4C55.9,-67.3,67.7,-56.6,75.2,-43.2C82.8,-29.8,86,-13.9,84.1,0.9C82.1,15.8,75,29.5,66.2,41.7C57.4,53.9,46.9,64.5,34.4,70.3C21.9,76.1,7.3,77.1,-6.2,75.3C-19.7,73.5,-32.1,69,-43.4,61.6C-54.7,54.2,-64.9,44,-71.3,31.5C-77.7,19,-80.3,4.2,-78.1,-9.8C-75.9,-23.8,-69,-37,-59.2,-46.9C-49.5,-56.8,-36.9,-63.4,-24.2,-69.7C-11.5,-76,-0.8,-82,11.4,-81.5C23.5,-81,35.5,-79.5,42.7,-73.4Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Sticker blob */}
        <svg
          className="absolute top-1/2 left-1/4 w-24 h-24 md:w-32 md:h-32 text-[#BB86FC] opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M47.7,-79.1C62.9,-71.9,77.2,-61.3,84.2,-46.9C91.3,-32.5,91.1,-14.3,87.6,2.1C84.2,18.4,77.5,32.9,68.1,45.5C58.7,58.1,46.6,68.8,32.8,74.9C19,81,3.5,82.5,-11.9,80.5C-27.3,78.5,-42.7,73,-55.8,63.3C-68.9,53.6,-79.8,39.7,-85.2,23.9C-90.7,8.1,-90.7,-9.6,-85.3,-25.2C-79.9,-40.8,-69.1,-54.3,-55.4,-62.3C-41.7,-70.3,-25.1,-72.8,-8.5,-70.5C8.1,-68.2,32.5,-86.3,47.7,-79.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          variants={itemVariants}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#FFF4F0] mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtext}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#E9FF70] text-[#E9FF70] hover:bg-[#E9FF70]/10 flex items-center gap-2 rounded-full px-6"
            onClick={() => window.open(linkedinUrl, "_blank")}
          >
            <Linkedin size={20} />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#FF5EA0] text-[#FF5EA0] hover:bg-[#FF5EA0]/10 flex items-center gap-2 rounded-full px-6"
            onClick={() => window.open(behanceUrl, "_blank")}
          >
            <Paintbrush size={20} />
            Behance
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC]/10 flex items-center gap-2 rounded-full px-6"
            onClick={() => window.open(instagramUrl, "_blank")}
          >
            <Instagram size={20} />
            Instagram
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#FFF4F0] text-[#FFF4F0] hover:bg-[#FFF4F0]/10 flex items-center gap-2 rounded-full px-6"
            onClick={() => (window.location.href = `mailto:${email}`)}
          >
            <Mail size={20} />
            Email
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
