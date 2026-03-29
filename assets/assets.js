// Project data — used by Projects.jsx
export const workData = [
    {
        title: 'ResumeCanvas',
        tagline: 'AI-Powered Resume Builder',
        description: 'AI / Full Stack',
        link: 'https://www.resumecanvas.live/',
        github: 'https://github.com/swarajreddy10/Resume_Canvas',
        tech: ['Next.js 16', 'MongoDB', 'TypeScript', 'Groq AI', 'Puppeteer', 'NextAuth.js', 'Bun'],
        impact: 'Architected with JWT and Google OAuth; sub-100ms responses via caching; 7 targeted indexes cut query load by 60%',
        bullets: [
            'Delivered 8 AI features (ATS scoring, keyword analysis, cover letter generation, job matching) using Groq SDK with Llama 3.3 70B',
            '95.2% test coverage across 129 tests and 220 assertions via Bun Test and Playwright E2E',
            'Developed 5 resume templates with real-time preview and PDF export via Puppeteer; form validation with React Hook Form and Zod, auto-save, and public sharing with custom slugs',
        ],
        metrics: ['95.2% Tests', '<100ms', '8 AI Features'],
    },
    {
        title: 'StageWay',
        tagline: 'Built to enterprise standards',
        description: 'Full Stack',
        link: 'https://stage-way.vercel.app/',
        github: 'https://github.com/swarajreddy10/StageWay',
        tech: ['Spring Boot 3.2', 'PostgreSQL', 'Next.js 16', 'Docker', 'JWT', 'OAuth2', 'ZXing', 'Flyway'],
        impact: '100% API test coverage with OAuth2 JWT across 3 roles, 12 Flyway migrations, and QR code check-ins via ZXing',
        bullets: [
            '12 RESTful API endpoints with Spring Security, HikariCP connection pooling, and JPA/Hibernate ORM; integrated Recharts analytics and automated waitlist management',
            'Deployed with Docker multi-stage builds and CI/CD on Vercel CDN and Render auto-scaling with Spring Boot Actuator health monitoring and automated rollback',
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
            'Needed a portfolio that reflected real engineering standards, not a template. Designed and implemented a CSS custom property design system with 8 tokens (color, typography, shadow, spacing) shared across 10 components, achieving zero runtime JS for theme resolution and full visual consistency at build time',
            'Required rich scroll-driven interactions without bloating the bundle. Implemented stacking card reveals using Motion useScroll and useTransform with position:sticky, an SVG pathLength draw timeline, and an 11-language split-panel preloader, achieving 1.0s FCP, 1.5s LCP, and 30ms TBT on Lighthouse desktop audit',
            'Optimized the static export by lazy-loading all below-fold sections via Next.js dynamic imports, fixing WCAG AA contrast ratios, and adding aria-labels to all interactive elements, improving Lighthouse scores to 96 Accessibility, 100 Best Practices, and 100 SEO with 0 CLS and 20ms TBT',
        ],
        metrics: ['Static Export', 'Motion Animations'],
    },
];
