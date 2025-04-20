import { Category } from "../types";

export const categories: Category[] = [
    {
        id: "search-engines",
        name: "Search Engines",
        description: "Tools for searching the web and specific content types",
        icon: "search",
    },
    {
        id: "social-media",
        name: "Social Media",
        description: "Tools for gathering intelligence from social platforms",
        icon: "users",
    },
    {
        id: "domain-ip",
        name: "Domain & IP",
        description:
            "Tools for analyzing domains, IPs, and network information",
        icon: "globe",
    },
    {
        id: "images-media",
        name: "Images & Media",
        description:
            "Tools for analyzing and gathering information from visual media",
        icon: "image",
    },
    {
        id: "geolocation",
        name: "Geolocation",
        description: "Tools for geographical intelligence and mapping",
        icon: "map-pin",
    },
    {
        id: "darkweb",
        name: "Dark Web",
        description: "Tools for investigating dark web content and services",
        icon: "shield",
    },
    {
        id: "communication",
        name: "Communication",
        description: "Tools for analyzing communication data and metadata",
        icon: "message-circle",
    },
    {
        id: "Email",
        name: "Utilities",
        description: "General utilities and supporting tools for OSINT",
        icon: "tool",
    },
];
