import { homePageContent } from '@/content';

export function ServiceCards() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-39017dbd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e781477">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-301b6131 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {homePageContent.services.title}
                    </h2>
                  </div>
                </div>

                <div className="elementor-element elementor-element-6685e86c elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator"></span>
                    </div>
                  </div>
                </div>

                <section className="elementor-section elementor-inner-section elementor-element elementor-element-64b39440 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      {homePageContent.services.cards.map((service) => {
                        return (
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5d4caab6"
                            key={service.title}
                          >
                            <div className="elementor-column-wrap elementor-element-populated">
                              <div className="elementor-widget-wrap">
                                <div className="elementor-element elementor-element-6181dbe6 elementor-widget elementor-widget-image">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <a href="/fabulous-kitchens">
                                        <img
                                          alt=""
                                          className="attachment-full size-full"
                                          height="183"
                                          loading="lazy"
                                          sizes="(max-width: 325px) 100vw, 325px"
                                          src="/wp-content/uploads/2018/04/kitchen-lead.jpg"
                                          srcSet="
                              /wp-content/uploads/2018/04/kitchen-lead.jpg         325w,
                              /wp-content/uploads/2018/04/kitchen-lead-300x169.jpg 300w,
                              /wp-content/uploads/2018/04/kitchen-lead-250x141.jpg 250w
                            "
                                          width="325"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-660bef elementor-widget elementor-widget-heading">
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Fabulous Kitchens
                                    </h2>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-7142ecef elementor-widget elementor-widget-text-editor">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-text-editor elementor-clearfix">
                                      <p>
                                        We understand that the kitchen is often
                                        the focal point of the home. Many events
                                        from dinner to family game night, to
                                        cooking and enjoying time with friends,
                                        make the kitchen the central gathering
                                        spot.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-42e2e056 elementor-widget elementor-widget-spacer">
                                  <div className="elementor-widget-container">
                                    <div className="elementor-spacer">
                                      <div className="elementor-spacer-inner"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


{/* <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5d4caab6">
                              <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div className="elementor-element elementor-element-6181dbe6 elementor-widget elementor-widget-image">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-image">
                                  <a href="/fabulous-kitchens">
                                    <img
                                      width="325"
                                      height="183"
                                      src="/wp-content/uploads/2018/04/kitchen-lead.jpg"
                                      className="attachment-full size-full"
                                      alt=""
                                      loading="lazy"
                                      srcset="
                                        /wp-content/uploads/2018/04/kitchen-lead.jpg         325w,
                                        /wp-content/uploads/2018/04/kitchen-lead-300x169.jpg 300w,
                                        /wp-content/uploads/2018/04/kitchen-lead-250x141.jpg 250w
                                      "
                                      sizes="(max-width: 325px) 100vw, 325px"
                                    />
                                  </a>
                                </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-660bef elementor-widget elementor-widget-heading">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Fabulous Kitchens
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-7142ecef elementor-widget elementor-widget-text-editor">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-text-editor elementor-clearfix">
                                        <p>
                                          We understand that the kitchen is
                                          often the focal point of the home.
                                          Many events from dinner to family game
                                          night, to cooking and enjoying time
                                          with friends, make the kitchen the
                                          central gathering spot.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-42e2e056 elementor-widget elementor-widget-spacer">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3fc2277c">
  <div className="elementor-column-wrap elementor-element-populated">
    <div className="elementor-widget-wrap">
      <div className="elementor-element elementor-element-3a589dcc elementor-widget elementor-widget-image">
        <div className="elementor-widget-container">
          <div className="elementor-image">
      <a href="/beautiful-bathrooms">
        <img
          width="325"
          height="183"
          src="/wp-content/uploads/2018/04/bathroom-lead.jpg"
          className="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="
            /wp-content/uploads/2018/04/bathroom-lead.jpg         325w,
            /wp-content/uploads/2018/04/bathroom-lead-300x169.jpg 300w,
            /wp-content/uploads/2018/04/bathroom-lead-250x141.jpg 250w
          "
          sizes="(max-width: 325px) 100vw, 325px"
        />
      </a>
    </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-32879310 elementor-widget elementor-widget-heading">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">
            Beautiful Bathrooms
          </h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-34b3fb65 elementor-widget elementor-widget-text-editor">
        <div className="elementor-widget-container">
          <div className="elementor-text-editor elementor-clearfix">
            <p>
              Bathroom remodeling projects are often
              some of the most challenging. The
              professional contractors here at
              Cricket Creek understand this concept,
              and will work diligently to ensure
              that you get the beautiful bath you
              want.
            </p>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-13db7da7 elementor-widget elementor-widget-spacer">
        <div className="elementor-widget-container">
          <div className="elementor-spacer">
            <div className="elementor-spacer-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4d9623c1">
  <div className="elementor-column-wrap elementor-element-populated">
    <div className="elementor-widget-wrap">
      <div className="elementor-element elementor-element-4fc68dc9 elementor-widget elementor-widget-image">
        <div className="elementor-widget-container">
          <div className="elementor-image">
      <a href="/great-basements">
        <img
          width="325"
          height="183"
          src="/wp-content/uploads/2018/04/basement-lead.jpg"
          className="attachment-full size-full"
          alt=""
          loading="lazy"
          srcset="
            /wp-content/uploads/2018/04/basement-lead.jpg         325w,
            /wp-content/uploads/2018/04/basement-lead-300x169.jpg 300w,
            /wp-content/uploads/2018/04/basement-lead-250x141.jpg 250w
          "
          sizes="(max-width: 325px) 100vw, 325px"
        />
      </a>
    </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-2eb404a1 elementor-widget elementor-widget-heading">
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">
            Great Basements
          </h2>
        </div>
      </div>
      <div className="elementor-element elementor-element-6e768c88 elementor-widget elementor-widget-text-editor">
        <div className="elementor-widget-container">
          <div className="elementor-text-editor elementor-clearfix">
            <p>
              Most people who are looking to add
              living space to their home don’t
              consider renovating the basement. If
              you’re looking to add square footage
              to your home, consider renovating your
              basement instead of adding more rooms.
            </p>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-1a427ecf elementor-widget elementor-widget-spacer">
        <div className="elementor-widget-container">
          <div className="elementor-spacer">
            <div className="elementor-spacer-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
