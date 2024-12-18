/* eslint-disable react/iframe-missing-sandbox */
import Skeleton from '@mui/material/Skeleton';
import { useCallback, useRef, useState } from 'react';
import type { ReactEventHandler } from 'react';

import { companyNameDisplayString as companyName } from '@/content';

import '@/components/embed.css';

export function Embed({ src }: { src: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleLoad: ReactEventHandler<HTMLIFrameElement> = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="embed" data-name={Embed.name}>
      <div
        className="skeleton-position"
        style={{
          opacity: isLoading ? '1' : '0',
        }}
      >
        <div className="skeleton-size">
          <Skeleton className="skeleton" />
        </div>
      </div>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        className="iframe"
        loading="lazy"
        onLoad={handleLoad}
        ref={ref}
        src={src}
        style={{
          opacity: isLoading ? '0' : '1',
        }}
        title={companyName}
      />
    </div>
  );
}
