import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, Sec } from '@/components/legal-page';
import { contactEmail, operator, hostedPrice, repoUrl, disclaimer } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for the open-source vibeTeX connector (MIT) and the optional pay-once hosted license.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="5 June 2026"
      intro={
        <>
          These terms cover the vibeTeX website and the optional hosted license operated by{' '}
          {operator}. The open-source connector itself is governed by its{' '}
          <a href={`${repoUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a>.
        </>
      }
    >
      <Sec h="The open-source connector">
        <p>
          vibeTeX is free and open-source software provided under the MIT License, <strong>“as is”,
          without warranty</strong> of any kind. You’re free to self-host and modify it per that license.
        </p>
      </Sec>

      <Sec h="The hosted license">
        <ul>
          <li>The hosted connector is a <strong>one-time {hostedPrice} purchase</strong> that grants a license key valid for <strong>one year</strong>, billed through Polar (the merchant of record). It is not a recurring subscription and does not auto-renew.</li>
          <li>Refunds follow Polar’s policy and your statutory rights; the one-time fee is otherwise non-refundable once the license has been issued and used.</li>
          <li>The service is provided on a reasonable-effort basis with <strong>no uptime SLA</strong>. We may change, suspend, or discontinue it with reasonable notice; you can always self-host the identical open-source connector for free.</li>
          <li>As an EU consumer you have a <strong>14-day right of withdrawal</strong>. By starting to use the hosted connector immediately, you ask us to begin the service during this period and acknowledge that you lose the right of withdrawal once the digital service has been fully provided; otherwise you may withdraw within 14 days.</li>
          <li>If you use vibeTeX to process other people’s personal data and need a <strong>Data Processing Addendum</strong> (Article 28 GDPR), email us and we’ll provide one.</li>
        </ul>
      </Sec>

      <Sec h="The experimental session-cookie tier">
        <p>
          vibeTeX includes an unofficial, experimental session-cookie tier that is <strong>off by
          default</strong>. If you enable it you do so with your own Overleaf session cookie and at
          your own risk; it is best-effort and may break or contravene Overleaf’s terms of service.
          You are responsible for your use of it. The hosted license does not rely on it.
        </p>
      </Sec>

      <Sec h="Acceptable use">
        <p>
          Use the hosted connector only with your own Overleaf account and projects, lawfully, and
          without attempting to overload, abuse, reverse-engineer the hosted infrastructure, or access
          other users’ data. We may suspend access for misuse.
        </p>
      </Sec>

      <Sec h="No warranty & liability">
        <p>
          The service and software are provided “as is”. To the extent permitted by law, we disclaim
          all warranties and are not liable for indirect or consequential damages; our total liability
          is limited to the fee you paid in the prior 12 months. vibeTeX is a tool — you remain
          responsible for verifying any output, including compiled documents and references, before
          relying on it.
        </p>
      </Sec>

      <Sec h="Trademarks">
        <p>
          “Overleaf” is a trademark of Digital Science. vibeTeX works <em>with</em> Overleaf but is not
          affiliated with, sponsored by, or endorsed by it. {disclaimer}
        </p>
      </Sec>

      <Sec h="Changes & contact">
        <p>
          We may update these terms; material changes will be reflected by the “last updated” date.
          These terms are governed by the laws of <strong>Belgium</strong>, where the operator is
          based, and any disputes fall to the competent Belgian courts. If you are a consumer resident
          elsewhere in the EU, this does not deprive you of the mandatory consumer protections of your
          country of residence, which continue to apply. Questions:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. See also our{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Sec>
    </LegalPage>
  );
}
