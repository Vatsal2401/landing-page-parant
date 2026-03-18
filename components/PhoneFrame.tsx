import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  /** Label shown below the notch — typically the app name */
  label?: string;
}

export default function PhoneFrame({ children, label }: PhoneFrameProps) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16/9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0E273B 0%, #1a3a52 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow behind the phone */}
      <div
        style={{
          position: 'absolute',
          width: '60%',
          height: '80%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Phone shell */}
      <div
        style={{
          position: 'relative',
          width: '38%',
          aspectRatio: '9/19',
          background: '#1a2744',
          borderRadius: '28px',
          border: '2px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Status bar */}
        <div
          style={{
            height: '24px',
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
            9:41
          </span>
          {/* Notch */}
          <div
            style={{
              width: '30%',
              height: '10px',
              background: '#0E273B',
              borderRadius: '0 0 8px 8px',
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
            }}
          />
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
            <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.6)' }}>●●●</span>
          </div>
        </div>

        {/* Screen content */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {children}
        </div>

        {/* Home indicator */}
        <div
          style={{
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: 'rgba(0,0,0,0.2)',
          }}
        >
          <div
            style={{
              width: '30%',
              height: '3px',
              borderRadius: '2px',
              background: 'rgba(255,255,255,0.3)',
            }}
          />
        </div>
      </div>

      {/* App name label */}
      {label && (
        <span
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '10px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
