import React from 'react';

export default function useScrollIntoView(ref, array) {
  React.useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [ref, array.length]);
}
