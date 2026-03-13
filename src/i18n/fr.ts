export const fr = {
    subtitle: "Développeur Full-Stack — Rennais",
    sections: {
        about: "À propos de moi",
        skills: "Compétences",
        experience: "Expérience",
        diplomas: "Diplômes",
        projects: "Mes projets",
    },
    about: "Je suis développeur full-stack avec une solide expérience en Node.js, passionné par l'apprentissage de nouveaux langages et outils de développement. J'ai récemment approfondi mes connaissances des message brokers en apprenant à utiliser RabbitMQ efficacement.",
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
                "Développement d'une application mobile similaire à Vinted (avec un back-office web) développée avec React Native et Expo",
                "Création d'un back-office React avec une API Express.js générant des fichiers Excel",
                "Mise en place d'une application web React de formulaire entièrement personnalisée",
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
                "Application de messagerie éphémère chiffrée. Les messages sont chiffrés de bout en bout et ne sont jamais stockés",
            tags: ["WebSocket", "AES-256", "React", "Docker"],
        },
    ],
    footer: {
        madeBy: "Fait par",
        tech: "Développé avec React & Vite",
    },
} as const;
