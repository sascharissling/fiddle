import { useEffect } from 'react';

export function useScrollIntoView(refCurrent, array) {
  useEffect(() => {
    refCurrent.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [refCurrent, array.length]);
}
