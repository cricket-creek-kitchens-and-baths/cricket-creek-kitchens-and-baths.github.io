import { Link } from '@/components/Link';
import { email, phone } from '@/content';

export function ContactUsToday() {
  return (
    <p>
      Contact us today for a free in-home professional design and estimate. Our
      toll-free number is{' '}
      <Link className="bold" href={`tel:${phone}`}>
        {phone}
      </Link>{' '}
      , or you may{' '}
      <Link className="bold" href={`mailto:${email}`}>
        email
      </Link>{' '}
      us any time.
    </p>
  );
}
