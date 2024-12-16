import { createRoot } from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { App } from '@/components/App';
import { AboutPage } from '@/pages/AboutPage';
import { BasementsPage } from '@/pages/BasementsPage';
import { BathroomsPage } from '@/pages/BathroomsPage';
import { ContactPage } from '@/pages/ContactPage';
import { FaqPage } from '@/pages/FaqPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { HomePage } from '@/pages/HomePage';
import { KitchensPage } from '@/pages/KitchensPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { Route } from '@/routes';

const router = createBrowserRouter([
  {
    path: '',
    id: 'root',
    Component: App,
    children: [
      {
        path: Route.Home,
        element: <HomePage />,
      },
      {
        path: Route.About,
        element: <AboutPage />,
      },
      {
        path: Route.Bathrooms,
        element: <BathroomsPage />,
      },
      {
        path: Route.Basements,
        element: <BasementsPage />,
      },
      {
        path: Route.Kitchens,
        element: <KitchensPage />,
      },
      {
        path: Route.Faq,
        element: <FaqPage />,
      },
      {
        path: Route.Gallery,
        element: <GalleryPage />,
      },
      {
        path: Route.Testimonials,
        element: <TestimonialsPage />,
      },
      {
        path: Route.Contact,
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <Navigate replace={true} to="/" />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RouterProvider router={router} />,
);
