import { ContactDetails } from '@/components/ContactDetails';
import { ContactUsToday } from '@/components/ContactUsToday';
import { Embed } from '@/components/Embed';
import { Tagline } from '@/components/Tagline';
import {
  companyName,
  aboutPageContent as paragraphs,
  embedSrc as src,
} from '@/content';

export function AboutPage() {
  return (
    <article className="page" data-name={AboutPage.name}>
      <section className="primary">
        <Embed src={src} />
        <div className="page-title">{companyName}</div>
        {paragraphs.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
        <ContactUsToday />
        <Tagline />
      </section>
      <ContactDetails />
    </article>
  );
}
