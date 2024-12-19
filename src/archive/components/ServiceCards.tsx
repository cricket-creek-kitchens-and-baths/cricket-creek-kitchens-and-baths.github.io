import { NavLink } from 'react-router-dom';

import { Image } from '@/components/Image';
import { homePageContent } from '@/content';

export function ServiceCards() {
  return (
    <section className="page service-cards" data-name={ServiceCards.name}>
      <div className="cards-title">{homePageContent.services.title}</div>
      <div className="title-line">
        <div />
      </div>

      <div className="card-grid">
        {homePageContent.services.cards.map((service) => {
          return (
            <div className="service-card" key={service.title}>
              <NavLink className="service-card-image-link" to={service.route}>
                <Image
                  alt={service.title}
                  className="service-card-image"
                  loading="lazy"
                  src={service.image}
                />
              </NavLink>
              <div className="service-card-title">{service.title}</div>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
