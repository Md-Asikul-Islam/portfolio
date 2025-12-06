"use client";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion, useMotionValue, useTransform } from "framer-motion";

const skills = [
  { id: 1, name: "JavaScript", icon: SiJavascript, percentage: 89 },
  { id: 2, name: "React.js", icon: SiReact, percentage: 92 },
  { id: 3, name: "Next.js", icon: SiNextdotjs, percentage: 90 },
  { id: 4, name: "Node.js", icon: SiNodedotjs, percentage: 86 },
  { id: 5, name: "Tailwind CSS", icon: SiTailwindcss, percentage: 95 },
  { id: 6, name: "TypeScript", icon: SiTypescript, percentage: 83 },
];

// Individual Skill Card Component
const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const Icon = skill.icon;

  // Motion values for parallax tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      className="p-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm cursor-pointer perspective"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX);
        y.set(posY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Icon + Skill Name */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-4xl text-blue-500 dark:text-blue-400" />
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
        />
      </div>

      <p className="mt-3 text-sm font-semibold">{skill.percentage}%</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="w-full py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          My <span className="text-cyan-300">Skills</span>
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
