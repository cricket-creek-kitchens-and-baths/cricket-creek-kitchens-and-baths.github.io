export enum Route {
  Home = '',
  About = '/about-cricket-creek/',
  Bathrooms = '/beautiful-bathrooms/',
  Basements = '/great-basements/',
  Kitchens = '/fabulous-kitchens/',
  Faq = '/faq/',
  Gallery = '/gallery/',
  Testimonials = '/testimonials/',
  Contact = '/contact-us/',
}

export function isRoute(value?: string): value is Route {
  return Object.values(Route).some((route) => value === route);
}
