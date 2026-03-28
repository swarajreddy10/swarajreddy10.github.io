'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const ACCENT = '#C8622A';
const BORDER = '#252220';
const MUTED  = '#4A4743';

const LINKS = [
    { href: 'mailto:swarajchandra22@gmail.com',    Icon: Mail,     label: 'Email'              },
    { href: 'https://linkedin.com/in/swarajreddy', Icon: Linkedin, label: 'LinkedIn', ext: true },
    { href: 'https://github.com/swarajreddy10',    Icon: Github,   label: 'GitHub',   ext: true },
];

export default function Footer() {
    return (
        <footer className="border-t" style={{ borderColor: BORDER, background: '#09080A' }}>
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10">

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-mono text-sm font-bold tracking-[0.25em] transition-opacity hover:opacity-70"
                    style={{ color: ACCENT }}
                >
                    Swaraj.
                </button>

                <p className="font-mono text-[11px]" style={{ color: MUTED }}>
                    © {new Date().getFullYear()} Swaraj Chandra Reddy M · Hyderabad, India
                </p>

                <div className="flex gap-3">
                    {LINKS.map(({ href, Icon, label, ext }) => (
                        <a key={label} href={href}
                            target={ext ? '_blank' : undefined}
                            rel={ext ? 'noopener noreferrer' : undefined}
                            aria-label={label}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
                            style={{ borderColor: BORDER, color: MUTED, background: '#111010' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}40`; e.currentTarget.style.color = ACCENT; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
