import { useEffect, useState } from 'react';

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width < 600;
};

export default useCheckMobileScreen;
