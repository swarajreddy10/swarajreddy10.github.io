// Project data — used by Projects.jsx
export const workData = [
    {
        title: 'ResumeCanvas',
        tagline: 'AI Resume Builder',
        description: 'AI / Full Stack',
        link: 'https://www.resumecanvas.live/',
        github: 'https://github.com/swarajreddy10/Resume_Canvas',
        tech: ['Next.js 16', 'TypeScript', 'MongoDB', 'Groq AI', 'Puppeteer', 'Bun'],
        impact: 'Built a full-stack AI resume builder with JWT, Google OAuth, sub-100ms responses, and 7 targeted indexes that cut query load by 60%',
        bullets: [
            'Built 8 AI features, including ATS scoring, keyword analysis, cover letters, and job matching, using Groq Llama 3.3 70B',
            'Reached 95.2% test coverage across 129 tests and 220 assertions with Bun Test and Playwright E2E',
            'Shipped 5 resume templates with live preview, PDF export, auto-save, and public sharing via custom slugs',
        ],
        metrics: ['95.2% Coverage', 'Sub-100ms', '7 Indexes'],
    },
    {
        title: 'StageWay',
        tagline: 'Event Platform',
        description: 'Full Stack',
        link: 'https://stage-way.vercel.app/',
        github: 'https://github.com/swarajreddy10/StageWay',
        tech: ['Spring Boot 3.2', 'PostgreSQL', 'Next.js 16', 'Docker', 'OAuth2 / JWT', 'Flyway'],
        impact: 'Built a full-stack event platform with OAuth2 JWT across 3 roles, 12 Flyway migrations, QR code check-ins via ZXing, and 100% API test coverage',
        bullets: [
            'Built 12 RESTful endpoints with Spring Security, HikariCP, and JPA/Hibernate, plus Recharts analytics and automated waitlist management',
            'Shipped Docker multi-stage builds and CI/CD on Vercel and Render with Spring Boot Actuator monitoring and rollback',
        ],
        metrics: ['100% API Coverage', '3 Roles', 'QR Check-ins'],
    },
    {
        title: 'Portfolio',
        tagline: 'Engineering Portfolio',
        description: 'Design / Engineering',
        link: 'https://swarajreddy10.github.io',
        github: 'https://github.com/swarajreddy10/swarajreddy10.github.io',
        tech: ['Next.js', 'React', 'Motion', 'Tailwind CSS', 'Lenis'],
        impact: 'Built a statically exported Next.js portfolio with a reusable design system, component architecture, and GitHub Pages deployment',
        bullets: [
            'Built an 8-token CSS design system shared across 10 components, keeping theme resolution at build time and visual states consistent',
            'Shipped stacking card reveals, an SVG pathLength timeline, and an 11-language preloader with Motion useScroll and useTransform, reaching 1.0s FCP, 1.7s LCP, 20ms TBT, and 0 CLS',
            'Lazy-loaded below-fold sections and fixed WCAG AA contrast issues, finishing with 96 Accessibility, 100 Best Practices, and 100 SEO on Lighthouse',
        ],
        metrics: ['1.0s FCP', '96 Accessibility', '100 SEO'],
    },
];
