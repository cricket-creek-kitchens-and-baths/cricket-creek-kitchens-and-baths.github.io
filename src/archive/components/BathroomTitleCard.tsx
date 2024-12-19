import { homePageContent } from '@/content';

export function BathroomTitleCard() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-b7ece66 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="collapse-for-medium-and-under elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1464aae5">
            <div className="elementor-column-wrap">
              <div className="elementor-widget-wrap"></div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8cba9f">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-3141da9 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {homePageContent.titleCards[1].title}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5bd38a07 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8458972 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>{homePageContent.titleCards[1].subtitle}</p>
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
