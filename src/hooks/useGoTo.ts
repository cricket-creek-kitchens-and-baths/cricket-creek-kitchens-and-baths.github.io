import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Route } from '@/routes';

export const useGoTo = () => {
  const navigate = useNavigate();
  const goTo = useCallback(
    (path: Route) => () => {
      navigate(path);
    },
    [],
  );

  return goTo;
};
