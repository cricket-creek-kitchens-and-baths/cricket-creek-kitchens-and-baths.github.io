import { footer as content } from '@/content';

export function Footer() {
  return (
    <footer className="footer" data-name={Footer.name} role="contentinfo">
      <div className="footer-content" role="contentinfo">{content}</div>
    </footer>
  );
}
