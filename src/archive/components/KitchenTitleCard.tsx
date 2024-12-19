import { homePageContent } from '@/content';

export function KitchenTitleCard() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-1d1f2d62 elementor-section-height-full elementor-section-boxed elementor-section-height-default elementor-section-items-middle">
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="collapse-for-medium-and-under elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2fab445f">
            <div className="elementor-column-wrap">
              <div className="elementor-widget-wrap"></div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6ac82c89">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-3135be3a elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {homePageContent.titleCards[0].title}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-50ff85b9 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>{homePageContent.titleCards[0].subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-21fd303f elementor-widget elementor-widget-button">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button-link elementor-button elementor-size-sm"
                        href="/about-cricket-creek"
                        role="button"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            About Us
                          </span>
                        </span>
                      </a>
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
