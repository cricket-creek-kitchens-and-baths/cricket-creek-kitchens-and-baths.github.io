import { BathroomTitleCard } from '@/archive/components/BathroomTitleCard';
import { KitchenTitleCard } from '@/archive/components/KitchenTitleCard';
import { ServiceCards } from '@/archive/components/ServiceCards';
import { Testimonials } from '@/archive/components/Testimonials';

import '@/archive/assets/simple-line-icons.css';
import '@/archive/assets/style.min.css';
import '@/archive/assets/frontend.min.css';
import '@/archive/assets/post-207.css';
import '@/archive/assets/general.css';
import '@/archive/assets/custom.css';

export function HomePage() {
  return (
    <div className="elementor elementor-207 home-page">
      <div className="elementor-inner">
        <div className="elementor-section-wrap home-page-sections">
          <KitchenTitleCard />
          <ServiceCards />
          <BathroomTitleCard />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
