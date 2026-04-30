'use client';

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const ROW1 = [
    { name: 'Python',      icon: 'python/python-original.svg'                            },
    { name: 'TypeScript',  icon: 'typescript/typescript-original.svg'                    },
    { name: 'Java',        icon: 'java/java-original.svg'                                },
    { name: 'Node.js',     icon: 'nodejs/nodejs-original.svg'                            },
    { name: 'FastAPI',     icon: 'fastapi/fastapi-original.svg'                          },
    { name: 'Spring Boot', icon: 'spring/spring-original.svg'                            },
    { name: 'PostgreSQL',  icon: 'postgresql/postgresql-original.svg'                    },
    { name: 'MongoDB',     icon: 'mongodb/mongodb-original.svg'                          },
];

const ROW2 = [
    { name: 'React',        icon: 'react/react-original.svg'                             },
    { name: 'Next.js',      icon: 'nextjs/nextjs-original.svg'                           },
    { name: 'Tailwind',     icon: 'tailwindcss/tailwindcss-original.svg'                 },
    { name: 'Docker',       icon: 'docker/docker-original.svg'                           },
    { name: 'AWS',          icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg'},
    { name: 'Azure',        icon: 'azure/azure-original.svg'                             },
    { name: 'Google Cloud', icon: 'googlecloud/googlecloud-original.svg'                 },
    { name: 'GitHub',       icon: 'github/github-original.svg'                           },
];

const TRACK1 = [...ROW1, ...ROW1, ...ROW1];
const TRACK2 = [...ROW2, ...ROW2, ...ROW2];

function PillCard({ name, icon }) {
    return (
        <span className="pill-card" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            marginRight: 10,
            borderRadius: 10,
            border: '1px solid var(--border)',
            background: 'var(--base)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            cursor: 'default',
            transition: 'border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease',
        }}>
            <img
                src={`${BASE}/${icon}`}
                alt={name}
                width={18} height={18}
                style={{ display: 'block', flexShrink: 0 }}
                draggable={false}
            />
            <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                transition: 'color 0.22s ease',
            }}>
                {name}
            </span>
        </span>
    );
}

function MarqueeRow({ items, reverse = false, speed = 40 }) {
    return (
        <div style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage:        'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: 'max-content',
                animation: `marquee-scroll ${speed}s linear infinite`,
                animationDirection: reverse ? 'reverse' : 'normal',
                willChange: 'transform',
            }}>
                {items.map((item, i) => (
                    <PillCard key={i} name={item.name} icon={item.icon} />
                ))}
            </div>
        </div>
    );
}

export default function Marquee() {
    return (
        <div
            aria-hidden
            style={{
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--surf)',
                padding: '20px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                userSelect: 'none',
                overflow: 'hidden',
            }}
        >
            <MarqueeRow items={TRACK1} reverse={false} speed={44} />
            <MarqueeRow items={TRACK2} reverse={true}  speed={36} />

        </div>
    );
}
