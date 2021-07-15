/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "TheIncredibleVee",
  title: "Hi all, I'm Vinay",
  subTitle: emoji(
    "A hardworking and ambitious individual with great passion for the Information Technology, Business Development and Economics industries. Currently studying B.Tech (Electrical Engineering, 3rd Year) at Delhi Technological University(DTU)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Mzk8PROofEI0Fv4_7OkoPfjAL84-aHcy/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TheIncredibleVee",
  linkedin: "https://www.linkedin.com/in/theincrediblevee/",
  gmail: "cehvinaysachdeva@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/TheIncredibleVee/",
  instagram: "https://www.instagram.com/theincrediblevee/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "OVER-ENTHUSIASTIC TECH-SAVVY DEVELOPER LOOKING FOR MORE CHALLENGES",
  skills: [
    emoji(
      "⚡ Front-end web-applications using React.js"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Integration of third party services and API's such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    // {
    //   skillName: "Techinical Analysis",
    //   fontAwesomeClassname: "fab fa-chart-line"
    // }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Delhi Technological University (DTU)",
      logo: require("./assets/images/DTU.png"),
      subHeader: "Bachelor of Technology (B.Tech) specialization in Electrical Engineering",
      duration: "August 2019 - August 2023",
    },
    {
      schoolName: "Lancer's Convent",
      logo: require("./assets/images/lancer.png"),
      subHeader: "High/Secondary School",
      duration: "April 2005 - April 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer Intern",
      company: "Lynshia",
      companylogo: require("./assets/images/lynshia.jpg"),
      date: "June 2021 – Present",
      //desc: ", ",
      descBullets: [
        "Contributing towards the front-end development of the website using React.js",
        "creating a dashboard for users and further looking adding firebase auth to it and create a full-fledged website."
      ]
    },
    {
      role: "Web Developer and SEO Specialist Apprenticeship",
      company: "Buy and Shell Shop",
      companylogo: require("./assets/images/buyandsell.png"),
      date: "Feb 2020 – May 2020",
      descBullets:[ 
        "Contributing towards the initial website designing and development",
        "Worked on the SEO for the website."
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/expendo.png"),
      projectName: "ExpenDo",
      projectDesc: "Expense Tracker powered by voice",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://expendo.theincrediblevee.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/alpha.png"),
      projectName: "Alpha-Chat",
      projectDesc: "A chat service web-app",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://chat-app.theincrediblevee.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bulleton.png"),
      projectName: "Bulleton",
      projectDesc: "A voice-powered news app",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://bulleton.theincrediblevee.com/"
        }
      ]
    },
    {
      image: require("./assets/images/opt.jfif"),
      projectName: "Optimal Traffic light Simulation",
      projectDesc: "Using fuzzy logic",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://drive.google.com/file/d/1cZFHPiM5Lwnv7b0pqMyGhdgrmaKps6nG/view"
        }
      ]
    },
    {
      image: require("./assets/images/trade.jfif"),
      projectName: "Optimized Trading Pair Strategy:",
      projectDesc: "For Trading stocks",
      footerLink: [
        {
          name: "Visit Research",
          url: "https://www.linkedin.com/pulse/trading-pair-strategy-vinay-sachdeva-a-k-a-theincrediblevee-/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Algorithmic Toolbox",
      subtitle:
        "University of California San Diego",
      image: require("./assets/images/ucd.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/0273056965405caaab2a488daf1ec3b3"
        },
      ]
    },
    {
      title: "Algorithms on Graphs",
      subtitle:
        "University of California San Diego",
      image: require("./assets/images/ucd.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/5a3e66979170e18eb2ed28259e49be6c"
        },
      ]
    },
    {
      title: "Advanced Algorithms and Complexity",
      subtitle:
        "University of California San Diego",
      image: require("./assets/images/ucd.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/70ae0edb598558f2b4fe74843a46bb62"
        },
      ]
    },
    {
      title: "Data Structures",
      subtitle:
        "University of California San Diego",
      image: require("./assets/images/ucd.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/a347cf7cc304669f8a3d5677cf2e3086"
        },
      ]
    },
    {
      title: "React - Complete Guide with React Hook",
      subtitle:
        "Udemy",
      image: require("./assets/images/react.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-5be9a6f2-1eb0-4d2b-a70c-47b2be268bee/"
        },
      ]
    },
    {
      title: "Modern JavaScript Firebase BootCamp",
      subtitle:
        "Udemy",
      image: require("./assets/images/js.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-8f5c8985-9791-4055-8da4-655a604c490c/"
        },
      ]
    },
    {
      title: "Trading Strategies in Emerging Markets – Spcialization",
      subtitle:
        "Indian School of Business",
      image: require("./assets/images/isb.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/25bf212e62c01c811898c9851b65c8a5"
        },
      ]
    },
    {
      title: "Programming for Everybody",
      subtitle:
        "University of Michigan",
      image: require("./assets/images/mc.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/2824a219d1cf0a7b321a89c9974369f8"
        },
      ]
    },
    {
      title: "Technical Support Fundamentals",
      subtitle:
        "Google",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/11f8f58185996c5deb4e7da59444db57"
        },
      ]
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle:
        "Google",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/ad34adbdadeca3351d609e3174da29c8"
        },
      ]
    },
    {
      title: "Custom Prediction Routine on Google AI",
      subtitle:
        "Coursera Project Network",
      image: require("./assets/images/mc.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/eafc1becb751c35749fd304e97c7f477"
        },
      ]
    },
    {
      title: "Welcome to Game Theory with Honors",
      subtitle:
        "The University of Tokyo",
      image: require("./assets/images/mic.jfif"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/391b5cb690bb035c1b70c4c7a8419eda"
        },
      ]
    },
    {
      title: "Introduction to Big Data",
      subtitle:
        "UC San Diego",
      image: require("./assets/images/ucd.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/88882dffec9488ce22f41716a8e36e02"
        },
      ]
    },
    {
      title: "Google Workspace Security",
      subtitle:
        "Google",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/1f8e178095932740d45c9248945dce9f"
        },
      ]
    },
    {
      title: "Getting Started with SAS Programming",
      subtitle:
        "SAS",
      image: require("./assets/images/sas.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/9627d54325676f1824524e729594e73e"
        },
      ]
    },
    {
      title: "Blockchain Basics",
      subtitle:
        "University at Buffalo",
      image: require("./assets/images/ub.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/f65d011b33371bf3db090e98fdbf08c7"
        },
      ]
    },
    {
      title: "Pentesting and Securing Web Applications",
      subtitle:
        "Udemy",
      image: require("./assets/images/pen.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-1f1c37f9-c1f6-4297-ab24-0e5c0bad7bf6/"
        },
      ]
    },
    {
      title: "The Certified Ethical Hacking(CEH) Course",
      subtitle:
        "Udemy",
      image: require("./assets/images/ceh.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-b818689a-81ba-415b-aee9-014fde88235a/"
        },
      ]
    },
    {
      title: "Python Programming- Basic to Advanced",
      subtitle:
        "Udemy",
      image: require("./assets/images/py.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-4061e0b0-75b1-4747-9ab3-0e9c0eb27c40/"
        },
      ]
    },
    {
      title: "SEO Masterclass",
      subtitle:
        "Udemy",
      image: require("./assets/images/seo.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-b971ae33-0c28-4d04-aa21-da108994f44e/"
        },
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8178117180",
  email_address: "cehvinaysachdeva@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "TheIncredibleVe", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
