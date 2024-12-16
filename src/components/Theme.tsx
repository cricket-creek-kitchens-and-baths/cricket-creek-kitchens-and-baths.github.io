import type { ReactNode } from 'react';

import '@/components/theme.css';

export function Theme({ children }: { children: ReactNode }) {
  return (
    <>
      <input aria-hidden={true} id="theme-toggle" type="checkbox" />
      <div className="theme">{children}</div>
    </>
  );
}
