import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import { useGoTo } from '@/hooks/useGoTo';
import { Route, isRoute } from '@/routes';
import { isDevEnv } from '@/utils/env';

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function Link({ route, ...props }: LinkProps & { route?: Route }) {
  if (isDevEnv && !isRoute(route) && !props.href)
    console.info(
      '[SEO]: link is not crawlable',
      `route: '${route}'`,

      route !== undefined,
      'Home' in Route,
      props,
    );

  const goTo = useGoTo();
  const optional = route
    ? {
        href: route,
        onClick: goTo(route),
      }
    : {};

  return (
    <a
      // aria-label={title}
      // className="header-nav-link"
      // href={Route.Home}
      // onClick={goTo(Route.Home)}
      {...optional}
      {...props}
    />
  );
}
