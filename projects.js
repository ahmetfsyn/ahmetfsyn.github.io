/**
 * Projects Data Registry
 * Single source of truth for all projects displayed on the portfolio.
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Create your project folder (e.g. "./my-app").
 * 2. Add an entry to the array below following the schema.
 * 3. Fields in `links` can be null or string URLs. Nullable fields won't render buttons.
 * 4. `icon.type` can be "image" (local path or URL in `src`) or "fontawesome" (icon class name in `src`).
 * 5. `status` can be "live", "development", or "archived".
 */

window.PROJECTS = [
    {
        id: "campuwise",
        name: "CampuWise",
        description: "CampuWise is your all-in-one campus assistant. It helps you stay updated with your university, announcements, ring schedules, cafeteria menus, and campus events.",
        icon: {
            type: "image",
            src: "./campuwise/images/logo.svg",
            alt: "CampuWise logo"
        },
        links: {
            website: "/campuwise/",
            github: null,
            playStore: "#",
            appStore: "#"
        },
        tags: ["Mobile App", "Campus", "Education"],
        technologies: ["React Native", "Expo", "Supabase", "TypeScript"],
        year: 2026,
        status: "live", // "live", "development", "archived"
        featured: true
    },
    {
        id: "aura-focus",
        name: "Aura Focus",
        description: "A minimalist assistant app with advanced features designed to boost your focus, time management, and daily productivity.",
        icon: {
            type: "image",
            src: "./aura-focus/app-icon.png",
            alt: "Aura Focus logo"
        },
        links: {
            website: "/aura-focus/",
            github: null,
            playStore: "#",
            appStore: null
        },
        tags: ["Mobile App", "Productivity", "Utility"],
        technologies: ["Android", "Kotlin", "Jetpack Compose"],
        year: 2026,
        status: "live", // "live", "development", "archived"
        featured: false
    }
];
