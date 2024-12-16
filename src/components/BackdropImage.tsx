// import { useXLargeBreakpoint } from '@/hooks/useBreakpoint';

import '@/components/backdrop-image.css';

export function BackdropImage({
  height: value,
  imageSrc,
}: {
  height?: number;
  imageSrc: string;
}) {
  // const isXLarge = useXLargeBreakpoint();

  // if (!isXLarge) return null;

  const height = `${value || '100'}%`;
  const minHeight = `${value || '100'}vh`;

  return (
    <div className="backdrop" data-name={BackdropImage.name}>
      <div
        className="backdrop-image"
        style={{
          backgroundImage: `url(images/${imageSrc})`,
          height,
          minHeight,
        }}
      />
      <div
        className="backdrop-overlay"
        style={{
          height,
          minHeight,
        }}
      />
    </div>
  );
}
