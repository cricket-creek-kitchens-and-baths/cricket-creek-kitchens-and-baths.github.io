import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { isDevEnv } from '@/utils/env';

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Image(props: ImageProps) {
  if (isDevEnv && !props.alt && props['aria-hidden'] !== true)
    console.info('[SEO]: image is missing [alt] attribute', props);

  return <img draggable={false} {...props}></img>;
}
