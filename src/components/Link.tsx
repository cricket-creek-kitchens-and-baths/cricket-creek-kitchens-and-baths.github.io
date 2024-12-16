import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { useGoTo } from '@/hooks/useGoTo';
import type { Route } from '@/routes';
import { isRoute } from '@/routes';
import { isDevEnv } from '@/utils/env';

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ route, ...props }: LinkProps & { route?: Route }) {
  if (isDevEnv && !isRoute(route) && !props.href)
    console.info('[SEO]: link is not crawlable', `route: '${route}'`, props);

  const goTo = useGoTo();
  const optional = isRoute(route)
    ? {
        href: route,
        onClick: goTo(route),
      }
    : {};

  return <a {...optional} {...props} />;
}
