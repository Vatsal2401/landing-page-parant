import { ReactNode } from 'react';

interface BrowserFrameProps {
  children?: ReactNode;
  url?: string;
  /** 'browser' shows traffic lights + URL bar. 'window' shows traffic lights + title only (for desktop apps). */
  variant?: 'browser' | 'window';
  /** Window title shown in 'window' variant */
  title?: string;
  /** If provided, renders an iframe instead of children */
  src?: string;
  /** Scale factor for thumbnail mode (default 0.35). Ignored when interactive=true. */
  scale?: number;
  /** Interactive mode: full-height scrollable iframe. Use on detail pages. */
  interactive?: boolean;
  /** Height of content area in interactive mode. Default 600px. */
  height?: number;
}

export default function BrowserFrame({
  children,
  url = 'sparq.studio/demo',
  variant = 'browser',
  title,
  src,
  scale = 0.35,
  interactive = false,
  height = 600,
}: BrowserFrameProps) {
  return (
    <div
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid var(--bg-border)',
        background: 'var(--chrome-bg)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Chrome / window title bar */}
      <div
        style={{
          background: 'var(--chrome-bg)',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Traffic light dots */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block' }} />
        </div>

        {variant === 'browser' ? (
          /* URL bar */
          <div
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '5px',
              padding: '4px 10px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body), monospace',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {url}
          </div>
        ) : (
          /* Window title — centered */
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--text-muted)',
              }}
            >
              {title ?? url}
            </span>
          </div>
        )}
      </div>

      {/* Content area */}
      {interactive && src ? (
        <iframe
          src={src}
          title={title ?? url}
          style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
          {src ? (
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <iframe
                src={src}
                title={title ?? url}
                scrolling="no"
                style={{
                  width: `${100 / scale}%`,
                  height: `${100 / scale}%`,
                  border: 'none',
                  transformOrigin: 'top left',
                  transform: `scale(${scale})`,
                  pointerEvents: 'none',
                }}
              />
            </div>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}
