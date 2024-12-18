import { ContactDetails } from '@/components/ContactDetails';
import { Link } from '@/components/Link';
import { contactPageContent, phone } from '@/content';

export function ContactPage() {
  return (
    <article className="page" data-name={ContactPage.name}>
      <section className="primary">
        {contactPageContent} Call us at{' '}
        <Link className="bold" href={`tel:${phone}`}>
          {phone}
        </Link>{' '}
        now, and let’s get started!
      </section>
      <ContactDetails />
    </article>
  );
}
