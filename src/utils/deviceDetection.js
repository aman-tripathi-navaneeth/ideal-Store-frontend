// Viewport/Browser mode detection utility functions

export const isMobileViewport = () => {
  // Only check viewport width - this is what matters for "desktop mode"
  const viewportWidth = window.innerWidth;
  
  // If viewport width is less than 1024px, consider it mobile view
  // This works regardless of actual device - it's about browser viewport size
  return viewportWidth < 1024;
};

// Alias for backward compatibility
export const isMobileDevice = isMobileViewport;

export const isTabletViewport = () => {
  const viewportWidth = window.innerWidth;
  return viewportWidth >= 768 && viewportWidth < 1024;
};

export const isDesktopViewport = () => {
  return window.innerWidth >= 1024;
};

// Alias for backward compatibility
export const isDesktopDevice = isDesktopViewport;

// Listen for window resize to handle viewport changes
export const addViewportChangeListener = (callback) => {
  const handleResize = () => {
    callback({
      isMobile: isMobileViewport(),
      isTablet: isTabletViewport(),
      isDesktop: isDesktopViewport(),
      viewportWidth: window.innerWidth,
    });
  };

  window.addEventListener("resize", handleResize);

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

// Alias for backward compatibility
export const addDeviceChangeListener = addViewportChangeListener;