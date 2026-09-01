import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import StaticSearchDialog from '@/components/search-dialog';
import type { Metadata } from 'next';

const description =
  'vibeTeX is an MCP server for LaTeX and Overleaf projects: a Git bridge, project sync, and LaTeX compile for Claude and other MCP clients. Pull, edit, push, compile, and check references in your Overleaf and LaTeX projects from your assistant. Open-source and MIT-licensed.';

export const metadata: Metadata = {
  metadataBase: new URL('https://vibetex.dev'),
  title: {
    default: 'vibeTeX: Overleaf and LaTeX for Claude and other MCP clients',
    template: '%s · vibeTeX',
  },
  description,
  applicationName: 'vibeTeX',
  keywords: [
    'Overleaf MCP',
    'Overleaf MCP server',
    'LaTeX MCP',
    'LaTeX MCP server',
    'compile LaTeX from Claude',
    'Overleaf git bridge',
    'Overleaf for Claude',
    'Model Context Protocol',
    'LaTeX compile',
    'academic writing',
  ],
  authors: [{ name: 'Oscar Devos' }],
  openGraph: {
    type: 'website',
    url: 'https://vibetex.dev',
    siteName: 'vibeTeX',
    title: 'vibeTeX: Overleaf and LaTeX for Claude and other MCP clients',
    description:
      'An MCP server for LaTeX and Overleaf projects: Git bridge, project sync, and LaTeX compile for Claude and other MCP clients.',
    images: [{ url: '/og/home/image.png', width: 1200, height: 630, alt: 'vibeTeX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vibeTeX: Overleaf and LaTeX for Claude and other MCP clients',
    description:
      'An MCP server for LaTeX and Overleaf projects: Git bridge, project sync, and LaTeX compile for Claude and other MCP clients.',
    images: ['/og/home/image.png'],
  },
};

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['SOFT', 'opsz'],
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jet',
  weight: ['400', '500'],
  display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plex.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        {/* Mark JS as available before paint so .z-reveal content is visible
            without JS (crawlers/no-JS) and only hidden-then-revealed with it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <RootProvider search={{ SearchDialog: StaticSearchDialog }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
