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
    title: 'Frontend Developer',
    subtitle: 'Local Start-Up',
    description:
      "I'm now a frontend developer working at Local Start-Up. My stack includes React, Next.js, Angular, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Sep. 2023 - Present',
  },
  {
    title: 'Graduated Web Developer with React.JS',
    subtitle: 'Leniolabs_LLC',
    description:
      'I graduated as Web Developer with React.JS after Leniolabs bootcamp. Recognized as one of the best final projects of this Bootcamp’s edition.',
    icon: React.createElement(LuGraduationCap),
    date: 'May 2023 - Aug. 2023',
  },
  {
    title: 'Graduated Frontend Web Developer',
    subtitle: 'EducaciónIT',
    description:
      'I graduated as Frontend Web Developer after EducaciónIT courses.',
    icon: React.createElement(LuGraduationCap),
    date: 'Nov. 2022 - Apr. 2023',
  },
  {
    title: 'Researcher and Graduate Assistant',
    subtitle: 'CONICET - UNLP',
    description:
      'I worked as a researcher for 8 years in the National Scientific and Technical Research Council (CONICET) and for 5 years as a graduate assistant in the National University of La Plata (UNLP).',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb. 2015 - Mar. 2023',
  },
  {
    title: 'Biotechnology Degree',
    subtitle: 'UNLP',
    description:
      'I graduated with a bachelor´s degree in Biotechnology and Molecular Biology from the National University of La Plata.',
    icon: React.createElement(LuGraduationCap),
    date: 'Mar. 2007 - Mar. 2014',
  }
] as const;

export const projectsData = [
  {
    title: 'Around The World',
    description:
      'Hotel application to manage bookings, cabins and users. Users can login, manage their account, add/edit/remove cabins or bookings. It has features like filtering, sorting and pagination.',
    tags: ['React', 'Vite', 'JavaScript', 'Styled-Components', 'Supabase'],
    imageUrl: aroundTheWorldImg,
    url: 'https://github.com/JulianaCotabarren/Around-The-World'
  },
  {
    title: 'AdminPro',
    description:
      'Administrative platform to manage doctors, hospitals and users. Users can login with email or Google account, change their account settings, add/edit/remove doctors and hospitals.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'NodeJS', 'TypeScript'],
    imageUrl: adminproImg,
    url: 'https://github.com/JulianaCotabarren/adminpro'
  },
  {
    title: 'Spotify Clone',
    description:
      'Spotify web application with a set of songs that can be played or searched. It has features like login with email, play/pause and player with progress bar.',
    tags: ['MongoDB', 'Express.js', 'Angular', 'NodeJS', 'TypeScript'],
    imageUrl: spotifyImg,
    url: 'https://github.com/JulianaCotabarren/spotify-clone'
  },
  {
    title: 'Marvel Searcher',
    description:
      'Web application for quick search of Marvel heroes. It shows random heroes, a description of their comics and dark/light mode. Users can select their favourite heroes.',
    tags: ['React', 'Vite', 'JavaScript', 'Styled-Components'],
    imageUrl: marvelSearcherImg,
    url: 'https://github.com/JulianaCotabarren/Marvel-Searcher-Leniolabs'
  },
  {
    title: 'Food Order App',
    description:
      'A delivery web application to order food. Users can select different meals that are added to a shopping cart and fill a reactive form to the delivery.',
    tags: ['React', 'JavaScript', 'CSS', 'Firebase'],
    imageUrl: foodOrderAppImg,
    url: 'https://github.com/JulianaCotabarren/Food-Order-App'
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
  'Express',
  'Redux',
  'Jest',
  'React Testing Library',
  'MongoDB',
  'MySQL',
  'Tailwind',
  'Bootstrap',
  'Styled-Components',
  'Framer Motion',
  'Git',
  'Postman',
  'Jira',
  'Scrum'
] as const;
