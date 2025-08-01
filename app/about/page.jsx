"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- SVG Icon Components for the Timeline ---
const EducationIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5" />
  </svg>
);

const WorkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

// --- Data for the Timeline (from your resume) ---
const educationData = [
  {
    type: "Education",
    title: "VIT Bhopal University",
    subtitle: "Bachelor of Technology",
    date: "2023 - Present",
    location: "Sehore, Madhya Pradesh, India",
    description: "Current GPA: 8.03/10"
  },
  {
    type: "Education",
    title: "Sri Chaitanya Techno School",
    subtitle: "Senior Secondary Education (Class XII)",
    date: "2023",
    location: "Bangalore, Karnataka, India",
    description: "Achieved a score of 87%."
  },
  {
    type: "Education",
    title: "Sri Chaitanya Techno School",
    subtitle: "Senior Secondary Education (Class X)",
    date: "2021",
    location: "Bangalore, Karnataka, India",
    description: "Achieved a score of 77.4%."
  },
];

const experienceData = [
  {
    type: "Experience",
    title: "The Electrical Vehicle Club, VIT Bhopal University",
    subtitle: "Technical Lead",
    date: "Jan 2025 - Jul 2025",
    location: "Bhopal, Madhya Pradesh, India",
    description: "Led web development efforts, providing technical support, and fostering teamwork within the club."
  },
  {
    type: "Experience",
    title: "The Electrical Vehicle Club, VIT Bhopal University",
    subtitle: "Graphic Design Co-Lead",
    date: "Mar 2024 - Dec 2024",
    location: "Bhopal, Madhya Pradesh, India",
    description: "Managed team responsibilities and designed promotional assets using Canva."
  },
];

// --- Reusable Timeline Item Component with Awwwards-Level GUI ---
const TimelineItem = ({ item, isLast }) => {
  const Icon = item.type === "Education" ? EducationIcon : WorkIcon;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative flex items-start group"
      tabIndex={0}
      aria-label={`${item.title}, ${item.subtitle}`}
    >
      {!isLast && (
        <div className="absolute left-5 top-5 h-full w-px bg-neutral-800" />
      )}
      <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 border-2 border-neutral-700 transition-colors duration-300 group-hover:border-purple-500 group-focus:border-purple-500">
        <Icon className="h-5 w-5 text-neutral-500 transition-colors duration-300 group-hover:text-purple-500 group-focus:text-purple-500" />
      </div>
      <div className="ml-6 w-full rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 backdrop-blur-md transition-all duration-300 group-hover:border-neutral-700/80 group-hover:bg-neutral-900/60 group-hover:shadow-2xl group-hover:shadow-purple-900/20 group-focus:border-neutral-700/80 group-focus:bg-neutral-900/60 group-focus:shadow-2xl  group-focus:shadow-purple-900/10">
        <h3 className="text-lg font-semibold text-neutral-100">{item.title}</h3>
        <p className="mt-1 text-base text-purple-400">{item.subtitle}</p>
        <p className="mt-2 text-sm text-neutral-500">{item.date} • {item.location}</p>
        {item.description && (
          <p className="mt-3 text-neutral-400">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
};

// --- Main About Page Component ---
export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const introScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white antialiased selection:bg-sky-500/30">
      {/* Subtle Animated Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">

        {/* Introduction Section with Scroll-based Parallax */}
        <motion.div
          style={{ scale: introScale, opacity: introOpacity }}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left mb-24"
        >
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Using a placeholder, but in a real Next.js app, you'd use the <Image> component */}
            <img
              src="/photo.png"
              alt="Arush Menon"
              className="h-40 w-40 rounded-full object-cover shadow-2xl shadow-purple-900/50 border-4 border-neutral-800"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/111827/9ca3af?text=Profile'; }}
            />
          </motion.div>
          <div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Arush Nandakumar Menon
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-neutral-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              A passionate software developer with a strong foundation in full-stack development and a keen interest in the fields of AI/ML and Generative AI. Committed to creating reliable, scalable software and leveraging technology for innovative problem-solving.
            </motion.p>
          </div>
        </motion.div>

        {/* Timeline Sections */}
        <div className="space-y-24">
          {/* Education Section */}
          <div>
            <motion.h2
              className="text-3xl font-bold text-center text-neutral-200 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Education
            </motion.h2>
            <div className="flex flex-col gap-16">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
          {/* Experience Section */}
          <div>
            <motion.h2
              className="text-3xl font-bold text-center text-neutral-200 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Professional Experience
            </motion.h2>
            <div className="flex flex-col gap-16">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
