import { RefObject, useEffect } from 'react';

export function useScrollIntoView(refCurrent: RefObject<HTMLDivElement>['current'], array: any[]) {
  useEffect(() => {
    if (!refCurrent || !array) return;
    refCurrent.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [refCurrent, array]);
}
