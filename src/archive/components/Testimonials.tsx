import { NavLink } from 'react-router-dom';

import { Route } from '@/routes';

export function Testimonials() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ac95ca2 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d975fd7">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-397b47ad elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      What Our Clients Are Saying
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1bdfaae elementor-widget elementor-widget-testimonial">
                  <div className="elementor-widget-container">
                    <div className="elementor-testimonial-wrapper elementor-testimonial-text-align-center">
                      <div className="elementor-testimonial-content">
                        {`"I had my kitchen, powder room and
                  basement renovated. The guy did a
                  fantastic job! He was easy to work with,
                  the design of the spaces was very
                  thoughtful and they turned out
                  beautiful. His company is Cricket Creek
                  kitchens and baths."`}
                      </div>

                      <div className="elementor-testimonial-meta">
                        <div className="elementor-testimonial-meta-inner">
                          <div className="elementor-testimonial-details">
                            <div className="elementor-testimonial-name">
                              D.R. Clarksville, MD.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5b8c4058 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-78ab6dba elementor-align-center elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <NavLink
                        className="elementor-button-link elementor-button elementor-size-md"
                        role="button"
                        to={Route.Contact}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Contact Us
                          </span>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
