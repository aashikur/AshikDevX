// projectsData.js
import { GiPolarStar } from "react-icons/gi";

export const projectsData = [
  {
    id: 1,
    title: "AuctionG",
    indicatorColor: "pink-500",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe magnam possimus nam vitae exercitationem, corporis facere cum sapiente libero repellendus eos officia illo voluptatibus dicta laudantium provident ex esse a ut fugit sunt cumque ratione. Odit earum soluta neque amet.",
    image: "src/assets/1.jpg",
    features: [
      { icon: <GiPolarStar className="w-5 h-5 text-pink-500" />, text: "Feature one description here." },
      { icon: <GiPolarStar className="w-5 h-5 text-pink-500" />, text: "Feature two description here." },
      { icon: <GiPolarStar className="w-5 h-5 text-pink-500" />, text: "Feature three description here." },
    ],
    badges: [
      { iconKey: "react", text: "ReactJS" },
      { iconKey: "redux", text: "Redux" },
      { iconKey: "javascript", text: "JavaScript" },
      { iconKey: "tailwind", text: "TailwindCSS" },
      { iconKey: "bootstrap", text: "Bootstrap" },
      { iconKey: "node", text: "NodeJS" },
      { iconKey: "express", text: "ExpressJS" },
      { iconKey: "mongodb", text: "MongoDB" },
      { iconKey: "vscode", text: "VS Code" },
      { iconKey: "git", text: "Git" },
    ],
  },
  {
    id: 2,
    title: "TaskMaster",
    indicatorColor: "blue-500",
    description:
      "TaskMaster is a productivity app that helps users manage tasks efficiently. It includes deadlines, priorities, and team collaboration features for better workflow management.",
    image: "src/assets/2.jpg",
    features: [
      { icon: <GiPolarStar className="w-5 h-5 text-blue-500" />, text: "Manage personal and team tasks." },
      { icon: <GiPolarStar className="w-5 h-5 text-blue-500" />, text: "Set deadlines and priorities easily." },
      { icon: <GiPolarStar className="w-5 h-5 text-blue-500" />, text: "Collaborate and track progress." },
    ],
    badges: [
      { iconKey: "react", text: "ReactJS" },
      { iconKey: "redux", text: "Redux" },
      { iconKey: "javascript", text: "JavaScript" },
      { iconKey: "tailwind", text: "TailwindCSS" },
      { iconKey: "node", text: "NodeJS" },
      { iconKey: "express", text: "ExpressJS" },
      { iconKey: "mongodb", text: "MongoDB" },
      { iconKey: "vscode", text: "VS Code" },
      { iconKey: "git", text: "Git" },
    ],
  },
];
