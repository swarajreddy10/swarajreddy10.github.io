// Project data — used by Projects.jsx
export const workData = [
    {
        title: 'ResumeCanvas',
        tagline: 'AI-Powered Resume Builder',
        description: 'AI / Full Stack',
        link: 'https://www.resumecanvas.live/',
        github: 'https://github.com/swarajreddy10/Resume_Canvas',
        tech: ['Next.js 16', 'MongoDB', 'TypeScript', 'Groq AI', 'Puppeteer', 'NextAuth.js', 'Bun'],
        impact: 'Architected a full-stack AI resume builder with JWT and Google OAuth, sub-100ms responses via caching, and 7 targeted indexes cutting query load by 60%',
        bullets: [
            'Delivered 8 AI features including ATS scoring, keyword analysis, and cover letter generation using Groq SDK with Llama 3.3 70B',
            'Achieved 95.2% test coverage across 129 tests and 220 assertions using Bun Test and Playwright E2E',
            'Developed 5 resume templates with real-time preview and PDF export via Puppeteer, with auto-save and public sharing via custom slugs',
        ],
        metrics: ['95.2% Tests', '<100ms', '8 AI Features'],
    },
    {
        title: 'StageWay',
        tagline: 'Event Management with Multi-Tenant Architecture',
        description: 'Full Stack',
        link: 'https://stage-way.vercel.app/',
        github: 'https://github.com/swarajreddy10/StageWay',
        tech: ['Spring Boot 3.2', 'PostgreSQL', 'Next.js 16', 'Docker', 'JWT', 'OAuth2', 'ZXing', 'Flyway'],
        impact: 'Built a full-stack event management platform with OAuth2 JWT across 3 roles, 12 Flyway migrations, and QR code check-ins via ZXing, achieving 100% API test coverage',
        bullets: [
            'Implemented 12 RESTful endpoints with Spring Security, HikariCP connection pooling, and JPA/Hibernate ORM, with Recharts analytics and automated waitlist management',
            'Deployed with Docker multi-stage builds and CI/CD on Vercel and Render, with Spring Boot Actuator health monitoring and automated rollback',
        ],
        metrics: ['100% API Coverage', '3 Roles', 'QR Check-ins'],
    },
    {
        title: 'Portfolio',
        tagline: 'This website',
        description: 'Design / Engineering',
        link: 'https://swarajreddy10.github.io',
        github: 'https://github.com/swarajreddy10/swarajreddy10.github.io',
        tech: ['Next.js', 'React', 'Motion', 'Tailwind CSS', 'Lenis'],
        impact: 'Designed and built a production-grade personal portfolio as a statically exported Next.js app, treating it as a real engineering project with a defined design system, component architecture, and CI/CD deployment to GitHub Pages',
        bullets: [
            'Built an 8-token CSS design system shared across 10 components, achieving zero runtime JS for theme resolution and full visual consistency at build time',
            'Implemented stacking card reveals, an SVG pathLength timeline, and an 11-language preloader using Motion useScroll and useTransform, reaching 1.0s FCP and 30ms TBT on Lighthouse',
            'Lazy-loaded all below-fold sections and resolved WCAG AA contrast issues, scoring 96 Accessibility, 100 SEO, and 0 CLS on Lighthouse',
        ],
        metrics: ['Static Export', 'Motion Animations'],
    },
];
