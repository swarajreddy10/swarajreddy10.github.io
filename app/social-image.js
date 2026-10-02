import { ImageResponse } from 'next/og';

export const socialImageAlt = 'Swaraj Reddy, AI-native backend engineer';
export const socialImageSize = { width: 1200, height: 630 };

export function createSocialImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    padding: '84px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#FAF8EE',
                    color: '#550003',
                    fontFamily: 'serif',
                }}
            >
                <div style={{ fontSize: 78, fontStyle: 'italic' }}>Swaraj Reddy</div>
                <div style={{ marginTop: 24, color: '#6B6010', fontSize: 30, letterSpacing: '0.08em' }}>
                    AI-NATIVE BACKEND ENGINEER
                </div>
                <div style={{ marginTop: 34, maxWidth: 920, color: '#7A4A2A', fontSize: 30, lineHeight: 1.4 }}>
                    Go services, PostgreSQL search, AWS infrastructure, and applied AI.
                </div>
            </div>
        ),
        socialImageSize,
    );
}