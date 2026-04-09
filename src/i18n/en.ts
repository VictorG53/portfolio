export const en = {
    subtitle: "Full-Stack Developer — based in Rennes",
    sections: {
        about: "About me",
        skills: "Skills",
        hardSkills: "Hard skills",
        softSkills: "Soft skills",
        experience: "Experience",
        diplomas: "Diplomas",
        projects: "Some of my work",
        languages: "Languages",
    },
    about: "Fullstack developer with Node.js experience and a strong interest in the Ops side, I'm curious by nature and always looking for new practices or languages to explore. I care a lot about code quality because doing things well is, for me, just as important as doing them.",
    experience: [
        {
            company: "Uptime",
            period: "October 2025 — March 2026",
            role: "Full-Stack developer",
            city: "Rennes",
            description: [
                "Development of a Next.js app in the medical sector that helps medical experts better trace patient folder status and manage appointments.",
                "Built a mobile application and a back-office web app for tour bus drivers. Mobile application built with Expo and React Native. Back-office built with React and React Router (as a framework).",
                "Worked on an Angular web app backed by a Java Spring Boot API. Focused on RabbitMQ configuration and cleanup for better queue management and message consumption.",
            ],
        },
        {
            company: "Niji",
            period: "September 2024 — July 2025",
            role: "Internship as Full-Stack developer",
            city: "Rennes",
            description: [
                "Built a Next.js application to centralize Niji's employees' skills with roadmaps, including a roadmap editor powered by React Flow with data stored in a PostgreSQL database. I also learned how to build a GitLab CI/CD pipeline.",
            ],
        },
        {
            company: "Rockett",
            period: "September 2022 — August 2024",
            role: "Internship as Full-Stack developer",
            city: "Laval",
            description: [
                "Development of a mobile application similar to Vinted (with a web back-office) built with React Native and Expo.",
                "Creation of a React back-office with an Express.js API generating Excel files.",
                "Implementation of a fully customized React web form application.",
            ],
        },
    ],
    diplomas: [
        {
            title: "IT Engineering Manager (Lead dev)",
            years: "2023 — 2025",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "General Computer Science Bachelor's Degree",
            years: "2022 — 2023",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "BTS SIO (SLAM Option)",
            years: "2020 — 2022",
            school: "Institut Informatique Appliquée",
        },
    ],
    projects: [
        {
            title: "Ephemr",
            href: "https://ephemr.fwszs.dev",
            description:
                "Encrypted ephemeral messaging app. Messages are end-to-end encrypted and never stored",
            tags: ["WebSocket", "AES-256", "React", "Docker"],
        },
    ],
    softSkills: ["Autonomous", "Curious", "Versatile", "Rigorous"],
    languages: [
        { name: "French", level: "Native" },
        { name: "English", level: "C1 level" },
        { name: "Spanish", level: "B1 level" },
    ],
    footer: {
        madeBy: "Made by",
        tech: "with React & Vite",
    },
} as const;
