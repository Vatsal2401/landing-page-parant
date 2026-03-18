interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 500,
        background: 'rgba(14,39,59,0.06)',
        color: 'var(--text-secondary)',
        border: '1px solid var(--bg-border)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}
