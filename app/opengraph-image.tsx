import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { PERSONAL_INFO } from './data';

// Imagen que se muestra al compartir el enlace (LinkedIn, WhatsApp, X...)
export const alt = `${PERSONAL_INFO.name} - Senior Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const [ROLE, ...FOCUS_AREAS] = PERSONAL_INFO.title.split(' | ');

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), 'public', PERSONAL_INFO.photo));
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '72px 88px',
          background: '#0b0d10',
          color: '#e6e8eb',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <div style={{ fontSize: 28, color: '#00ff41', fontFamily: 'monospace' }}>{ROLE}</div>
          <div style={{ marginTop: 20, fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
            {PERSONAL_INFO.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: '#8b949e', lineHeight: 1.4 }}>
            {FOCUS_AREAS.join(' · ')}
          </div>
          <div style={{ marginTop: 44, display: 'flex', fontSize: 22, color: '#8b949e', fontFamily: 'monospace' }}>
            <span style={{ color: '#00ff41', marginRight: 12 }}>&gt;</span>
            johnpaulmamani.dev
          </div>
        </div>

        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: 9999,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            background: '#111418',
            border: '2px solid #232830'
          }}
        >
          <img src={photoSrc} alt="" width={253} height={300} />
        </div>
      </div>
    ),
    size
  );
}
