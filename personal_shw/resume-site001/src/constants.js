// Skills Section Logo's
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import azure from './assets/tech_logo/azure.png';
import adevops from './assets/tech_logo/adevops.png';
import k8s from './assets/tech_logo/k8s.png';
import tf from './assets/tech_logo/tf.png';
import dk from './assets/tech_logo/dk.png';
import aa from './assets/tech_logo/aa.png';
import linux from './assets/tech_logo/Linux.png';
import window from './assets/tech_logo/window.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import rackspacelogo from './assets/company_logo/rackspace_logo.png'
import diverse_logo from './assets/company_logo/test3.png'


// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';
import pu_logo from './assets/education_logo/pu_logo.png';
import kv_logo from './assets/education_logo/kvs_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
 

export const SkillsInfo = [
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', logo: azure },
      { name: 'Azure DevOps', logo: adevops },
      { name: 'Terraform', logo: tf },
      { name: 'Kubernetes', logo: k8s },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'GitHub Action', logo: githubLogo },
      { name: 'Docker', logo: dk },
      { name: 'Window', logo: window },
      { name: 'Linux', logo: linux },
      
      { name: 'Automation', logo: aa },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Programming & Tools',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      
    ],
  },
  // {
  //   title: 'Languages',
  //   skills: [
  //     { name: 'C', logo: cLogo },
  //     { name: 'C++', logo: cppLogo },
  //     { name: 'Java', logo: javaLogo },
  //     { name: 'Python', logo: pythonLogo },
  //     { name: 'C-Sharp', logo: csharpLogo },
  //     { name: 'JavaScript', logo: javascriptLogo },
  //     { name: 'TypeScript', logo: typescriptLogo },
  //   ],
  // },
  // {
  //   title: 'Tools',
  //   skills: [
  //     { name: 'Git', logo: gitLogo },
  //     { name: 'GitHub', logo: githubLogo },
  //     { name: 'VS Code', logo: vscodeLogo },
  //     { name: 'Postman', logo: postmanLogo },
  //     { name: 'Compass', logo: mcLogo },
  //     { name: 'Vercel', logo: vercelLogo },
  //     { name: 'Netlify', logo: netlifyLogo },
  //     { name: 'Figma', logo: figmaLogo },
  //   ],
  // },
];

  export const experiences = [
      {
      id: 0,
      img: rackspacelogo, // import or replace with your asset
      role: "Cloud Engineer II",
      company: "Rackspace Technology",
      date: "Oct 2021 - Present",
      desc:
        "Cloud Engineer II specializing in Azure IaaS/PaaS. Managed NSGs, VM security and patching; implemented AKS with Docker; automated infrastructure with Terraform and Bash scripting; configured Azure Firewall, Application Gateway, and Front Door; enforced governance via Azure Policy and cost optimization; leveraged Azure Automation for workflows. Supported Web Apps, Functions, SQL DB, and broader platform services.",
      skills: [
        "Microsoft Azure",
        "Azure IaaS",
        "Azure PaaS",
        "Azure Web Apps",
        "Azure Functions",
        "Azure SQL Database",
        "Virtual Machines (VMs)",
        "Network Security Groups (NSGs)",
        "Azure Firewall",
        "Application Gateway",
        "Azure Front Door",
        "Azure Policy",
        "Azure Automation",
        "Kubernetes",
        "AKS",
        "Docker",
        "Terraform",
        "Linux",
        "Bash",
        "CI/CD",
        "Observability"
      ],
    },
    {
      id: 1,
      img: diverse_logo, // import or replace with your asset
      role: "Backend Developer Intern",
      company: "Diverse Web Strategies",
      date: "Jan 2021 - Jun 2021",
      desc:
        "Backend developer intern building websites and APIs using PHP, Django, and Node.js. Contributed to server-side logic, data modeling, and integration, focusing on clean architecture and performance.",
      skills: [
        "PHP",
        "Django",
        "Node.js",
        "REST APIs",
        "SQL",
        "Git",
        "Express.js",
        "ORMs",
        "Linux"
      ],
    },
    
  ];
  
  export const education = [
    
{
    id: 0,
    img: pu_logo, // replace with actual Poornima University logo import
    school: "Poornima University",
    date: "2017 - 2021",
    desc:
"Completed Bachelor of Technology (B.Tech) in Computer Science with specialization in Cloud Computing and Information Security. Studied core subjects such as Data Structures, Operating Systems, Networks, DBMS, along with advanced modules in cloud platforms, virtualization, security principles, and distributed computing. Engaged in technical projects and practical work that strengthened expertise in cloud technologies and system security.",
    degree: "B.Tech Computer Science (Specialization: Cloud Computing & Information Security)",
  },

    
{
    id: 1,
    img: kv_logo, // your KV logo
    school: "Kendriya Vidyalaya No.2, Army Bhuj",
    date: "2016 - 2017",
    desc:
      "Completed Higher Secondary Education (Class 12) in the Science stream with Computer Science under the CBSE curriculum.",
    degree: "CBSE (XII) - Science",
  },
  {
    id: 2,
    img: kv_logo,
    school: "Kendriya Vidyalaya No.2, Army Bhuj",
    date: "2014 - 2015",
    desc:
      "Completed Secondary Education (Class 10) under CBSE with emphasis on Science and foundational computer knowledge.",
    degree: "CBSE (X)",
  },

  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  