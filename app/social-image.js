import { ImageResponse } from 'next/og';
import { PROFILE } from '../data/site';

// Commas rather than the visible middle dots, which some screen readers read aloud.
export const socialImageAlt = `${PROFILE.name}, ${PROFILE.role}: ${PROFILE.focus.replaceAll(' · ', ', ')}. ${PROFILE.positioning}`;
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
                <div style={{ fontSize: 78, fontStyle: 'italic' }}>{PROFILE.name}</div>
                <div style={{ marginTop: 24, color: '#6B6010', fontSize: 30, letterSpacing: '0.08em' }}>
                    {PROFILE.role.toUpperCase()}
                </div>
                <div style={{ marginTop: 34, maxWidth: 920, color: '#7A4A2A', fontSize: 30, lineHeight: 1.4 }}>
                    {/* One string: next/og (Satori) needs display: flex for more than one child node. */}
                    {`${PROFILE.focus}. ${PROFILE.positioning}`}
                </div>
            </div>
        ),
        socialImageSize,
    );
}