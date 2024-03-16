import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "React Chat App",
    description:
      " Utilized Socket.IO to enable seamless real-time data transfer between users, allowing instant messaging and updates , Implemented functionality to display the number of online users within each chat room in real-time,enhancing user engagement and interaction, Integrated join and leave notifications to notify users when someone joins or leaves a chat room, Implemented CORS (Cross-Origin Resource Sharing) to ensure seamless data sharing and communication across different platforms, enhancing accessibility and usability.",
    tools: [
      "Express",
      "Socket.IO",
      "React-scroll-to-bottom",
      "React",
      "Nodejs",
      "CORS",
      "Nodemon",
    ],
    role: "Reactjs Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "FxSignals App",
    description:
      "Successfully integrated TradingView plugins to provide real-time data and charting capabilities, enhancing the website’s functionality for forex traders.Developed a fully responsive website using React.js and Bootstrap, ensuring seamless user experience across various devices and screen sizes. Enhanced user engagement and experience by incorporating Lottie animations, enriching the website with visually appealing and interactive elements , Demonstrated initiative and proficiency by building the FxSignals website from scratch, showcasing your ability to create complex web applications independently. Showcased strong front-end development skills in React.js, Bootstrap, and Lottie files,underscoring your expertise in leveraging modern technologies to create impactful web solutions.",
    tools: ["Reactjs", "Bootstrap", "Redux", "Trading view Plugins"],
    role: "Reactjs Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "YaPrime",
    description:
      "Created a fully responsive website from scratch using HTML, CSS, JavaScript, and Bootstrap, showcasing proficiency in front-end development, Successfully integrated TradingView plugins to provide users with real-time data, enhancing the website’s functionality and providing valuable information to users.",
    tools: ["HTML", "Bootstrap", "PHP", "Javascript", "CSS"],
    code: "",
    role: "ReactJs Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
