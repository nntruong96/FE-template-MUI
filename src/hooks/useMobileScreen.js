import React, { useState, useEffect } from 'react';
const WIDTH_MOBILE = 600;
function useMobileScreen() {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < WIDTH_MOBILE);

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth < WIDTH_MOBILE);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileScreen;
}
export default useMobileScreen;
