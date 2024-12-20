import type { MouseEventHandler } from 'react';

export type ClickHandler = MouseEventHandler<
  HTMLDivElement & HTMLAnchorElement
>;
