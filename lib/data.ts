import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import adminproImg from '@/public/adminpro.png';
import aroundTheWorldImg from '@/public/aroundTheWorld.png';
import spotifyImg from '@/public/spotify.png';
import marvelSearcherImg from '@/public/marvelSearcher.png';
import foodOrderAppImg from '@/public/foodOrderApp.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Around The World',
    description:
      'Hotel application to manage bookings, cabins and users. Users can login, manage their account, add/edit/remove cabins or bookings. It has features like filtering, sorting and pagination.',
    tags: ['React', 'Vite', 'JavaScript', 'Styled-Components', 'Supabase'],
    imageUrl: aroundTheWorldImg,
  },
  {
    title: 'AdminPro',
    description:
      'Administrative platform to manage doctors, hospitals and users. Users can login with email or Google account, change their account settings, add/edit/remove doctors and hospitals.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'NodeJS', 'TypeScript'],
    imageUrl: adminproImg,
  },
  {
    title: 'Spotify Clone',
    description:
      'Spotify web application with a set of songs that can be played or searched. It has features like login with email, play/pause and player with progress bar.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'NodeJS', 'TypeScript'],
    imageUrl: spotifyImg,
  },
  {
    title: 'Marvel Searcher',
    description:
      'Web application for quick search of Marvel heroes. It shows random heroes, a description of their comics and dark/light mode. Users can select their favourite heroes.',
    tags: ['React', 'Vite', 'JavaScript', 'Styled-Components'],
    imageUrl: marvelSearcherImg,
  },
  {
    title: 'Food Order App',
    description:
      'A delivery web application to order food. Users can select different meals that are added to a shopping cart and fill a reactive form to the delivery.',
    tags: ['React', 'JavaScript', 'CSS', 'Firebase'],
    imageUrl: foodOrderAppImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Postman',
  'Framer Motion',
] as const;
