import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GraduationCap, BadgeCheck, Trophy, FileText, ExternalLink, X } from 'lucide-react';
import { Translation, Language, CertificationType } from './types';
import { CERTIFICATIONS } from './data';
import { Section } from './components';

// =================================
// 🎓 CERTIFICADOS Y HONORES
// =================================

const TYPE_ICONS: Record<CertificationType, React.ComponentType<{ className?: string }>> = {
  degree: GraduationCap,
  certification: BadgeCheck,
  honor: Trophy
};

interface ViewerDoc {
  src: string;
  title: string;
  width?: number;
  height?: number;
}

// Visor a pantalla completa dentro de la misma página (imágenes y PDFs)
const DocumentViewer: React.FC<{ doc: ViewerDoc; closeLabel: string; onClose: () => void }> = ({ doc, closeLabel, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const isPdf = doc.src.toLowerCase().endsWith('.pdf');

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-2"
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 rounded-full border border-line bg-surface text-muted hover:text-fg transition-colors"
        aria-label={closeLabel}
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        {isPdf ? (
          <iframe
            src={doc.src}
            title={doc.title}
            className="w-[96vw] max-w-6xl h-[94vh] rounded-lg bg-white"
          />
        ) : (
          <Image
            src={doc.src}
            alt={doc.title}
            width={doc.width ?? 1600}
            height={doc.height ?? 1600}
            sizes="96vw"
            className="rounded-sm bg-white shadow-2xl shadow-black/60"
            // Lo más grande posible sin salirse de la pantalla, respetando la proporción
            style={{
              width: `min(96vw, calc(96vh * ${(doc.width ?? 1600) / (doc.height ?? 1600)}))`,
              height: 'auto'
            }}
          />
        )}
      </div>
    </div>
  );
};

export const CertificationsSection: React.FC<{ t: Translation; language: Language }> = ({ t, language }) => {
  const [viewerDoc, setViewerDoc] = useState<ViewerDoc | null>(null);
  const closeViewer = React.useCallback(() => setViewerDoc(null), []);

  return (
    <Section id="certifications" title={t.certifications.title} subtitle={t.certifications.subtitle}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => {
          const Icon = TYPE_ICONS[cert.type];
          const hasImages = !!cert.images && cert.images.length > 0;
          const docHref = cert.file ?? cert.images?.[0]?.src;
          return (
            <article
              key={cert.title.en}
              className={`rounded-xl border border-line bg-surface overflow-hidden flex flex-col hover:border-muted/50 transition-colors ${hasImages ? 'md:col-span-2 md:flex-row' : ''}`}
            >
              {/* Miniatura del documento; al hacer clic se abre en grande en el visor */}
              {hasImages && (
                <div className="md:w-[45%] flex items-center justify-center gap-4 p-6 bg-raised border-b md:border-b-0 md:border-r border-line">
                  {cert.images!.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setViewerDoc({ ...img, title: cert.title[language] })}
                      className={`block w-full ${img.width > img.height ? 'max-w-[420px]' : 'max-w-[240px]'} cursor-zoom-in`}
                      aria-label={`${t.certifications.viewDocument}: ${cert.title[language]} (${i + 1}/${cert.images!.length})`}
                    >
                      <Image
                        src={img.src}
                        alt={`${cert.title[language]} (${i + 1}/${cert.images!.length})`}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 768px) 420px, 80vw"
                        className="w-full h-auto rounded bg-white ring-1 ring-line shadow-lg shadow-black/40"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className={`p-6 ${hasImages ? 'md:p-8 md:justify-center' : ''} flex flex-col flex-1`}>
                <p className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Icon className="w-4 h-4" />
                  {t.certifications.types[cert.type]}
                  <span className="text-muted">· {cert.date}</span>
                </p>

                <h3 className={`mt-4 font-semibold text-fg leading-snug ${hasImages ? 'text-xl' : 'text-lg'}`}>
                  {cert.title[language]}
                </h3>

                <div className="mt-3 flex items-center gap-3">
                  {cert.logo && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-md bg-raised p-1 flex items-center justify-center">
                      <Image src={cert.logo} alt="" width={24} height={24} className="object-contain w-full h-full" />
                    </div>
                  )}
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </div>

                {(docHref || cert.credentialUrl) && (
                  <div className="mt-auto pt-6 md:pt-8 flex flex-wrap gap-3">
                    {docHref && (
                      <button
                        type="button"
                        onClick={() => setViewerDoc({ src: docHref, title: cert.title[language], width: cert.images?.[0]?.width, height: cert.images?.[0]?.height })}
                        className="inline-flex items-center gap-2 min-h-11 px-4 py-2 rounded-lg border border-line text-sm text-fg hover:border-muted transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        {t.certifications.viewDocument}
                      </button>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-11 px-4 py-2 rounded-lg border border-line text-sm text-fg hover:border-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.certifications.verify}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {viewerDoc && <DocumentViewer doc={viewerDoc} closeLabel={t.certifications.close} onClose={closeViewer} />}
    </Section>
  );
};
