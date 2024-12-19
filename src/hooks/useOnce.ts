import { useEffect, useRef } from 'react';
import type { EffectCallback } from 'react';

export const useOnce = (effectCallback: EffectCallback) => {
  const shouldUse = useRef<boolean>(true);

  useEffect(() => {
    if (shouldUse.current !== true) return;
    shouldUse.current = false;
    effectCallback();
  }, []);
};
