'use client';

const ITEMS = [
    'Full-Stack Engineering',
    'Microservices',
    'LLM Integration',
    'React · Next.js',
    'Spring Boot',
    'Node.js',
    'Docker',
    'AWS',
    'CI/CD',
    'FastAPI',
    'PostgreSQL',
    'TypeScript',
];

// Duplicate so the seamless loop has enough width on any screen
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

const SEP = (
    <span aria-hidden style={{
        display: 'inline-block',
        width: 4, height: 4, borderRadius: '50%',
        background: 'var(--accent)',
        opacity: 0.45,
        margin: '0 28px',
        flexShrink: 0,
        verticalAlign: 'middle',
    }} />
);

export default function Marquee({ speed = 40 }) {
    // speed in seconds for one full track cycle
    const duration = `${speed}s`;

    return (
        <div
            aria-hidden
            style={{
                overflow: 'hidden',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--surf)',
                padding: '13px 0',
                userSelect: 'none',
            }}
        >
            <div style={{
                display: 'flex',
                width: 'max-content',
                animation: `marquee-scroll ${duration} linear infinite`,
                willChange: 'transform',
            }}>
                {TRACK.map((item, i) => (
                    <span key={i} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                    }}>
                        {item}
                        {SEP}
                    </span>
                ))}
            </div>
        </div>
    );
}
