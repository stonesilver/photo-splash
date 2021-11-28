import { useRef, useState, useEffect } from 'react';

// custom hook to close pop up on click outside
export const useClickOutsideHook = (initialValue) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && !ref1.current.contains(event.target))
      setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref, ref1 };
};
