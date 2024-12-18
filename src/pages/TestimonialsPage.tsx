import { ContactDetails } from '@/components/ContactDetails';
import { testimonialsPageContent } from '@/content';

export function TestimonialsPage() {
  return (
    <article className="page" data-name={TestimonialsPage.name}>
      <section className="primary testimonials">
        {testimonialsPageContent.map((testimonial) => {
          const title = `${testimonial.name} ${testimonial.location}`;

          return (
            <div className="testimonial" key={title}>
              <div className="testimonial-background">
                <p>{`“${testimonial.message}”`}</p>
                <div className="card-title">{title}</div>
              </div>
            </div>
          );
        })}
      </section>
      <ContactDetails />
    </article>
  );
}
