import { Link } from '@/components/Link';
import { companyNameParts, email, location, phone } from '@/content';

export function ContactDetails() {
  return (
    <section className="secondary" data-name={ContactDetails.name}>
      <div className="section-title">Contact Us</div>
      <div className="title">
        {companyNameParts[0]}
        <br />
        {companyNameParts[1]}
      </div>

      <div>{location}</div>
      <div>
        <span className="bold">Phone: </span>
        <Link href={`tel:${phone}`}>{phone}</Link>
      </div>
      <div>
        <span className="bold">Email: </span>
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
    </section>
  );
}
