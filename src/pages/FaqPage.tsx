import { faqPageContent } from '@/content';

export function FaqPage() {
  return (
    <article className="page" data-name={FaqPage.name}>
      <section>

      {faqPageContent.map(({ question, answer }, index) => (
        <p key={index}>
          <span className="content-header">{question}</span>
          {answer}
        </p>
      ))}
      </section>
    </article>
  );
}
