import type { Project } from '../Project';

export const projects: Project[] = [
  {
    name: "Sidequest",
    description: "Mobile app for students to post/find jobs",
    stack: [{
      src: "swift.png",
      alt: "swift-icon"
    }],
    year: 2023,
    github: "https://github.com/kchiem12/sidequest-frontend",
    images: [
      {
        src: "sidequest_profile_screen-min.png",
        alt: "sidequest-profile-screen"
      },
      {
        src: "sidequest-login.png",
        alt: "sidequest-login-screen"
      }
    ]
  },
  {
    name: "Ball-101",
    description: "Analyze basketball videos with CV to track stats",
    stack: [{
      src: "python.png",
      alt: "python-icon"
    },
    {
      src: "aws.png",
      alt: "aws-icon"
    },
    {
      src: "docker.png",
      alt: "docker-icon"
    }],
    year: 2023,
    github: "https://github.com/CornellDataScience/Ball-101",
    images: [
      {
        src: "hooptracker.png",
        alt: "hooptracker-screen"
      }
    ]
  },
  {
    name: "TrivAI",
    description: "Quizlet, but with AI to generate questions for you",
    stack: [
      {
        src: "react.png",
        alt: "react-icon"
      }
    ],
    year: 2023,
    github: "https://github.com/mbulling/TrivAI-mobile/tree/main",
    images: [
      {
        src: "trivai-home.png",
        alt: "trivai-home-screen"
      },
      {
        src: "trivai-questions.png",
        alt: "trivai-questions-screen"
      }
    ]
  },
  {
    name: "BoCaml",
    description: "General purpose Telegram Bot, made entirely in OCaml",
    stack: [
      {
        src: "ocaml.png",
        alt: "ocaml-icon"
      }
    ],
    year: 2023,
    github: "https://github.com/epicdragon44/g511/tree/main",
    images: [
      {
        src: "bocaml.jpg",
        alt: "bocaml-screen"
      }
    ]
  },
  {
    name: "Routinely",
    description: "Workout calendar app to track your progress",
    stack: [
      {
        src: "react.png",
        alt: "react-icon"
      },
      {
        src: "mongodb.png",
        alt: "mongodb-icon"
      },
      {
        src: "nodejs.png",
        alt: "nodejs-icon"
      },
      {
        src: "redux.png",
        alt: "redux-icon"
      }
    ],
    year: 2022,
    github: "https://github.com/kchiem12/routinely",
    images: [
      {
        src: "routinely.png",
        alt: "routinely-screen"
      }
    ]
  },
  {
    name: "VWC Nails",
    description: "Website for a nail salon in Philadelphia",
    stack: [
      {
        src: "svelte.png",
        alt: "svelte-icon"
      }
    ],
    year: 2023,
    github: "https://github.com/kchiem12/vwc_nails_svelte",
    images: [
      {
        src: "vwcnails.png",
        alt: "vwcnails-screen"
      }
    ]
  }
];

