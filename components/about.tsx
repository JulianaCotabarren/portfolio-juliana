"use client";
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
  >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Biotechnology</span>, I decided to pursue my
        passion for programming. I enrolled in EducaciónIT courses and learned{" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
    </p>  
    <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">React (Next.js) and Angular</span>
        . I am also familiar with MySQL, MongoDB and Java. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium underline">full-time position</span> 
        {" "} as a frontend developer.  
    </p>
    <p>
        <span className="mb-3">I enjoy working in a {" "}
        <span className="font-medium">team,</span>
        </span> in a mutual support environment and exchanging ideas with my colleagues.{" "}
        I am a very <span className="font-medium">organized, responsible person,</span> with <span className="font-medium">adaptability and great motivation,</span> 
        {" "} willing to solve problems that arise.
    </p>
  </motion.section>
  )
}
