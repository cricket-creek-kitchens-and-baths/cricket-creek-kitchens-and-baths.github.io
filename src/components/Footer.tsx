import { footer as content } from '@/content';

export function Footer() {
  return (
    <footer className="footer" data-name={Footer.name}>
      {content}
    </footer>
  );
}
