interface ThumbnailFallbackProps {
  gradientFrom: string;
  gradientTo: string;
  emoji: string;
  title: string;
}

export default function ThumbnailFallback({
  gradientFrom,
  gradientTo,
  emoji,
  title,
}: ThumbnailFallbackProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '20px',
      }}
    >
      <span style={{ fontSize: '4rem', lineHeight: 1 }}>{emoji}</span>
      <span
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
    </div>
  );
}
