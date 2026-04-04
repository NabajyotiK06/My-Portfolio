import React from 'react';

export const projectsData = [
  {
    id: 1,
    title: 'AMS – Adaptive Management Suite',
    gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)',
    image: '/ams.png',
    description: (
      <>
        Unified academic, event, and hotel operations. Features include <strong>role-specific dashboards</strong>, interactive canvas tools, and dynamic billing. • <strong>Full MERN Stack</strong> end-to-end platform demonstrating complex user access and event lifecycles.
      </>
    ),
    tech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Framer Motion'],
    githubUrl: 'https://github.com/NabajyotiK06/AMS--Adaptive-Management-Suite',
    liveUrl: 'https://ams-frontend-b0ko.onrender.com/',
    
    // Detailed page data
    date: 'March 2026',
    timeline: '4 weeks',
    status: 'Live',
    overviewBullets: [
      {
        title: 'Unified Platform',
        text: 'Built a scalable Adaptive Management Suite to unify academic, event, and hotel operations using the full MERN tech stack.'
      },
      {
        title: 'Dynamic Tools',
        text: 'Developed role-specific dashboards, interactive canvas tools, authentication flows, and dynamic billing components using React, Express.js, and MongoDB.'
      },
      {
        title: 'End-to-End Delivery',
        text: 'Delivered a fully functional administrative platform capable of managing complex user access, event lifecycles, and reservations.'
      }
    ],
    expandedTech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Framer Motion', 'Node.js', 'Tailwind CSS', 'JWT'],
    contributors: [
      {
        name: 'NabajyotiK06',
        role: 'Full Stack Developer',
        commits: '200+',
      }
    ]
  },
  {
    id: 2,
    title: 'Ketch – Collaborative WhiteBoard',
    gradient: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    image: '/ketch.png',
    description: (
      <>
        Scalable collaborative whiteboard and virtual studio utilizing <strong>React, Node.js, and Socket.io</strong> for multi-user synchronization. • Seamless <strong>WebRTC video conferencing</strong>, screen sharing, and JWT secured live session drawing environment.
      </>
    ),
    tech: ['MERN', 'Socket.io', 'WebRTC', 'Vanilla CSS', 'JWT'],
    githubUrl: 'https://github.com/NabajyotiK06/Ketch',
    liveUrl: 'https://ketch-82i7.onrender.com/',
    hasCarousel: true,
    
    // Detailed page data
    date: 'February 2026',
    timeline: '3 weeks',
    status: 'Live',
    overviewBullets: [
      {
        title: 'Real-Time Synchronization',
        text: 'Developed a scalable collaborative whiteboard utilizing React, Node.js, and Socket.io for low-latency multi-user synchronization.'
      },
      {
        title: 'Feature-Rich Environment',
        text: 'Structured a drawing environment with text insertion, geometric shapes, flood fill, and secure JWT authentication to instantly save and restore live session data.'
      },
      {
        title: 'Integrated Communication',
        text: 'Integrated seamless WebRTC video conferencing, screen sharing, and real-time chat into a responsive vanilla CSS interface.'
      }
    ],
    expandedTech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC', 'Vanilla CSS', 'JWT'],
    contributors: [
      {
        name: 'NabajyotiK06',
        role: 'Full Stack Developer',
        commits: '180+',
      }
    ]
  },
  {
    id: 3,
    title: 'MoveWise – Smart Traffic System',
    gradient: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    image: '/movewise.png',
    description: (
      <>
        Scalable <strong>intelligent traffic management system</strong> using Mapbox GL JS for automated route planning. • Live bidirectional <strong>Socket.io data pipeline</strong> triggering automated system recalibrations and real-time alternative routes during accidents.
      </>
    ),
    tech: ['MERN', 'Mapbox GL JS', 'Socket.io', 'JWT'],
    githubUrl: 'https://github.com/NabajyotiK06/MoveWise---Smart-Traffic-Management-System',
    liveUrl: 'https://movewise-frontend.onrender.com/',

    // Detailed page data
    date: 'December 2025',
    timeline: '5 weeks',
    status: 'Live',
    overviewBullets: [
      {
        title: 'Intelligent Route Planning',
        text: 'Architected a scalable smart traffic management system using the MERN stack and Mapbox GL JS, enabling real-time monitoring and automated routes.'
      },
      {
        title: 'Live Bidirectional Pipeline',
        text: 'Constructed a data pipeline using Socket.io to push instantaneous updates, seamlessly triggering automated system recalibrations during traffic anomalies.'
      },
      {
        title: 'AI-Driven Dashboard',
        text: 'Engineered an AI-driven admin dashboard and routing system, implementing algorithmic heuristics to autonomously divert traffic during accidents.'
      }
    ],
    expandedTech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox GL JS', 'Socket.io', 'JWT', 'AI Heuristics'],
    contributors: [
      {
        name: 'NabajyotiK06',
        role: 'Full Stack Developer',
        commits: '250+',
      }
    ]
  }
];
