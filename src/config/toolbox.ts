import {
  HTML5Icon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodeJSIcon,
  TailwindIcon,
  ViteIcon,
  GitIcon,
  VSCodeIcon,
  MongoDBIcon,
  PostmanIcon
} from '../components/icons/toolbox';

export interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
}

export const toolboxItems: ToolboxItem[] = [
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJSIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Vite",
    iconType: ViteIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "VS Code",
    iconType: VSCodeIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
];
