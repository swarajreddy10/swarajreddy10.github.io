'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const SKILLS = [
    { name: 'React',         primary: true  },
    { name: 'Next.js',       primary: true  },
    { name: 'Python',        primary: true  },
    { name: 'FastAPI',       primary: true  },
    { name: 'Spring Boot',   primary: true  },
    { name: 'TypeScript',    primary: true  },
    { name: 'Node.js',       primary: true  },
    { name: 'Docker',        primary: true  },
    { name: 'PostgreSQL',    primary: false },
    { name: 'MongoDB',       primary: false },
    { name: 'OAuth2 / JWT',  primary: false },
    { name: 'Groq AI',       primary: false },
    { name: 'Gemini',        primary: false },
    { name: 'Claude API',    primary: false },
    { name: 'Tailwind',      primary: false },
    { name: 'Framer Motion', primary: false },
    { name: 'Prisma',        primary: false },
    { name: 'Playwright',    primary: false },
    { name: 'Vitest',        primary: false },
    { name: 'GitHub Actions',primary: false },
    { name: 'REST APIs',     primary: false },
    { name: 'Microservices', primary: false },
    { name: 'CI/CD',         primary: false },
    { name: 'FHIR R4',       primary: false },
    { name: 'Redis',         primary: false },
    { name: 'Flyway',        primary: false },
    { name: 'Pytest',        primary: false },
    { name: 'JUnit',         primary: false },
];

function WordCloud() {
    const groupRef = useRef();

    // Fibonacci sphere distribution
    const positions = useMemo(() => {
        const n = SKILLS.length;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const radius = 3.2;

        return SKILLS.map((_, i) => {
            const theta = (2 * Math.PI * i) / goldenRatio;
            const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
            return [
                Math.sin(phi) * Math.cos(theta) * radius,
                Math.cos(phi) * radius,
                Math.sin(phi) * Math.sin(theta) * radius,
            ];
        });
    }, []);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.elapsedTime * 0.14;
            groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.07) * 0.12;
        }
    });

    return (
        <group ref={groupRef}>
            {SKILLS.map((skill, i) => (
                <Text
                    key={skill.name}
                    position={positions[i]}
                    fontSize={skill.primary ? 0.28 : 0.19}
                    color={skill.primary ? '#22d3ee' : '#64748b'}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={skill.primary ? 0.008 : 0}
                    outlineColor="#22d3ee"
                    fillOpacity={skill.primary ? 1 : 0.75}
                >
                    {skill.name}
                </Text>
            ))}
        </group>
    );
}

export default function SkillSphere() {
    return (
        <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
        >
            <ambientLight intensity={2} />
            <WordCloud />
        </Canvas>
    );
}
