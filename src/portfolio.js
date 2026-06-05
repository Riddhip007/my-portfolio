import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/web";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 6000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "codebyriddhip",
  title: "Hey there, I'm Riddhipkumar",
  subTitle: emoji("Welcome to my personal website. I specialize in AI/ML and full-stack development, with a strong interest in project management, problem-solving, and building scalable digital solutions."),
  resumeLink:"https://drive.google.com/file/d/1pOm8LFH-90R2FPtdWl71WOsgnaqkQdS-/view?usp=drivesdk",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Riddhip007",
  linkedin: "https://www.linkedin.com/in/riddhipkumar-vaghela-44589433a/",
  gmail: "riddhipvaghela2005@gmail.com",
  leetcode: "https://leetcode.com/u/Rv__v07/",
  //instagram:"https://www.instagram.com/the_app_maker_buddy",
  //hashnode: "https://mayursinhdevblog.hashnode.dev/",
  //youtube: "https://www.youtube.com/@Theappmakerbuddy",
  //twitter: "https://twitter.com/app_maker_buddy",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I enjoy transforming ideas into practical and impactful digital solutions. My work combines AI/ML, full-stack development, and project management to build innovative products that solve real-world challenges.",
  skills: [
    emoji("Develop AI and Machine Learning solutions for intelligent applications.💡"),
    emoji("🔸 Design user-friendly websites with a focus on performance and usability."),
    emoji("🔸 Build modern, responsive, and scalable full-stack web applications."),
    emoji("🔸 Design Pattern: MVC | MVVM | Clean architecture"),
    emoji("🔸 Analyze data and implement data-driven solutions."),
    emoji("🔸 Manage projects from planning and development to deployment."),
    emoji("🔸 Integrate APIs, databases, and cloud technologies into applications."),
    emoji("🔸 Collaborate with teams using Agile methodologies and best practices."),
    emoji("🔸 Continuously learn and adopt new technologies to create better solutions."),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills:[],

  // softwareSkills: [
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-kotlin"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   }
  // ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KPGU UNIVERSITY",
      logo: require("./assets/images/kp1.png"),
      subHeader: "Diploma in IT",
      duration: "2022-2025",
    },
    {
      schoolName: "PARUL UNIVERSITY",
      logo: require("./assets/images/parul.jpeg"),
      subHeader: "Bachelor of Technology & CSE (AI-ML)",
      duration: "2025-2028",
    }
  ]
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Knoxpo",
      companylogo: require("./assets/images/knoxpo_logo.jpeg"),
      date: "Aug 2021 – Present",
    
    },
    {
      role: "Android Developer",
      company: "IcanStudioz App Solution",
      companylogo: require("./assets/images/icanstudioz_logo.jpeg"),
      date: "2019 - 2020",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true ,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects and POC",
  projects: [
    {
      image: require("./assets/images/widgetclock.webp"),
      projectName: "Android 12 Analog Clock Widget",
      projectDesc: "Android 12 Analog & Digital Clock Widget application give you support of android 12 based new material design look cool and latest widget clock on you mobile device without android 12 update needed.",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=androidclockwidget.analogclockwidget.androiddigitalclockwidget&hl=en_IN&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Some My Office projects

const myOfficeProjects = {
  title: "My Office Projects",
  officeProjects: [
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Agritech App",
      projectDesc: "Agritech App helps people easily check up-to-date market prices for crops, added directly by farmers and commission agents. Users can connect with each other instantly through real-time chat or direct calls. With one click, they can also share full-screen market reports as photos on social media.",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
  
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9023679374",
  email_address: "riddhipvaghela2005@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  myOfficeProjects,
  contactInfo,
  isHireable
};
