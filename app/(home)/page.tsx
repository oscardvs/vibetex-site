import Link from 'next/link';
import { CopyCommand } from '@/components/copy-command';
import { Reveal } from '@/components/reveal';
import { SiteFooter } from '@/components/site-footer';
import { gitConfig, hostedPrice, hostedPeriod, hostedBilling } from '@/lib/shared';

const repo = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

/* ── ultra-light line icons ──────────────────────────────────────────────── */
function Icon({ path, className = '' }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}
const I = {
  git: '<circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 8.4v7.2M8.2 7.2 15.8 9M18 11.3c0 3-2.4 4-6 4"/>',
  sync: '<path d="M4 9a8 8 0 0 1 13.7-4.2L20 7"/><path d="M20 4v3h-3"/><path d="M20 15a8 8 0 0 1-13.7 4.2L4 17"/><path d="M4 20v-3h3"/>',
  compile: '<path d="M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M14 4v4h4"/><path d="m9.5 13 2 2-2 2M13.5 17h1.5"/>',
  refs: '<path d="M9 11.5a3.5 3.5 0 0 1 0-5l1.8-1.8a3.5 3.5 0 0 1 5 5L14 6.5"/><path d="M15 12.5a3.5 3.5 0 0 1 0 5l-1.8 1.8a3.5 3.5 0 0 1-5-5L10 17.5"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2.2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  github:
    '<path d="M12 2.2A10 10 0 0 0 8.8 21.7c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.25-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"/>',
};

/* tiny vibeTeX glyph for the demo card chips */
function Mark({ size = 11 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M4 5.5h16v3.1h-6.05v9.9h-3.9V8.6H4V5.5Z" fill="currentColor" />
    </svg>
  );
}

