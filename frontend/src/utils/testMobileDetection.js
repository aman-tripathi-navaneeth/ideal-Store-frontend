// Test utility for mobile detection
import { isMobileDevice, isTabletDevice, isDesktopDevice } from './deviceDetection';

export const testDeviceDetection = () => {
  console.log('=== Device Detection Test ===');
  console.log('Screen Width:', window.innerWidth);
  console.log('Screen Height:', window.innerHeight);
  console.log('User Agent:', navigator.userAgent);
  console.log('Touch Support:', 'ontouchstart' in window);
  console.log('Max Touch Points:', navigator.maxTouchPoints);
  console.log('---');
  console.log('Is Mobile:', isMobileDevice());
  console.log('Is Tablet:', isTabletDevice());
  console.log('Is Desktop:', isDesktopDevice());
  console.log('=== End Test ===');
};

// Auto-run test in development
if (process.env.NODE_ENV === 'development') {
  // Run test after a short delay to ensure DOM is ready
  setTimeout(testDeviceDetection, 1000);
}