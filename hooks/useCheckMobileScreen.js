import { useState, useEffect } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResizeScreen = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResizeScreen();

    window.addEventListener('resize', handleResizeScreen);
  }, []);

  return isMobile;
};

export default useMobile;
