import { useEffect } from 'react';

export default function useScrollIntoView(ref, array) {
  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [ref, array.length]);
}
