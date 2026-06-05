import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, Sec } from '@/components/legal-page';
import { contactEmail, operator, disclaimer } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What vibeTeX stores, why, and your rights — for the open-source connector and the optional hosted tier.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="5 June 2026"
      intro={
        <>
          vibeTeX, operated by {operator}, is an open-source MCP server that connects your Overleaf
          and LaTeX projects to AI assistants. This policy covers the website, the self-hosted
          connector, and the optional <Link href="/pricing">hosted tier</Link>. The short version:
          if you self-host, we never see your data; if you use the hosted tier, we hold the minimum
          needed to run it for the duration of your session, and you can delete it at any time.
        </>
      }
    >
      <Sec h="Self-hosting: we collect nothing">
        <p>
          The open-source connector runs on <strong>your own machine or server</strong>. Your
          Overleaf git token, session cookie (if you opt into the experimental tier), and project
          content flow only between your device, Overleaf, and the AI client you choose. We have no
          access to any of it, and the connector phones home to nobody.
        </p>
      </Sec>

      <Sec h="The hosted tier: what we hold">
        <p>If you buy the hosted connector, we hold only what’s required to operate it:</p>
        <ul>
          <li><strong>Your Overleaf git authentication token</strong>, used solely to access <em>your</em> projects on your behalf. It is transmitted over TLS and held only for the duration of your session — <strong>it is not stored beyond the session</strong>.</li>
          <li><strong>Your license key and account email</strong>, to validate the 1-year hosted license and provide support (the purchase is managed via Polar — see Payments).</li>
          <li><strong>Operational logs</strong> with secrets redacted, kept for reliability and abuse prevention and deleted within 30 days.</li>
        </ul>
        <p>
          We act as a <strong>data processor</strong> for your project data — you remain in control
          of it. We do not read, mine, sell, or use your LaTeX, PDFs, or projects to train anything.
          Access stays scoped to your own Overleaf projects.
        </p>
        <p>
          We process your account email and license status because they are necessary to provide the
          hosted license you bought (<strong>Article 6(1)(b) GDPR</strong> — performance of our
          contract with you). We keep short-term operational logs on the basis of our legitimate
          interest in keeping the service reliable and preventing abuse (Article 6(1)(f) GDPR).
        </p>
      </Sec>

      <Sec h="The experimental session-cookie tier">
        <p>
          The unofficial, experimental session-cookie tier is <strong>off by default</strong> and is
          something <em>you</em> enable on your own machine by pasting your own Overleaf
          <code> overleaf_session2</code> cookie. We never ask for, receive, or store your Overleaf
          password. This tier is best-effort and grey-area under Overleaf’s terms — use it at your
          own discretion. The hosted tier does not use it.
        </p>
      </Sec>

      <Sec h="Payments">
        <p>
          Checkout and the license key are handled by <a href="https://polar.sh" target="_blank" rel="noreferrer">Polar</a> as
          the merchant of record. We never see your card details. Polar processes your payment data
          under its own privacy policy.
        </p>
      </Sec>

      <Sec h="Sub-processors">
        <ul>
          <li><strong>Polar</strong> — checkout, payments, and license issuance.</li>
          <li><strong>Vercel</strong> — hosts this website and the hosted-connector edge/serverless runtime.</li>
          <li><strong>Your own Overleaf account</strong> — the source of the project data you ask us to access.</li>
        </ul>
      </Sec>

      <Sec h="International transfers">
        <p>
          The website and hosted connector run on Vercel’s infrastructure, which may process data in
          the <strong>United States</strong>. Where personal data is transferred outside the EEA, we
          rely on Standard Contractual Clauses (and, where applicable, the EU–US Data Privacy
          Framework) as the safeguard under Articles 44–46 GDPR. If you <strong>self-host</strong>,
          no transfer takes place at all.
        </p>
      </Sec>

      <Sec h="Retention & deletion">
        <p>
          Your Overleaf token is held only for the duration of an active session and is not persisted.
          Revoke the token in Overleaf at any time to cut off access immediately. We keep your license
          email/status while your 1-year license is active; email us to delete your stored account
          data outright and we’ll do so within 30 days.
        </p>
      </Sec>

      <Sec h="Your rights">
        <p>
          Where the GDPR applies, you can request access, correction, deletion, portability, or
          restriction of your data, and object to processing based on our legitimate interest. Contact{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> and we’ll respond promptly. You also have
          the right to lodge a complaint with your data protection authority — in Belgium, the{' '}
          <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noreferrer">
            Gegevensbeschermingsautoriteit / Autorité de protection des données
          </a>.
        </p>
      </Sec>

      <Sec h="Security">
        <p>
          Traffic is served over HTTPS, secrets are redacted from logs, and access is scoped to your
          own Overleaf projects. No system is perfectly secure, but we keep the held surface area
          deliberately small — your token is never stored beyond the session.
        </p>
      </Sec>

      <Sec h="Contact">
        <p>
          The data controller for the hosted tier is <strong>Oscar Devos</strong>, operating vibeTeX
          from Belgium. You can reach the controller at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> for
          any privacy question or data request. {disclaimer}
        </p>
      </Sec>
    </LegalPage>
  );
}
