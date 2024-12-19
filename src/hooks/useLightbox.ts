import pswpModule from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';

import 'photoswipe/style.css';

export const useLightbox = (galleryId: string) => {
  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'a',
      pswpModule,
    });
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, []);
};
