// access:
//   "public"       – live demo and/or source code are publicly available
//   "professional" – built in a professional role; public site may exist, source is not public
//   "client"       – client work; demo and code are confidential
//   "private"      – no public demo or source code
// Only links that are publicly usable are listed. Removed (Phase 1) because they
// were unreachable, login-only, or 404: AIRPHA staging URL, Viper Plus client
// login, Myspy login on a raw IP, and the Let's Connect GitHub repo (404).
// DumpDash's admin panel is a credential-only login page, so it is not linked.
//
// withholdPreview: the screenshot file is NOT rendered on the site because it
// shows confidential client data (names, phone numbers, addresses, private URLs).
// An empty `image` (without withholdPreview) means a screenshot is still to be added.
//
// highlights: contribution bullets taken from public/files/ArshadAli_CV.pdf.
// Thumbnails for AdPilot, Pixelfex and Carpica are screenshots of their public home pages.
// Carpica's description and stack reflect only what its live site shows (Next.js is
// detected from the page's /_next/ assets); no resume contribution bullets exist yet.
//
// Array order is display order.
export const projectsData = [
    {
        title: "AdPilot – Multi-Tenant Ads Automation SaaS",
        description:
            "Multi-tenant SaaS that builds and manages Google Ads and Meta Ads campaigns, with one workspace per business.",
        highlights: [
            "Designed and shipped an AI Campaign Assistant that reads production Google Ads data — spend, keywords, search terms, bids, conversions — and proposes approval-gated changes backed by server-enforced guardrails and a full audit trail.",
            "Implemented a safety-first launch model in which every campaign deploys paused until manually approved.",
            "Built manual and CSV keyword-entry interfaces over an existing backend.",
        ],
        tech: ["Next.js", "Google Ads", "Meta Ads"],
        image: "/images/adpilot.jpg",
        type: "Ads Automation SaaS",
        access: "professional",
        link: "https://adpilot-saas-omega.vercel.app/",
        linkLabel: "Visit Site",
        github: "",
    },
    {
        title: "Pixelfex – AI Wall-Art E-Commerce Platform",
        description:
            "Wall-art e-commerce platform. My work covered checkout and conversational ordering over WhatsApp.",
        highlights: [
            "Shipped Cashfree one-click checkout to production, reducing the purchase path to a single step.",
            "Built a conversational WhatsApp ordering bot that lets customers place and cancel orders in chat, using PostgreSQL with Drizzle ORM, Redis and Claude Sonnet via the Anthropic SDK, deployed on Railway.",
        ],
        tech: ["Next.js", "PostgreSQL", "Drizzle ORM", "Redis", "Anthropic SDK", "Claude", "Cashfree", "Railway"],
        image: "/images/pixelfex.jpg",
        type: "E-Commerce",
        access: "professional",
        link: "https://www.pixelfex.com/",
        linkLabel: "Visit Site",
        github: "",
    },
    {
        title: "DumpDash – On-Demand Waste Hauling Platform",
        description:
            "Customer and driver mobile apps for an on-demand waste hauling service, built with React Native for iOS and Android.",
        highlights: [
            "Built the customer app's end-to-end order flow — pickup requests, date/time and location selection, and multi-language support.",
            "Developed the driver app with live GPS tracking, map-based navigation, push notifications, Google and Apple sign-in, offline-aware job status and photo-proof uploads; released to iOS and Android via Expo EAS.",
        ],
        tech: ["React Native", "Expo Router", "Zustand", "React Hook Form", "Zod", "i18next", "React Native Paper", "Expo EAS"],
        image: "/images/dumpdash.jpg", // admin panel login page; mobile app screenshots still to add
        type: "Mobile Apps · iOS & Android",
        access: "professional",
        link: "",
        github: "",
    },
    {
        title: "Carpica – Luxury Rug E-Commerce Platform",
        description:
            "E-commerce storefront for handmade luxury rugs made in India — signature collections, collection stories and limited editions, with secure payments and WhatsApp support.",
        tech: ["Next.js"],
        image: "/images/carpica.jpg",
        type: "E-Commerce",
        access: "professional",
        link: "https://carpica.com/",
        linkLabel: "Visit Site",
        github: "",
    },
    {
        title: "Viper Plus – Intrusion Detection",
        description:
            "Dahua SDK-based intrusion detection with real-time alerts, S3 snapshot upload on detection and email alerting for ~500 concurrent users.",
        tech: ["Node.js", "Dahua SDK", "AWS S3", "Express", "MongoDB", "Socket.IO"],
        withholdPreview: true,
        type: "Intrusion Detection",
        access: "client",
        link: "",
        github: "",
    },
    {
        title: "Myspy Security",
        description:
            "Security camera installation and surveillance platform for a Melbourne-based security firm (Node.js, React, MongoDB, Redux, AWS).",
        tech: ["React.js", "Node.js", "MongoDB", "Redux", "AWS", "Tailwind CSS"],
        withholdPreview: true,
        type: "Security & Surveillance",
        access: "client",
        link: "",
        github: "",
    },
    {
        title: "Let's Connect – Voice Translation",
        description:
            "Real-time multilingual voice translation app for seamless global communication and live meetings.",
        tech: ["React.js", "Node.js", "WebSocket", "Translation API", "Tailwind CSS"],
        image: "/images/letsconnect.png",
        type: "Real-Time Communication",
        access: "private",
        link: "",
        github: "",
    },
    {
        title: "Zoho Form – Form Builder",
        description:
            "Drag-and-drop form builder with dynamic fields, offline support, and smooth MongoDB data sync.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/images/zohoform.png",
        type: "Form Builder",
        access: "private",
        link: "",
        github: "",
    },
    // Not listed in the current resume — kept (not removed) pending review.
    {
        title: "AIRPHA – Autonomous Drone Technology",
        description:
            "AI-powered drone system for warehouse automation, inspections, and logistics with real-time monitoring and intelligent navigation.",
        tech: ["Next.js", "Node.js", "TensorFlow", "Three.js", "AWS", "Tailwind CSS"],
        image: "/images/airpha.png",
        type: "AI & Robotics",
        access: "client",
        link: "",
        github: "",
    },
    {
        title: "Arshad Ali – Portfolio",
        description:
            "Personal portfolio built with Next.js and Tailwind CSS, featuring smooth animations, dark mode, and project showcases.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS", "React Icons"],
        image: "/images/portfolio.png",
        type: "Web Portfolio",
        access: "public",
        link: "https://arshad-ali.vercel.app/",
        github: "https://github.com/Ali-Repository101/my-portfolio",
    },
];
