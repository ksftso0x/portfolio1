import aboutpic from "./components/Access/mePhoto.png";
import roofrulerIMG from "./components/Access/projects/roofruler.jpg";
import TakaswapIMG from "./components/Access/projects/taka-swap.png";
import VocyieldIMG from "./components/Access/projects/voc-yield.png";
import EverethIMG from "./components/Access/projects/ever-eth.png";
import BenefitsIMG from "./components/Access/projects/benefits.png";
import ThumbanilVideoIMG from "./components/Access/projects/thumbnail-media.png";

const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://alan-grant.vercel.app',
  title: "Alan Grant",
};

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: "Alan Grant",
  role: "Full stack developer",
  description:
    "Alan Grant has been developing websites and web applications for all of his adult life. He also has extensive knowledge of front-end JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React and Redux. Alan’s deep full-stack  experience includes Node.js and Express, MongoDB as well as more traditional technologies like PHP, ASP.NET and MySQL and He‘s familiar with Laravel and Django. He appreciates the importance of quality code as well as the need to meet scheduling demands.",
  resume: process.env.REACT_APP_RESUME,
  social: {
    linkedin: `https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN}`,
    github: `https://github.com/${process.env.REACT_APP_GITHUB}`,
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "RoofRuler",
    url: roofrulerIMG,
    description: "",
    stack: ["Laravel", "Leaflet", "Near Map API", "Google Map API", "Stripe"],
    sourceCode: "https://github.com/roofruler/roof",
    livePreview: "https://roofruler.com/",
  },
  {
    name: "Video Thumbnail",
    url: ThumbanilVideoIMG,
    description: "",
    stack: ["react", "Cloudinary", "npm", "Material UI", "nodejs"],
    sourceCode: "https://github.com/DreamSky1996/video-thumbnail",
    livePreview: "https://thumbnail-media.vercel.app/",
  },
  {
    name: "Taka Swap",
    url: TakaswapIMG,
    description: "",
    stack: [
      "react",
      "npm",
      "web3",
      "blockchain",
      "smart contract",
      "solidity",
      "nodejs",
    ],
    sourceCode: "https://github.com/DreamSky1996/taka-dex-frontend",
    livePreview: "https://taka-swap.on.fleek.co/#/swap",
  },
  {
    name: "VOC Yield",
    url: VocyieldIMG,
    description: "",
    stack: ["React", "Blockchain", "web3", "Solidity", "Smart Contract"],
    sourceCode: "https://github.com/DreamSky1996/voc-main-frontend",
    livePreview: "https://vocyield.on.fleek.co",
  },
  {
    name: "Ever ETH",
    url: EverethIMG,
    description: "",
    stack: ["React", "Blockchain", "web3", "Solidity", "Smart Contract"],
    sourceCode: "https://github.com/DreamSky1996/voc-main-frontend",
    livePreview: "",
  },
  {
    name: "Benefits Of Clothes Swapping",
    url: BenefitsIMG,
    description: "",
    stack: ["React", "HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/DreamSky1996/yazi-react-front",
    livePreview: "",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Python",
  "C#",
  "JAVA",
  "Rust",
  "Golang",
  "Blockchain",
  "Solidity",
  "Smart Contract",
  "Web3",
  "NFT",
  "ERC20",
  "ERC721",
  "Ether",
  "Laravel",
  "Django",
  "Symfony",
  "Express",
  "MySQL",
  "MongoDB",
  "React",
  "Vue",
  "Angular",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "MERN",
  "Docker",
  "Heroku",
  "leaflet",
  "CHATGPT",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: process.env.REACT_APP_EMAIL,
  telegram: `https://t.me/${process.env.REACT_APP_TELEGRAM}`,
  whatsapp: `https://t.me/${process.env.REACT_APP_WHATSAPP}`,
  skype: `https://join.skype.com/invite/${process.env.REACT_APP_SKYPE}`,
  discord: `https://discordapp.com/users/${process.env.REACT_APP_DISCORD}`,
};

export { header, about, projects, skills, contact };
