export const fr = {
    subtitle: "Développeur Full-Stack — Rennais",
    sections: {
        about: "À propos de moi",
        skills: "Compétences",
        hardSkills: "Hard skills",
        softSkills: "Soft skills",
        experience: "Expérience",
        diplomas: "Diplômes",
        projects: "Mes projets",
        languages: "Langues",
    },
    about: "Développeur fullstack avec une grande expérience en Node.js et une forte appétence pour le côté Ops, je suis curieux de nature et toujours en quête de nouvelles pratiques ou langages à explorer. J'attache beaucoup d'importance à la qualité du code car bien faire les choses est, pour moi, aussi important que les faire.",
    experience: [
        {
            company: "Uptime",
            period: "Octobre 2025 — Mars 2026",
            role: "Développeur Full-Stack",
            city: "Rennes",
            description: [
                "Développement d'une application Next.js dans le secteur médical aidant les médecins experts à mieux suivre le statut des dossiers de leurs patients et à gérer les rendez-vous.",
                "Développement d'une application mobile et d'un back-office web pour des conducteurs de bus pour les tournées. Application mobile développée avec Expo et React Native. Back-office développé avec React et React Router (en tant que framework).",
                "Travail sur une application web Angular connectée à une API Java Spring Boot. Travail focalisé sur la configuration de RabbitMQ pour une meilleure gestion des files et la consommation des messages.",
            ],
        },
        {
            company: "Niji",
            period: "Septembre 2024 — Juillet 2025",
            role: "Alternant en tant que développeur Full-Stack",
            city: "Rennes",
            description: [
                "Développement d'une application Next.js pour centraliser les compétences des employés de Niji avec des roadmaps, incluant un éditeur de roadmap basé sur React Flow avec les données stockées dans une base PostgreSQL. J'ai également appris à construire un pipeline CI/CD GitLab.",
            ],
        },
        {
            company: "Rockett",
            period: "Septembre 2022 — Août 2024",
            role: "Alternant en tant que développeur Full-Stack",
            city: "Laval",
            description: [
                "Développement d'une application mobile similaire à Vinted (avec un back-office web) développée avec React Native et Expo.",
                "Création d'un back-office React avec une API Express.js générant des fichiers Excel.",
                "Mise en place d'une application web React de formulaire entièrement personnalisée.",
            ],
        },
    ],
    diplomas: [
        {
            title: "Manager en Ingénierie Informatique (Lead dev)",
            years: "2023 — 2025",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "Licence Informatique générale",
            years: "2022 — 2023",
            school: "Institut Informatique Appliquée",
        },
        {
            title: "BTS SIO (Option SLAM)",
            years: "2020 — 2022",
            school: "Institut Informatique Appliquée",
        },
    ],
    projects: [
        {
            title: "Ephemr",
            href: "https://ephemr.fwszs.dev",
            description:
                "Application de messagerie éphémère chiffrée. Les messages sont chiffrés de bout en bout et ne sont jamais stockés",
            tags: ["WebSocket", "AES-256", "React", "Docker"],
        },
    ],
    softSkills: ["Autonome", "Curieux", "Polyvalent", "Rigoureux"],
    languages: [
        { name: "Français", level: "Natif" },
        { name: "Anglais", level: "Niveau C1" },
        { name: "Espagnol", level: "Niveau B1" },
    ],
    footer: {
        madeBy: "Développé par",
        tech: "avec React & Vite",
    },
} as const;
