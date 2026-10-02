export default function IndianFlag({ size = 20 }) {
    const height = Math.round(size * (2 / 3));
    const centerX = size / 2;
    const centerY = height / 2;
    const radius = height * 0.3;
    const spokes = Array.from({ length: 24 }, (_, index) => {
        const angle = (index * 15 * Math.PI) / 180;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);
        return `M ${(centerX + radius * 0.18 * cosine).toFixed(3)} ${(centerY + radius * 0.18 * sine).toFixed(3)} L ${(centerX + radius * cosine).toFixed(3)} ${(centerY + radius * sine).toFixed(3)}`;
    }).join(' ');

    return (
        <svg
            width={size}
            height={height}
            viewBox={`0 0 ${size} ${height}`}
            className="indian-flag"
            aria-hidden="true"
            focusable="false"
        >
            <rect width={size} height={height / 3} fill="#FF9933" />
            <rect y={height / 3} width={size} height={height / 3} fill="#FFFFFF" />
            <rect y={(height * 2) / 3} width={size} height={height / 3} fill="#138808" />
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#000080" strokeWidth={size * 0.025} />
            <circle cx={centerX} cy={centerY} r={radius * 0.13} fill="#000080" />
            <path d={spokes} stroke="#000080" strokeWidth={size * 0.018} fill="none" />
        </svg>
    );
}