// Single source for the About section: profile copy, experience and education.
// Experience roles/dates, Fabcode project bullets and the BCA year follow
// public/files/ArshadAli_CV.pdf. SquadMinds bullets are the earlier portfolio copy.

export const profile = {
    intro:
        "From late-night coding sessions during my BCA to building real-world MERN applications — here’s how my passion for development turned into a full-time career.",
    approach:
        "Passionate about building fast, reliable, and modern web apps — always exploring new technologies to create better digital experiences.",
    // Resume headline: "Full Stack Developer | React Native · Next.js · Node.js · MERN"
    coreStack: ["React Native", "Next.js", "Node.js", "MERN"],
};

export const experience = [
    {
        role: "Full Stack Developer",
        organization: "The Fabcode IT Solutions LLP",
        period: "Dec 15, 2025 – Present",
        projects: [
            {
                title: "DumpDash – On-Demand Waste Hauling Platform (React Native, iOS & Android)",
                items: [
                    "Built the customer app's end-to-end order flow – pickup requests, date/time and location selection, multi-language support – with React Native (Expo Router), Zustand, React Hook Form with Zod validation, i18next and React Native Paper.",
                    "Developed the driver app with live GPS tracking, map-based navigation, push notifications, Google and Apple sign-in, offline-aware job status and photo-proof uploads; released to iOS and Android via Expo EAS.",
                ],
            },
            {
                title: "AdPilot / Google AdsPilot – Multi-Tenant Ads Automation SaaS (Next.js)",
                items: [
                    "Designed and shipped an AI Campaign Assistant on the live Stats page that reads production Google Ads data – spend, keywords, search terms, bids, conversions – and proposes approval-gated changes backed by server-enforced guardrails and a full audit trail.",
                    "Implemented a safety-first launch model in which every campaign deploys paused until manually approved, protecting client ad spend.",
                    "Closed feature-parity gaps between two related codebases by building manual and CSV keyword-entry interfaces over an existing backend.",
                ],
            },
            {
                title: "Pixelfex – AI Wall-Art E-Commerce Platform (Next.js)",
                items: [
                    "Shipped Cashfree one-click checkout to production, reducing the purchase path to a single step.",
                    "Built a conversational WhatsApp ordering bot letting customers place and cancel orders in chat, using Next.js, PostgreSQL with Drizzle ORM, Redis and Claude Sonnet via the Anthropic SDK, deployed on Railway.",
                ],
            },
            {
                title: "Shopify App Development",
                items: [
                    "Developed pixelfex-whatsapp-notification, a Shopify embedded admin app (React Router 7) for WhatsApp campaign and audience management, owning the shared PostgreSQL schema across services.",
                    "Built Shopify AI Blog Generator, an automated SEO pipeline that crawls the storefront, researches keywords via DataForSEO, drafts long-form articles with Claude, generates a hero image and saves each as a merchant-reviewable draft.",
                    "Delivered the VisualFlow AI frontend, a bilingual (Hindi/English), India-only Shopify embedded app built with React 18, TypeScript, Shopify App Bridge, Zustand and TanStack Query.",
                ],
            },
        ],
        // Every technology named in the Fabcode bullets above, in order of first
        // mention (not a ranking), spelled as in the Skills list so highlights match.
        stack: [
            "React Native", "Expo / EAS", "Zustand", "React Hook Form", "Zod", "i18next",
            "React Native Paper", "Next.js", "PostgreSQL", "Drizzle ORM", "Redis",
            "Anthropic SDK", "Claude", "Railway", "Cashfree", "React Router 7",
            "DataForSEO", "React", "TypeScript", "Shopify App Bridge", "TanStack Query",
        ],
    },
    {
        role: "MERN Stack Developer",
        organization: "SquadMinds Private Limited, Mohali",
        period: "Aug 2022 – Dec 13, 2025",
        responsibilities: [
            "Building and maintaining full-stack MERN applications",
            "Developing interactive, optimized UIs using React and Tailwind CSS",
            "API integrations, server-side logic, and MongoDB data modeling",
            "AWS deployments and S3 integrations for cloud storage",
            "Collaborating in agile teams to deliver scalable web solutions",
        ],
        stack: ["React", "Node.js", "MongoDB", "AWS"],
    },
];

export const education = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Sri Guru Gobind Singh College Chandigarh",
        period: "2022",
        coursework: [
            "Programming Fundamentals",
            "Database Systems",
            "Software Engineering",
            "Web Development",
        ],
    },
];

export const isCurrent = (period) => /present$/i.test(period);

/** "Dec 15, 2025 – Present" → "Dec 15, 2025" (accepts en dash or hyphen). */
export const periodStart = (period) => period.split(/\s+[–-]\s+/)[0];

/** Compare technology names across data sets ("React" ≙ "React.js", "AWS" ≙ "AWS (S3)"). */
export const normalizeTech = (name) =>
    name.toLowerCase().replace(/\s*\(.*?\)/g, "").replace(/\.js$/, "").replace(/[^a-z0-9]/g, "");
