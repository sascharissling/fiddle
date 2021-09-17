import { useEffect } from 'react';

export function useScrollIntoView(ref, array) {
  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [ref, array.length]);
}
