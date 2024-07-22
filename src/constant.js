import projImg1 from "./assets/img/project-img1.png";
import projImg2 from "./assets/img/project-img2.png";
import projImg3 from "./assets/img/project-img3.png";
import projImg4 from "./assets/img/project-img4.png";
import projImg5 from "./assets/img/project-img5.png";
import projImg6 from "./assets/img/project-img6.png";
import projImg7 from "./assets/img/project-img7.png";
import projImg8 from "./assets/img/project-img8.png";
import NextJS from "./assets/img/icon/nextjs.svg";
import React from "./assets/img/icon/react.svg";
import MongoDB from "./assets/img/icon/mongodb.svg";
import Stripe from "./assets/img/icon/stripe.svg";
import SocketIO from "./assets/img/icon/socketio.svg";
import Clerk from "./assets/img/icon/clerk.svg";
import Auth0 from "./assets/img/icon/auth0.svg";
import Tailwind from "./assets/img/icon/tailwind.svg";
import NodeJS from "./assets/img/icon/node.svg";
import ExpressJS from "./assets/img/icon/express.svg";
import Redux from "./assets/img/icon/redux.svg";
import Firebase from "./assets/img/icon/firebase.svg";
import WebRTC from "./assets/img/icon/webrtc.svg";

export const projects = [
    {
        title: "AI - Saas",
        description:
            "Comprehensive AI platform built with Next.js, Clerk, and Stripe. Features AI conversation, image/video/music generation, image restoration, generative fill, object removal/recoloring, and background removal. Includes secure authentication and payment processing.",
        imgURL: projImg1,
        liveLink: "https://ai-sass-weld-phi.vercel.app/",
        gitLink: "https://github.com/minhbn3107/ai-sass",
        techStack: [NextJS, Clerk, MongoDB, Stripe, Tailwind],
    },
    {
        title: "Next Authentication",
        description:
            "Verify registration and account login with OAuth support, log in via Google, GitHub. Security with 2FA authentication, email password, forgot password and manage user roles (Admin and User). Use a combination of NextJS and Next Authentication.",
        imgURL: projImg2,
        liveLink: "https://next-auth-xi-one.vercel.app/",
        gitLink: "https://github.com/minhbn3107/next-auth",
        techStack: [NextJS, Auth0, Tailwind],
    },
    {
        title: "Scholarship Processing",
        description:
            "Handle the input list of students and filter out the student eligible to receive a scholarship under each faculty and course. Calculate the amount of the scholarship respectively according to each faculty and the key of eligible students",
        imgURL: projImg3,
        liveLink: "https://xulihocbongiuh.vercel.app/",
        gitLink: "https://github.com/minhbn3107/scholarship-processing",
        techStack: [NextJS, Redux, Tailwind],
    },
    {
        title: "Tech Notes",
        description:
            "Simple notes help users can make notes and mark the job complete.Assigned work notes to other users. Using the MERN stack in combination with Redux and JWT Authentication.",
        imgURL: projImg4,
        liveLink: "https://technotes-iby1.onrender.com/",
        gitLink: "https://github.com/minhbn3107/techNotes-frontend",
        techStack: [MongoDB, ExpressJS, React, NodeJS, Redux],
    },
    {
        title: "Drive Clone",
        description:
            "File Management System: Streamlined application for easy file upload and download. Leverages Firebase for robust user authentication and secure cloud storage. Built with efficiency and user experience in mind.",
        imgURL: projImg5,
        liveLink: "https://drive-clone-6nxr.onrender.com/",
        gitLink: "https://github.com/minhbn3107/drive-clone",
        techStack: [React, Firebase],
    },
    {
        title: "Video Call",
        description:
            "Video Chat Duo: Minimalist video calling app enabling two-person connections. Features real-time audio and video streaming for seamless communication. Built with WebRTC for direct peer-to-peer connectivity.",
        imgURL: projImg6,
        liveLink: "https://videocall-twby.onrender.com/",
        gitLink: "https://github.com/minhbn3107/videoCall-frontend",
        techStack: [React, ExpressJS, NodeJS, SocketIO, WebRTC],
    },
    {
        title: "Chat Room",
        description:
            "Real-time chat application built with Socket.IO. Supports multiple simultaneous connections for group conversations. Features instant message delivery and live user presence updates.",
        imgURL: projImg7,
        liveLink: "https://chatroom-66r0.onrender.com/",
        gitLink: "https://github.com/minhbn3107/chat-room",
        techStack: [React, ExpressJS, NodeJS, SocketIO],
    },
    {
        title: "Car Hub",
        description:
            "User-friendly car rental interface aggregating multiple vendors. Showcases diverse vehicle options, streamlined booking process, and comparison tools. Built with responsive design for seamless desktop and mobile experiences.",
        imgURL: projImg8,
        liveLink: "https://car-hub-chi-six.vercel.app/",
        gitLink: "https://github.com/minhbn3107/car-hub",
        techStack: [NextJS, Tailwind],
    },
];
