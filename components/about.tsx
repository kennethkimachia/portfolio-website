"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello! I'm Kenneth Kimachia, a software engineer with a strong passion for building and enhancing web technologies. 
      My expertise includes a broad range of tools and languages like HTML, CSS, JavaScript, TypeScript, React, and Next.js, among others. 
      I take pride in creating dynamic, user-friendly applications with Node.js and Express, and I'm well-versed in managing databases using MongoDB, MySQL, and PostgreSQL.
      Currently, I'm diving into the exciting worlds of Web3 and Machine Learning, exploring how these technologies can further revolutionize the digital landscape. Whether it's developing engaging front-end interfaces with Tailwind and Framer Motion or implementing real-time interactions with Socket.io, 
      I'm always eager to leverage my skills to drive innovation. I am constantly seeking to expand my knowledge and tackle new challenges that push the boundaries of what's possible in tech. If you're looking for someone who is not just a developer but a problem solver and a learner at heart, let's connect and explore how we can work together to create something incredible!
      </p>

    </motion.section>
  );
}
