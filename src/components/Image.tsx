import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Image(props: ImageProps) {
  if (!props.alt && props['aria-hidden'] !== true)
    console.warn('image is missing [alt] attribute');
  
  return <img draggable={false} {...props}></img>;
}
