// Test utility for viewport detection
import { isMobileViewport, isTabletViewport, isDesktopViewport } from './deviceDetection';

export const testViewportDetection = () => {
  console.log('=== Viewport Detection Test ===');
  console.log('Viewport Width:', window.innerWidth);
  console.log('Viewport Height:', window.innerHeight);
  console.log('---');
  console.log('Is Mobile Viewport:', isMobileViewport());
  console.log('Is Tablet Viewport:', isTabletViewport());
  console.log('Is Desktop Viewport:', isDesktopViewport());
  console.log('---');
  console.log('Breakpoints:');
  console.log('Mobile: < 1024px');
  console.log('Tablet: 768px - 1023px');
  console.log('Desktop: >= 1024px');
  console.log('=== End Test ===');
};

// Auto-run test in development
if (process.env.NODE_ENV === 'development') {
  // Run test after a short delay to ensure DOM is ready
  setTimeout(testViewportDetection, 1000);
}