/* ── faux demo card: a Claude chat doing pull → compile → check-refs ──────── */
function DemoCard() {
  return (
    <div className="z-bezel w-full">
      <div className="z-bezel-inner overflow-hidden">
        <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-fd-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fd-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-fd-foreground/15" />
          <span className="z-label ml-2 normal-case tracking-normal">Claude · vibeTeX connected</span>
          <span className="z-dot ml-auto" />
        </div>
        <div className="space-y-4 p-5 text-[0.92rem] leading-relaxed">
          <p className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-fd-foreground/5 px-4 py-2.5 text-fd-foreground">
            Pull my thesis from Overleaf, compile it, and fix any broken references.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {['overleaf_pull', 'latex_compile', 'latex_check_refs'].map((t) => (
              <span key={t} className="z-mono inline-flex items-center gap-1.5 rounded-md border border-fd-primary/25 bg-[var(--accent-soft)] px-2 py-1 text-[0.72rem] text-fd-primary">
                <Mark />
                {t}
              </span>
            ))}
          </div>
          <div className="space-y-2 text-fd-muted-foreground">
            <p>
              Pulled <span className="text-fd-foreground">thesis</span> via the git bridge and compiled with
              latexmk: <span className="text-fd-foreground">PDF built, 0 errors</span>. One cross-reference was
              dangling: <code className="z-mono text-[0.8rem]">{'\\ref{fig:results}'}</code> pointed at a figure whose
              label is actually <code className="z-mono text-[0.8rem]">fig:main-results</code>.
            </p>
            <p className="z-mono border-l-2 border-fd-primary/40 pl-3 text-[0.78rem]">
              <span className="text-fd-primary">edited</span> chapters/results.tex · line 142
              <br />
              <span className="text-fd-foreground">{'- see Figure \\ref{fig:results}'}</span>
              <br />
              <span className="text-fd-primary">{'+ see Figure \\ref{fig:main-results}'}</span>
            </p>
            <p>
              Pushed the fix back to Overleaf. Recompiled clean; every <span className="z-serif italic text-fd-foreground">\ref</span> and
              <span className="z-serif italic text-fd-foreground"> \cite</span> now resolves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TIERS = [
  {
    icon: I.git,
    title: 'Git bridge',
    body: 'Read, write, and commit history over Overleaf’s official git bridge. Pull, edit, push, and diff a local working copy of your project. Requires a paid Overleaf git token.',
    span: 'md:col-span-3',
  },
  {
    icon: I.compile,
    title: 'Local & CLSI compile',
    body: 'Build to PDF and parse the log with latexmk, tectonic (no TeX Live needed), or pdflatex, or point at a self-hosted CLSI. No Overleaf account is needed to compile locally.',
    span: 'md:col-span-3',
  },
  {
    icon: I.refs,
    title: 'Reference check',
    body: 'latex_check_refs checks every \\ref, \\cite, and \\label against your .bib files and document, so your assistant can repair the dangling ones.',
    span: 'md:col-span-2',
  },
  {
    icon: I.sync,
    title: 'Open in Overleaf',
    body: 'No account or auth needed: turn generated LaTeX into a new Overleaf project (one-way).',
    span: 'md:col-span-2',
  },
  {
    icon: I.spark,
    title: 'Free tier (experimental)',
    body: 'An opt-in, experimental session-cookie tier gives free Overleaf users list, pull, push, and compile. It is unofficial and off by default.',
    span: 'md:col-span-2',
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="z-grid pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/4 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 65%)' }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-32">
          <div>
            <span className="z-eyebrow z-rise">Open-source · Overleaf MCP server</span>
            <h1 className="z-display z-rise mt-6 text-[2.6rem] sm:text-6xl" style={{ animationDelay: '60ms' }}>
              Overleaf and LaTeX,<br />for Claude and<br />other MCP clients.
            </h1>
            <p className="z-rise mt-6 max-w-xl text-lg leading-relaxed text-fd-muted-foreground" style={{ animationDelay: '140ms' }}>
              vibeTeX is an MCP server for LaTeX and Overleaf projects: a <span className="z-serif italic text-fd-foreground">Git bridge,
              project sync, and LaTeX compile</span> for Claude and other MCP clients. Pull, edit, push, build the PDF,
              and check references from the chat.
            </p>
            <div className="z-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '220ms' }}>
              <CopyCommand />
              <Link href={repo} className="z-ghost" target="_blank" rel="noreferrer">
                <Icon path={I.github} className="text-fd-muted-foreground" />
                View on GitHub
              </Link>
            </div>
            <p className="z-label z-rise mt-6 normal-case tracking-[0.04em]" style={{ animationDelay: '300ms' }}>
              MIT-licensed · 26 tools · Local compile · Self-host free
            </p>
          </div>
          <Reveal className="z-rise" delay={120}>
            <DemoCard />
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT STRIP ─────────────────────────────────────────────────── */}
      <section className="border-b border-fd-border bg-fd-card/30">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-6">
          <span className="z-label">Works with</span>
          {['Claude Desktop', 'Claude Code', 'Cursor', 'VS Code', 'Zed', 'Gemini CLI'].map((c) => (
            <span key={c} className="z-mono text-sm text-fd-muted-foreground">{c}</span>
          ))}
        </div>
      </section>

      {/* ── INSTALL ──────────────────────────────────────────────────────── */}
      <section id="install" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24">
        <Reveal>
          <span className="z-eyebrow">Install</span>
          <h2 className="z-display mt-5 text-3xl sm:text-4xl">Install with one command.</h2>
          <p className="mt-4 max-w-2xl text-fd-muted-foreground">
            Local compile needs a TeX install and no Overleaf account. Add your Overleaf git token and a
            project id for read, write, and history over the official git bridge.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="z-bezel mt-10 w-full">
            <div className="z-bezel-inner grid gap-px overflow-hidden md:grid-cols-3">
              {[
                {
                  label: 'Claude Code',
                  cmd: 'claude mcp add vibetex \\\n  -e OVERLEAF_GIT_TOKEN=your_token \\\n  -e OVERLEAF_PROJECT_ID=your_id \\\n  -- npx -y @oscardvs/vibetex',
                },
                {
                  label: 'Cursor / VS Code (mcp.json)',
                  cmd: '"vibetex": {\n  "command": "npx",\n  "args": ["-y","@oscardvs/vibetex"],\n  "env": { "OVERLEAF_GIT_TOKEN": "…",\n           "OVERLEAF_PROJECT_ID": "…" }\n}',
                },
                {
                  label: 'claude.ai (hosted, paid)',
                  cmd: 'Add a custom connector →\nhttps://mcp.vibetex.dev/mcp',
                },
              ].map((s) => (
                <div key={s.label} className="bg-fd-card p-5">
                  <p className="z-label mb-3">{s.label}</p>
                  <pre className="z-mono whitespace-pre-wrap text-[0.78rem] leading-relaxed text-fd-foreground">{s.cmd}</pre>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="border-y border-fd-border bg-fd-card/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="z-display text-3xl sm:text-[2.6rem]">
              Your paper lives in Overleaf.<br />Your assistant can work on it there.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground">
              Without a bridge, you copy a section into chat, paste the suggestion back, switch tabs to compile,
              hunt the log for the error, then find a <span className="text-fd-foreground">dangling \ref</span>. With vibeTeX,
              your assistant <span className="z-serif italic text-fd-foreground">pulls, edits, pushes,
              compiles, and reference-checks</span> the project itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURES (bento) ─────────────────────────────────────────────── */}
      <section id="why" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24">
        <Reveal>
          <span className="z-eyebrow">Features</span>
          <h2 className="z-display mt-5 max-w-2xl text-3xl sm:text-4xl">
            Four capability tiers, detected at startup.
          </h2>
          <p className="mt-4 max-w-2xl text-fd-muted-foreground">
            vibeTeX uses whichever tiers your environment supports: the paid git token, local compile,
            no-auth project creation, or the experimental free-tier sync. <code className="z-mono text-sm text-fd-primary">overleaf_whoami</code> reports
            which tiers are active.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {TIERS.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className={f.span}>
              <div className="z-bezel h-full">
                <div className="z-bezel-inner flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-fd-primary">
                    <Icon path={f.icon} />
                  </span>
                  <h3 className="z-serif text-lg text-fd-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-fd-muted-foreground">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300} className="md:col-span-6">
            <div className="z-bezel">
              <div className="z-bezel-inner flex flex-wrap items-center gap-x-6 gap-y-2 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-fd-primary">
                  <Icon path={I.lock} />
                </span>
                <h3 className="z-serif text-lg text-fd-foreground">26 tools</h3>
                <p className="max-w-xl text-sm text-fd-muted-foreground">
                  Discovery, project sync, compile, and quality checks: outline, lint, format, word count,
                  and BibTeX. Your git token stays in your own environment and is used only to talk to Overleaf.
                </p>
                <Link href="/docs" className="z-ghost ml-auto text-sm">
                  Read the docs <Icon path={I.arrow} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <Reveal>
          <span className="z-eyebrow">Pricing</span>
          <h2 className="z-display mt-5 text-3xl sm:text-4xl">Self-host for free, or pay once for hosting.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="z-bezel h-full">
              <div className="z-bezel-inner flex h-full flex-col p-7">
                <h3 className="z-serif text-xl">Self-hosted</h3>
                <p className="z-display mt-3 text-4xl">Free</p>
                <p className="mt-2 text-sm text-fd-muted-foreground">MIT-licensed. Run it yourself.</p>
                <ul className="mt-5 space-y-2 text-sm text-fd-muted-foreground">
                  <li>· Every feature</li>
                  <li>· Runs on your machine with your own tokens</li>
                  <li>· Self-host the OAuth remote for a team</li>
                </ul>
                <CopyCommand className="mt-6" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="z-bezel h-full">
              <div className="z-bezel-inner flex h-full flex-col p-7">
                <h3 className="z-serif text-xl">Hosted</h3>
                <p className="z-display mt-3 text-4xl">{hostedPrice}<span className="text-lg text-fd-muted-foreground">{hostedPeriod}</span></p>
                <p className="mt-2 text-sm text-fd-muted-foreground">{hostedBilling}. A hosted connector, so there is nothing to run yourself.</p>
                <ul className="mt-5 space-y-2 text-sm text-fd-muted-foreground">
                  <li>· Connect in claude.ai as a custom connector</li>
                  <li>· One-time license key, 1-year expiry</li>
                  <li>· You keep your data &amp; tokens</li>
                </ul>
                <Link href="/pricing" className="z-ghost mt-6 w-fit">See hosted plan <Icon path={I.arrow} className="h-4 w-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-fd-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <Reveal>
            <h2 className="z-display text-4xl sm:text-5xl">Install vibeTeX</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fd-muted-foreground">
              One npx command. Open-source, MIT-licensed, and free to self-host.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CopyCommand />
              <Link href={repo} className="z-ghost" target="_blank" rel="noreferrer">
                <Icon path={I.github} className="text-fd-muted-foreground" /> View on GitHub
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <SiteFooter />
    </main>
  );
}
