// Navigation menu items configuration

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Apps', href: '/apps' },
  { name: 'Store', href: '/store' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
] as const;

// Filter types for App Store
export const APP_FILTERS = ['All', 'Free', 'Paid', 'Premium'] as const;

export type FilterType = typeof APP_FILTERS[number];
