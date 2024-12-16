import { footerText } from '@/content';

export function Footer() {
  return (
    <footer className="footer" data-name={Footer.name}>
      {footerText}
    </footer>
  );
}
