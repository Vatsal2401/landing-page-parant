interface ComingSoonCardProps {
  label: string;
  emoji: string;
  description: string;
}

export default function ComingSoonCard({ label, emoji, description }: ComingSoonCardProps) {
  return (
    <div
      style={{
        borderRadius: 'var(--card-r)',
        border: '2px dashed var(--bg-border)',
        background: 'var(--bg-surface)',
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        textAlign: 'center',
        minHeight: '280px',
        opacity: 0.5,
      }}
    >
      <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
      <span
        style={{
          fontSize: '13px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
        }}
      >
        {label}
      </span>
      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          margin: 0,
          maxWidth: '200px',
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
      <span
        style={{
          marginTop: '8px',
          padding: '4px 12px',
          borderRadius: '999px',
          background: 'rgba(14,39,59,0.05)',
          border: '1px solid var(--bg-border)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          fontWeight: 500,
        }}
      >
        Coming Soon
      </span>
    </div>
  );
}
