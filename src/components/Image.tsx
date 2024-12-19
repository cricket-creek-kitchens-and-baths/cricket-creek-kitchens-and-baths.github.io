import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { imageData } from '@/data/images';
import { isDevEnv } from '@/utils/env';

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Image({ src, srcSet, ...props }: ImageProps) {
  if (isDevEnv && !props.alt && props['aria-hidden'] !== true)
    console.info('[SEO]: image is missing [alt] attribute', props);

  const data = imageData.find((image) => image.src === src);
  if (!data) {
    console.warn(`missing metadata for image: '${src}'`);
    return null;
  }

  const path = `/images/${src}`;

  return (
    <img
      draggable={false}
      src={path}
      srcSet={`${path} 1x, ${path} 2x`}
      style={{
        aspectRatio: `${data.width} / ${data.height}`,
      }}
      {...props}
    ></img>
  );
}
