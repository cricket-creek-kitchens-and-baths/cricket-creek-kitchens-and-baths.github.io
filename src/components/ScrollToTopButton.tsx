import { useCallback, useRef } from 'react';

export function ScrollToTopButton() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      data-displayname={ScrollToTopButton.name}
      onClick={scrollToTop}
      ref={scrollRef}
      style={{
        position: 'fixed'
      }}
    ></div>
  );
}
