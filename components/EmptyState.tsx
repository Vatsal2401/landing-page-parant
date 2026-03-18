interface EmptyStateProps {
  onReset: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div
      style={{
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: '80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <span style={{ fontSize: '3rem' }}>🔍</span>
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          margin: 0,
        }}
      >
        No projects match these filters
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          margin: 0,
          maxWidth: '320px',
        }}
      >
        Try adjusting your filters or browse all categories to see our full portfolio.
      </p>
      <button
        onClick={onReset}
        style={{
          marginTop: '8px',
          padding: '10px 24px',
          borderRadius: '8px',
          background: 'var(--color-purple)',
          border: '1px solid var(--color-purple)',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) =>
          ((e.currentTarget as HTMLElement).style.background = 'var(--color-purple-hover)')
        }
        onMouseOut={(e) =>
          ((e.currentTarget as HTMLElement).style.background = 'var(--color-purple)')
        }
      >
        Clear filters
      </button>
    </div>
  );
}
