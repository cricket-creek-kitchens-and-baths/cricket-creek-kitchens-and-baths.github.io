import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { isDevEnv } from '@/utils/env';

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link(props: LinkProps) {
  if (isDevEnv && !props.href)
    console.info('[SEO]: link is not crawlable', props);

  return <a {...props} />;
}
