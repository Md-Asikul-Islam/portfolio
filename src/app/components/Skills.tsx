"use client";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: SiJavascript, percentage: 89 },
  { name: "React.js", icon: SiReact, percentage: 92 },
  { name: "Next.js", icon: SiNextdotjs, percentage: 90 },
  { name: "Node.js", icon: SiNodedotjs, percentage: 86 },
  { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 95 },
  { name: "TypeScript", icon: SiTypescript, percentage: 83 },
];

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
          My Skills
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }} // ensures SSR-client consistency
                className="p-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                {/* Skill Title + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-4xl text-blue-500 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                {/* Progress Bar Background */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                  {/* Animated Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold">
                  {skill.percentage}%
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skills