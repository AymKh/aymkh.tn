import { TProject } from "./type";


export const projects: TProject[] = [
    {
        id: '1',
        title: 'Planifi ERP',
        description: 'Affordable Solution for tender management - available as SaaS / self-hosted solutions',
        link: 'https://planifi.tn',
        image: '/projects/planifi_preview.png',
        tags: ["SAAS", "Tender Management", "Bidding"],
        techStack: ['Angular', 'NestJS', 'MySQL', 'AWS', 'Digital Ocean', 'Docker'],
        longDescription: "PLANIFI CMS is a comprehensive tender management solution designed to transform how organizations handle procurement opportunities. Available as both SaaS and self-hosted options, our platform seamlessly integrates user management, project tracking, document handling, and tender acquisition in one powerful system. Create and manage projects with flexible views including Gantt, Kanban, and Calendar integrations, while our advanced document repository ensures version control and secure sharing. PLANIFI keeps you connected to the latest tender opportunities through customizable channels and our Chrome extension for quick imports. With robust organization management tools including resume builders and customizable workflows, PLANIFI empowers your team to respond to tenders efficiently and professionally. Whether you're a small business or large enterprise, PLANIFI scales to meet your needs, helping you win more contracts with less administrative burden."
    },
    {
        id: '2',
        title: 'GitHub Groups',
        description: 'A Chrome extension to manage your GitHub repositories with ease',
        link: 'https://ghg.tn',
        image: '/projects/ghg.png',
        tags: ["Feature", "GitHub", "Chrome Extension"],
        techStack: ['HTML', 'CSS', 'TypeScript'],
        longDescription: "Say goodbye to endless scrolling through your repositories. GitHub Groups is a powerful Chrome extension that transforms how developers organize and access their GitHub projects. With intuitive custom grouping capabilities, you can finally categorize repositories your way—by client, technology stack, project phase, or any system that makes sense to you. The extension seamlessly integrates with GitHub's native interface, providing quick access to your most important repos with minimal clicks. Whether you're managing dozens or hundreds of repositories, GitHub Groups helps you reclaim valuable time with its lightning-fast search functionality and intelligent organization tools. Developed by MAAK CORP, this extension delivers the organization feature GitHub users have been requesting for years, enhancing your workflow without disrupting it. Install GitHub Groups today and experience a more productive GitHub experience."
    },
    {
        id: '3',
        title: 'VAGA CRM',
        description: 'A CRM for Tunsiian businesses to manage their clients and sales',
        link: 'https://vaga.tn',
        image: '/projects/vaga.png',
        tags: ["CRM", "SAAS"],
        techStack: ['Angular', 'React', 'MySQL', 'AWS', 'Digital Ocean', 'Docker'],
        longDescription: "VAGA CRM is a powerful customer relationship management solution designed specifically for Tunisian businesses. With a focus on enhancing client interactions and streamlining sales processes, VAGA CRM offers a comprehensive suite of tools to manage leads, track sales activities, and analyze customer data. The platform's user-friendly interface allows teams to easily navigate through client profiles, sales pipelines, and performance metrics. VAGA CRM also integrates seamlessly with popular communication channels, ensuring that your team stays connected with clients at all times. Whether you're a small startup or an established enterprise, VAGA CRM provides the flexibility and scalability needed to grow your business while maintaining strong customer relationships."
    }
];

export const services: TProject[] = [
    {
        id: '3',
        title: 'Enterprise Software Development',
        client: 'WinIntelligence (Netherlands)',
        description: "Delivered key product features and enhancements with autonomous execution and minimal supervision. Implemented secure, thoroughly tested, and high-performance solutions across multiple products. Resolved critical issues and optimized application performance through targeted bug fixes and code improvements.",
        image: '/services/dev.svg',
        tags: ['Frontend', 'Backend', 'Fullstack'],
        techStack: ['Angular', 'Angular-JS', 'React', 'Next-JS', 'NodeJS']
    },
    {
        id: '4',
        title: 'Technical Leadership & Enterprise Solutions',
        client: 'DivaSoftware (Tunisia)',
        description: 'Provided technical leadership and mentorship for development teams building enterprise-scale business solutions including ERP and custom CRM implementations. Developed comprehensive project roadmaps and technical strategies to ensure successful delivery. Led and managed a team of 6 developers, overseeing project execution and quality assurance throughout the development lifecycle.',
        image: '/services/management.svg',
        tags: ['Project Management', 'Consulting', 'Mentoring'],
        techStack: ['Agile', 'Scrum', 'Kanban', 'ClickUp', 'Slack']
    }
];