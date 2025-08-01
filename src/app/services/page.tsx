import SectionTitle from '@/components/ui/sectionTitle';
import React from 'react';

function Page() {
    const services = [
        {
            category: "UI / UX DESIGN",
            leftColumn: [
                "App Design",
                "Website Design",
                "Landing Page Design"
            ],
            rightColumn: [
                "Design Systems",
                "Wireframing",
                "Prototyping"
            ]
        },
        {
            category: "WEB DEVELOPMENT",
            leftColumn: [
                "React Development",
                "Angular Development",
                "Next.js Development"
            ],
            rightColumn: [
                "Node.js Backend",
                "API Integration",
                "Database Design"
            ]
        },
        {
            category: "DEVOPS & CLOUD",
            leftColumn: [
                "AWS Infrastructure",
                "Docker Containerization",
                "CI/CD Pipelines"
            ],
            rightColumn: [
                "Cloud Optimization",
                "Deployment Automation",
                "Monitoring & Scaling"
            ]
        },
        {
            category: "THIRD-PARTY INTEGRATIONS",
            leftColumn: [
                "Authentication (Auth0)",
                "Email Services (SendGrid)",
                "Payment Gateways"
            ],
            rightColumn: [
                "Self-Hosted Alternatives",
                "Media Management (ImageKit)",
                "Cost Optimization"
            ]
        },
        {
            category: "TECHNICAL LEADERSHIP",
            leftColumn: [
                "Team Mentoring",
                "Code Review Systems",
                "Development Standards"
            ],
            rightColumn: [
                "Project Management",
                "Agile Implementation",
                "Technical Documentation"
            ]
        }
    ];

    return (
        <div className="px-4 max-w-[var(--max-width)] flex flex-col gap-24 items-start lg:py-24 py-16 lg:px-0 mx-auto">
            <SectionTitle title='What I do?' subTitle="services" />

            {services.map((service, index) => (
                <div key={index} className="border-t border-border py-12 w-full">
                    <h2 className="text-4xl font-bold mb-10">{service.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {service.leftColumn.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-gray-300 hover:text-white transition-colors">
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {service.rightColumn.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-gray-300 hover:text-white transition-colors">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Page;