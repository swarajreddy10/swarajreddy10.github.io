import { ImageResponse } from 'next/og';

export const socialImageAlt = 'Swaraj Reddy, Software Engineer across backend, full-stack, and applied AI';
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
                    SOFTWARE ENGINEER
                </div>
                <div style={{ marginTop: 34, maxWidth: 920, color: '#7A4A2A', fontSize: 30, lineHeight: 1.4 }}>
                    Backend, full-stack, cloud, and applied AI engineering.
                </div>
            </div>
        ),
        socialImageSize,
    );
}