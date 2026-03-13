export const en = {
    subtitle: "Full-Stack Developer — based in Rennes",
    sections: {
        about: "About me",
        skills: "Skills",
        experience: "Experience",
        diplomas: "Diplomas",
        projects: "Some of my work",
    },
    about: "I'm a full-stack developer with a strong background in Node.js, passionate about learning new languages and development tools. I recently deepened my knowledge of message brokers by learning to use RabbitMQ efficiently.",
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
                "Worked on many different projects for real clients such as: a Vinted-like mobile application (with a web back-office) built with React Native and Expo, a React back-office with an Express.js API that generates Excel files from database entries, and a fully custom form web application.",
            ],
        },
    ],
    diplomas: [
        {
            title: "Manager en Ingénierie Informatique",
            years: "2023 — 2025",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "Licence Informatique générale",
            years: "2022 — 2023",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "BTS SIO",
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
    footer: {
        madeBy: "Made by",
    },
} as const;
