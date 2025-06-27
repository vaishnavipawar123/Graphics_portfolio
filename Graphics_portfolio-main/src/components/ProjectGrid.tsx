import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  caseStudyUrl: string;
  color: string;
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({ projects = defaultProjects }: ProjectGridProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#0B0C2A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Selected Work <span className="text-[#E9FF70]">✨</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent projects spanning UI/UX, branding, and
            digital storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden border-none bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-[${project.color}/10] transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60">
          <Button
            variant="outline"
            className="bg-black/60 border-white text-white hover:bg-white hover:text-black"
          >
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <Badge
            style={{ backgroundColor: project.color }}
            className="text-xs font-medium text-black"
          >
            {project.role}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="pt-2 pb-6">
        <Button
          variant="ghost"
          className="text-[${project.color}] hover:text-white hover:bg-[${project.color}]/20 p-0 flex items-center gap-2"
          asChild
        >
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "ROOTX – Brand Identity",
    role: "Branding",
    description:
      "Complete brand identity design for an urban streetwear brand, including logo, typography system, and social media kit.",
    imageUrl:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80",
    caseStudyUrl: "#",
    color: "#FF5EA0", // Bubblegum Pink
  },
  {
    id: "2",
    title: "Fommec Fridays",
    role: "Social Campaign",
    description:
      "Weekly contractor content series featuring carousel designs, animations, and engagement-focused storytelling.",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    caseStudyUrl: "#",
    color: "#E9FF70", // Highlighter Yellow
  },
  {
    id: "3",
    title: "Clothing App UI",
    role: "UI/UX",
    description:
      "End-to-end user flow design for a fashion e-commerce application with focus on seamless browsing and checkout experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=800&q=80",
    caseStudyUrl: "#",
    color: "#BB86FC", // Accent Purple
  },
  {
    id: "4",
    title: "TechVerse",
    role: "Event Creatives",
    description:
      "Comprehensive event branding package including digital assets, motion graphics, and promotional materials.",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    caseStudyUrl: "#",
    color: "#4ade80", // Green
  },
  {
    id: "5",
    title: "Drum Machine",
    role: "Interaction Design",
    description:
      "Animated interaction design for a digital drum machine interface using Blender and web technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    caseStudyUrl: "#",
    color: "#f43f5e", // Red
  },
  {
    id: "6",
    title: "Portfolio 2025",
    role: "Web Design",
    description:
      "Personal portfolio website with focus on showcasing creative work through an engaging and interactive experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    caseStudyUrl: "#",
    color: "#38bdf8", // Blue
  },
];

export default ProjectGrid;
