import { ContactDetails } from '@/components/ContactDetails';
import { ContactUsToday } from '@/components/ContactUsToday';
import { Image } from '@/components/Image';
import { Tagline } from '@/components/Tagline';
import { bathroomsPageContent } from '@/content';

export function BathroomsPage() {
  const { title, listTitle, paragraphs, items } = bathroomsPageContent;

  return (
    <article className="page" data-name={BathroomsPage.name}>
      <section className="primary">
        <div className="page-title">{title}</div>
        <p>{paragraphs[0]}</p>
        <p className="image">
          <Image
            alt={title}
            className="inline-image"
            loading="lazy"
            src="/images/bathroom-page.jpg"
            style={{
              aspectRatio: 800 / 451,
              width: '100%',
              maxWidth: 800,
            }}
          />
        </p>
        <p>{paragraphs[1]}</p>
        <div className="section-header">{listTitle}</div>
        <ul className="list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ContactUsToday />
        <Tagline />
      </section>
      <ContactDetails />
    </article>
  );
}
