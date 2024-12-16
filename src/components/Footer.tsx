import { footer as content } from '@/content';

export function Footer() {
  return (
    <footer className="footer" data-name={Footer.name}>
      <div className="footer-content">{content}</div>
    </footer>
  );
}
