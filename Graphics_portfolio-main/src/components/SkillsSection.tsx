import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Tool {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

interface SkillsSectionProps {
  tools?: Tool[];
  skillCategories?: SkillCategory[];
}

const SkillsSection = ({
  tools = [
    { name: "Photoshop", icon: "🎨", color: "bg-blue-500" },
    { name: "Illustrator", icon: "✏️", color: "bg-orange-500" },
    { name: "After Effects", icon: "🎬", color: "bg-purple-500" },
    { name: "Figma", icon: "🖌️", color: "bg-green-500" },
    { name: "Canva", icon: "📱", color: "bg-blue-400" },
    { name: "Blender", icon: "🧊", color: "bg-orange-400" },
  ],
  skillCategories = [
    {
      name: "UI/UX",
      color: "bg-[#E9FF70] text-black",
      skills: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Interaction Design",
      ],
    },
    {
      name: "Branding",
      color: "bg-[#FF5EA0] text-white",
      skills: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
      ],
    },
    {
      name: "Social Campaigns",
      color: "bg-[#BB86FC] text-white",
      skills: ["Content Creation", "Campaign Planning", "Social Media Design"],
    },
    {
      name: "Typography",
      color: "bg-[#FFF4F0] text-black",
      skills: ["Font Pairing", "Typesetting", "Custom Lettering"],
    },
    {
      name: "Motion Design",
      color: "bg-cyan-400 text-black",
      skills: ["Animation", "Transitions", "Video Editing"],
    },
  ],
}: SkillsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="w-full py-20 bg-[#0B0C2A] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
          >
            <span className="relative z-10">Tools & Skills</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#E9FF70] opacity-40 -rotate-1 z-0"></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl"
          >
            My digital toolbox and areas of expertise that help bring creative
            visions to life.
          </motion.p>
        </motion.div>

        {/* Tools Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-[#E9FF70]">
            Design Tools
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <Card className="w-full aspect-square flex items-center justify-center bg-opacity-10 border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <span className="text-4xl mb-2">{tool.icon}</span>
                    <span className="font-medium text-center">{tool.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-[#FF5EA0]">
            Skills & Expertise
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="space-y-4"
              >
                <Badge
                  className={`${category.color} text-sm px-3 py-1 rounded-full`}
                >
                  {category.name}
                </Badge>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <TooltipProvider key={skill}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="outline"
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Expertise in {skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-20 top-1/4 w-40 h-40 bg-[#BB86FC] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -left-20 bottom-1/4 w-60 h-60 bg-[#E9FF70] rounded-full blur-[120px] opacity-10"></div>
      </div>
    </section>
  );
};

export default SkillsSection;
