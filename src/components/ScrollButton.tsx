import debounce from 'just-debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

import '@/components/scroll-button.css';

export function ScrollButton() {
  const scrollRef = useRef<HTMLButtonElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;

    const isDocument = (target: EventTarget | null): target is Document => {
      return target instanceof Document;
    };

    const onScroll = (event: Event) => {
      const target = event.target;
      if (!isDocument(target)) {
        console.debug('unexpected input');
        return;
      }

      // If scrollTop > 100, show the scrolly button, else hide it.
      const scrollPosition = target.scrollingElement?.scrollTop || 0;

      setShow((currentlyShown) => {
        const shouldShow = scrollPosition > 100;
        if (currentlyShown === shouldShow) return currentlyShown;
        return shouldShow;
      });
    };

    const handleScroll = debounce(onScroll, 1000, true, true);
    const handleScrollEnd = debounce(onScroll, 1000, false, true);

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('scroll', handleScrollEnd, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('scroll', handleScrollEnd, true);
    };
  }, [scrollRef]);

  return (
    <button
      aria-label="Scroll to the top of the page"
      className={`scroll-button${show ? ' show' : ''}`}
      data-name={ScrollButton.name}
      onClick={scrollToTop}
      ref={scrollRef}
      style={{
        opacity: show ? 1 : 0,
        zIndex: show ? 500 : -1,
      }}
      title="Scroll to top"
    >
      ↑
    </button>
  );
}
