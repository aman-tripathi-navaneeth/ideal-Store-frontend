// Device detection utility functions

export const isMobileDevice = () => {
  // Primary check: screen width (most reliable)
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Consider both width and height for orientation changes
  const smallestDimension = Math.min(screenWidth, screenHeight);
  const largestDimension = Math.max(screenWidth, screenHeight);

  // If either dimension is less than 1024px, consider it mobile/tablet
  if (largestDimension < 1024) {
    return true;
  }

  // Check user agent for mobile devices
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "mobile",
    "android",
    "iphone",
    "ipad",
    "ipod",
    "blackberry",
    "windows phone",
    "opera mini",
    "iemobile",
    "webos",
    "palm",
    "tablet",
  ];

  const isMobileUserAgent = mobileKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  // Check for touch capability (additional mobile indicator)
  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  // Return true if mobile user agent detected OR touch device with small screen
  return isMobileUserAgent || (isTouchDevice && largestDimension < 1024);
};

export const isTabletDevice = () => {
  const screenWidth = window.innerWidth;
  return screenWidth >= 768 && screenWidth < 1024;
};

export const isDesktopDevice = () => {
  return window.innerWidth >= 1024;
};

// Listen for window resize to handle device orientation changes
export const addDeviceChangeListener = (callback) => {
  const handleResize = () => {
    callback({
      isMobile: isMobileDevice(),
      isTablet: isTabletDevice(),
      isDesktop: isDesktopDevice(),
      screenWidth: window.innerWidth,
    });
  };

  window.addEventListener("resize", handleResize);

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
