import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

/* The vibeTeX mark: a stylized "T" stem with a dropped serif foot evoking a
   lowered-E TeX wordmark, plus a faint spark, drawn inline so it inherits the
   ember accent via currentColor (see `.z-bolt` in global.css). */
function Wordmark() {
  return (
    <span className="z-wordmark">
      <svg viewBox="0 0 24 24" width="15" height="15" className="z-bolt" aria-hidden="true">
        <path d="M4 5.5h16v3.1h-6.05v9.9h-3.9V8.6H4V5.5Z" fill="currentColor" />
        <path d="M15.4 14.2l4.4 4.4-2.2 1.0-3.0-3.6 0.8-1.8Z" fill="currentColor" opacity="0.55" />
      </svg>
      <span>vibeTeX</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Wordmark />,
      transparentMode: 'top',
    },
    links: [
      { text: 'Docs', url: '/docs' },
      { text: 'Pricing', url: '/pricing' },
      { text: 'Features', url: '/#why' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
