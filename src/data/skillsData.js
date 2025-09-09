// data/skillsData.js
import frontend from '../assets/icons/dev.webp';
import react from '../assets/icons/react.svg';
import next from '../assets/icons/next.webp';
import ts from '../assets/icons/typescript.webp';
import tailwind from '../assets/icons/tailwind.webp';
import html from '../assets/icons/html-5.webp';
import css from '../assets/icons/css-3.webp';

import backend from '../assets/icons/backend.webp';
import node from '../assets/icons/node.webp';
import python from '../assets/icons/python.webp';
import postgre from '../assets/icons/database.webp';
import mongo from '../assets/icons/MongoDB.webp';
import Rest from '../assets/icons/Rest.webp';
import GraphQL from '../assets/icons/GraphQL.webp';

import uxDesign from '../assets/icons/uxDesign.webp';
import figma from '../assets/icons/Figma.webp';
import responsive from '../assets/icons/responsive.webp';
import wireframing from '../assets/icons/wireframing.webp';

import cloud from '../assets/icons/cloud.webp';
import aws from '../assets/icons/AWS.webp';
import docker from '../assets/icons/Docker.webp';
import pipeline from '../assets/icons/data-pipeline.webp';
import Kubernetes from '../assets/icons/Kubernetes.webp';
import Git from '../assets/icons/Git.webp';
import Linux from '../assets/icons/Linux.webp';

import tool from '../assets/icons/tool.webp';
import vscode from '../assets/icons/vscode.webp';
import jest from '../assets/icons/Jest.webp';
import redux from '../assets/icons/Redux.webp';
import firebase from '../assets/icons/Firebase.webp';
import vercel from '../assets/icons/Vercel.webp';
import vite from '../assets/icons/Vite.webp';

import idea from '../assets/icons/idea.webp';
import problemSolving from '../assets/icons/problemSolving.webp';
import time from '../assets/icons/delay.webp';
import decision from '../assets/icons/decision.webp';
import critical from '../assets/icons/critical.webp';

export const skillsData = [
  {
    leftIcon: frontend,
    role: 'Frontend Development',
    columns: 3,
    skills: [
      { icon: react, text: 'React' },
      { icon: next, text: 'Next.js', id: 'next' },
      { icon: ts, text: 'TypeScript' },
      { icon: tailwind, text: 'Tailwind CSS' },
      { icon: html, text: 'HTML 5' },
      { icon: css, text: 'CSS 3' }
    ]
  },
  {
    leftIcon: backend,
    role: 'Backend Development',
    columns: 3,
    skills: [
      { icon: node, text: 'Node.js' },
      { icon: python, text: 'Python' },
      { icon: postgre, text: 'PostgreSQL' },
      { icon: mongo, text: 'MongoDB' },
      { icon: Rest, text: "REST API's" },
      { icon: GraphQL, text: 'GraphQL' }
    ]
  },
  {
    leftIcon: uxDesign,
    role: 'UI/UX Design',
    columns: 2,
    skills: [
      { icon: figma, text: 'Figma' },
      { icon: responsive, text: 'Responsive Design' },
      { icon: wireframing, text: 'Wireframing' },
      { icon: Kubernetes, text: 'Kubernetes' }
    ]
  },
  {
    leftIcon: cloud,
    role: 'Cloud & DevOps',
    columns: 3,
    skills: [
      { icon: aws, text: 'AWS' },
      { icon: docker, text: 'Docker' },
      { icon: pipeline, text: 'CI/CD' },
      { icon: Kubernetes, text: 'Kubernetes' },
      { icon: Git, text: 'Git' },
      { icon: Linux, text: 'Linux' }
    ]
  },
  {
    leftIcon: tool,
    role: 'Tools & Technologies',
    columns: 3,
    skills: [
      { icon: vscode, text: 'VS Code' },
      { icon: jest, text: 'Jest' },
      { icon: redux, text: 'Redux' },
      { icon: firebase, text: 'Firebase' },
      { icon: vercel, text: 'Vercel' },
      { icon: vite, text: 'Vite' }
    ]
  },
  {
    leftIcon: idea,
    role: 'Creative Skills',
    columns: 2,
    skills: [
      { icon: problemSolving, text: 'Problem Solving' },
      { icon: time, text: 'Time Management' },
      { icon: critical, text: 'Critical Thinking' },
      { icon: decision, text: 'Decision Making' }
    ]
  }
];
