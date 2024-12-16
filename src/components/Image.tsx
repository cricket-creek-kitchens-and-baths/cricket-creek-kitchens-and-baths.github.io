import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { isDevEnv } from '@/utils/env';

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Image({ src, srcSet, ...props }: ImageProps) {
  if (isDevEnv && !props.alt && props['aria-hidden'] !== true)
    console.info('[SEO]: image is missing [alt] attribute', props);

  return (
    <img
      draggable={false}
      src={src}
      srcSet={`${src} 1x, ${src} 2x`}
      {...props}
    ></img>
  );
}
