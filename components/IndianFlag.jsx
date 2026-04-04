export default function IndianFlag({ size = 20 }) {
    const h = Math.round(size * (2 / 3));
    const cx = size / 2;
    const cy = h / 2;
    const r = h * 0.3;
    const spokes = Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return `M ${(cx + r * 0.18 * cos).toFixed(3)} ${(cy + r * 0.18 * sin).toFixed(3)} L ${(cx + r * cos).toFixed(3)} ${(cy + r * sin).toFixed(3)}`;
    }).join(' ');

    return (
        <svg
            width={size} height={h}
            viewBox={`0 0 ${size} ${h}`}
            style={{ display: 'inline', verticalAlign: 'middle', borderRadius: 2, flexShrink: 0 }}
            aria-label="Indian flag"
        >
            <rect width={size} height={h / 3} fill="#FF9933" />
            <rect y={h / 3} width={size} height={h / 3} fill="#FFFFFF" />
            <rect y={(h * 2) / 3} width={size} height={h / 3} fill="#138808" />
            {/* Ashoka Chakra */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#000080" strokeWidth={size * 0.025} />
            <circle cx={cx} cy={cy} r={r * 0.13} fill="#000080" />
            <path d={spokes} stroke="#000080" strokeWidth={size * 0.018} fill="none" />
        </svg>
    );
}
