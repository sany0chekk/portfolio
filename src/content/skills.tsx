import { BiLogoMongodb } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongoosedotws,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const iconsSize = 60;
export const skills = [
  [
    {
      title: "HTML",
      icon: <FaHtml5 size={iconsSize} />,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt size={iconsSize} />,
    },
    {
      title: "Tailwind",
      icon: <RiTailwindCssFill size={iconsSize} />,
    },
    {
      title: "JavaScript",
      icon: <FaJsSquare size={iconsSize} />,
    },
    {
      title: "React",
      icon: <FaReact size={iconsSize} />,
    },
    {
      title: "Redux",
      icon: <SiRedux size={iconsSize} />,
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs size={iconsSize} />,
    },
  ],
  [
    { title: "Node", icon: <RiNodejsFill size={iconsSize} /> },
    { title: "Express", icon: <SiExpress size={iconsSize} /> },
    { title: "MongoDB", icon: <BiLogoMongodb size={iconsSize} /> },
    { title: "Mongoose", icon: <SiMongoosedotws size={iconsSize} /> },
  ],
];
