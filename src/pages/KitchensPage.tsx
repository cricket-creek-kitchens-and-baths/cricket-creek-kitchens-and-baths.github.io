import { ContactDetails } from '@/components/ContactDetails';
import { ContactUsToday } from '@/components/ContactUsToday';
import { Image } from '@/components/Image';
import { Tagline } from '@/components/Tagline';
import { kitchensPageContent } from '@/content';

export function KitchensPage() {
  const { title, listTitle, paragraphs, items } = kitchensPageContent;

  return (
    <article className="page" data-name={KitchensPage.name}>
      <section className="primary">
        <div className="page-title">{title}</div>
        <p>{paragraphs[0]}</p>
        <p className="image">
          <Image
            alt={title}
            className="inline-image"
            loading="lazy"
            src="kitchen-page.jpg"
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
