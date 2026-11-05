// Every fact on this site lives in data/. The career toolkit's master facts are the source:
// its scripts/check-public-claims.py fails when a figure here is missing from them.
export const PROFILE = {
    name: 'Swaraj Reddy',
    fullName: 'Swaraj Chandra Reddy M',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    focus: 'Backend · Go · PostgreSQL · AWS',
    positioning: 'I research before I build and measure before I change.',
    // The hero's proof line, with its figure emphasised.
    proof: { lead: 'On SpotMyJob\'s job pipeline, that raised throughput ', figure: '64%', tail: ' with no new infrastructure.' },
    availability: 'Open to backend, full-stack, platform, and AI engineering roles: remote, hybrid, or on-site.',
    description: 'Swaraj Reddy, Software Engineer for backend systems in Go, PostgreSQL, and AWS. He researches before he builds and measures before he changes: 64% more throughput on SpotMyJob\'s job pipeline with no new infrastructure.',
};

export const NAV_LINKS = [
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

export const SOCIAL_LINKS = [
    {
        label: 'Email',
        value: 'swarajchandra22@gmail.com',
        href: 'mailto:swarajchandra22@gmail.com',
        hint: 'Email',
        icon: 'mail',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/swarajreddy',
        href: 'https://linkedin.com/in/swarajreddy',
        hint: 'LinkedIn',
        icon: 'linkedin',
        external: true,
    },
    {
        label: 'GitHub',
        value: 'github.com/swarajreddy10',
        href: 'https://github.com/swarajreddy10',
        hint: 'GitHub',
        icon: 'github',
        external: true,
    },
];

export const RESUME_PATH = '/Swarajreddy_Software_Engineer.pdf';

// GoatCounter site code (the MYCODE in https://MYCODE.goatcounter.com). Null renders no counter.
export const GOATCOUNTER_CODE = 'swarajreddy';
