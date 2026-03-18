import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/work"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
      }}
    >
      ← All Projects
    </Link>
  );
}
