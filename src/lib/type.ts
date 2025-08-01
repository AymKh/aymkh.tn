import { ReactElement } from "react";

export type TNavItems = {
    name: string;
    link: string;
};

export type TStatsCard = {
    label: string;
    description: string;
}

export type TProcessItem = {
    title: string;
    duration: string;
    description: string;
    customList: string[];
};

export type TSocialsLinks = {
    name: string;
    href: string;
    icon: ReactElement;
}

export type TProject = {
    id: string;
    title: string;
    description: string;
    client?: string;
    link?: string;
    image: string;
    tags: string[];
    techStack: string[];
    longDescription?: string;
}

export type TService = {
    title: string;
    description: string;
    client: string;
    image: string;
    tags: string[];
    techStack: string[];
}