'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const PARTICLE_COUNT = 2800;
const BRANCHES       = 4;
const SPIN           = 1.1;
const RANDOMNESS     = 0.4;
const RANDOMNESS_PWR = 3;
const INSIDE_COLOR   = new THREE.Color('#C8622A');
const OUTSIDE_COLOR  = new THREE.Color('#2A1F18');

function Galaxy() {
    const pointsRef = useRef();

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors    = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3         = i * 3;
            const radius     = Math.random() * 16 + 0.5;
            const spinAngle  = radius * SPIN;
            const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
            const rand = () =>
                Math.pow(Math.random(), RANDOMNESS_PWR) *
                (Math.random() < 0.5 ? 1 : -1) * RANDOMNESS;

            positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + rand() * radius;
            positions[i3 + 1] = rand() * radius * 0.12;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rand() * radius;

            const mixed = INSIDE_COLOR.clone().lerp(OUTSIDE_COLOR, Math.min(radius / 16, 1));
            colors[i3]     = mixed.r;
            colors[i3 + 1] = mixed.g;
            colors[i3 + 2] = mixed.b;
        }
        return [positions, colors];
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.elapsedTime * 0.035;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} count={PARTICLE_COUNT} itemSize={3} />
                <bufferAttribute attach="attributes-color"    array={colors}    count={PARTICLE_COUNT} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                sizeAttenuation
                transparent
                opacity={0.75}
                depthWrite={false}
            />
        </points>
    );
}

function CameraRig() {
    const { camera } = useThree();
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
            mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    useFrame(() => {
        camera.position.x += (mouse.current.x * 1.8 - camera.position.x) * 0.012;
        camera.position.y += (-mouse.current.y * 1.0 - camera.position.y) * 0.012;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 2.5, 22], fov: 58 }}
            gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
            dpr={[1, 1.5]}
            style={{ background: 'transparent' }}
        >
            <CameraRig />
            <Galaxy />
            <EffectComposer>
                <Bloom
                    intensity={1.1}
                    mipmapBlur
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.85}
                />
            </EffectComposer>
        </Canvas>
    );
}
