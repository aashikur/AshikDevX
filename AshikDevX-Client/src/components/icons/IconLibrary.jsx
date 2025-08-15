// IconLibrary.jsx
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiRedux, SiNextdotjs, SiGithub, SiDocker, SiPostman } from 'react-icons/si';
import { GiPolarStar, GiCrystalBall } from 'react-icons/gi';
import { Plus } from 'lucide-react';

export const IconLibrary = {
  // Frontend
  react: <FaReact className="w-4 h-4 text-sky-500" />,
  nextjs: <SiNextdotjs className="w-4 h-4 text-black" />,
  html: <FaHtml5 className="w-4 h-4 text-orange-500" />,
  css: <FaCss3Alt className="w-4 h-4 text-blue-500" />,
  javascript: <FaJsSquare className="w-4 h-4 text-yellow-400" />,
  tailwind: <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
  bootstrap: <SiBootstrap className="w-4 h-4 text-purple-600" />,
  redux: <SiRedux className="w-4 h-4 text-purple-700" />,
  figma: <FaFigma className="w-4 h-4 text-pink-500" />,

  // Backend
  node: <FaNodeJs className="w-4 h-4 text-green-500" />,
  express: <SiExpress className="w-4 h-4 text-gray-700" />,
  mongodb: <SiMongodb className="w-4 h-4 text-green-600" />,
  python: <FaPython className="w-4 h-4 text-yellow-500" />,

  // Dev Tools
  git: <FaGitAlt className="w-4 h-4 text-red-600" />,
  github: <SiGithub className="w-4 h-4 text-gray-800" />,
  docker: <SiDocker className="w-4 h-4 text-blue-400" />,
  postman: <SiPostman className="w-4 h-4 text-orange-500" />,

  // Misc / Extras
  plus: <Plus className="w-4 h-4 text-gray-500" />,
  star: <GiPolarStar className="w-4 h-4 text-pink-500" />,
  crystal: <GiCrystalBall className="w-4 h-4 text-purple-500" />,
};
