import { ContactDetails } from '@/components/ContactDetails';
import { ContactUsToday } from '@/components/ContactUsToday';
import { Image } from '@/components/Image';
import { Tagline } from '@/components/Tagline';
import { basementsPageContent } from '@/content';

export function BasementsPage() {
  const { title, listTitle, paragraphs, items } = basementsPageContent;

  // sx={{
  //   transition: 'background 0.3s',
  //   backgroundSize: 'cover',
  //   backgroundImage: 'url(/basements-page.jpeg)',
  //   backgroundPosition: 'center center',
  //   backgroundRepeat: 'no-repeat',
  //   aspectRatio: '16 / 9',
  // }}

  return (
    <article className="page" data-name={BasementsPage.name}>
      <section className="primary">
        <div className="page-title">{title}</div>
        <p>{paragraphs[0]}</p>
        <p className="image">
          <Image
            alt={title}
            className="inline-image"
            loading="lazy"
            src="basement-page.jpg"
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
        <p>{paragraphs[2]}</p>
        <ContactUsToday />
        <Tagline />
      </section>
      <ContactDetails />
    </article>
  );
}
