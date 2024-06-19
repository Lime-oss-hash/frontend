import "../styles/HomePage2.module.css";
import "../styles/HomePage2.module2.css";
import "../styles/HomePage2.module3.css";
import "../styles/HomePage2.module4.css";
import "../styles/et-divi-dynamic-17.css";
import "../styles/HomePage2.module5.css";
import "../styles/et-core-unified-deferred-17.min.css";
import "../styles/HomePage2.module6.css";
import "../styles/HomePage2.module7.css";
import "../styles/HomePage2.module8.css";

function HomePage() {

  return (
    <div style={{marginTop:'-40px'}}>
      <div className="home page-template page-template-page-template-blank page-template-page-template-blank-php page page-id-17 et_pb_button_helper_class et_cover_background et_pb_gutter osx et_pb_gutters3 et_pb_pagebuilder_layout et_no_sidebar et_divi_theme et-db et_pb_recaptcha_enabled chrome">
        <div id="page-container">
          <div id="main-content">
            <article
              id="post-17"
              className="post-17 page type-page status-publish hentry"
            >
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_0">
                        <div className="et_pb_column et_pb_column_2_3 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Supporting Eastern Bay Communities</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_dark">
                            <div className="et_pb_text_inner">
                              <h1>Waka Eastern Bay – Community Transport</h1>
                              <h4>
                                Making transport accessible to connect
                                communities
                              </h4>
                              <h3>He Tūnga Waka – He Hononga Tangata</h3>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_0">
                            <a href="https://wakaeasternbay.org.nz/">
                              <span className="et_pb_image_wrap">
                                <img
                                  decoding="async"
                                  width="500"
                                  height="500"
                                  src={require('../assets/images/Waka-Eastern-Bay-sq-logo-light-bright-1.png')}
                                  alt=""
                                  srcSet="
                                    https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/Waka-Eastern-Bay-sq-logo-light-bright-1.png         500w,
                                    https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/Waka-Eastern-Bay-sq-logo-light-bright-1-480x480.png 480w
                                  "
                                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 500px, 100vw"
                                  className="wp-image-144"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_1">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_0 et_pb_bg_layout_light"
                              href="https://wic.infoodle.com/form_process?g=75350c11-6363-4c2d-9289-b5e3cfc63ef3"
                              target="_blank"
                            >
                              Passenger Registration Form
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_1 et_pb_bg_layout_light"
                              href="https://forms.microsoft.com/r/GMm6bRarzm"
                              target="_blank"
                            >
                              Passenger Feedback Form
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_2 et_pb_bg_layout_light"
                              href="https://wakaeasternbay.org.nz/other-providers/"
                            >
                              Other Providers
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_2 et_pb_equal_columns et_pb_gutters1 et_pb_row_6col">
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_3 et_pb_bg_layout_light"
                              href="#who-are-we"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector('#who-are-we') as HTMLElement;
                                console.log(element?.offsetTop);
                                window.scrollTo({
                                  top: element?.offsetTop + 600,
                                  behavior: 'smooth'
                                });
                              }}
                            >
                              Who Are We?
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_4 et_pb_bg_layout_light"
                              href="#what-do-we-do"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector('#what-do-we-do') as HTMLElement;
                                console.log(element?.offsetTop);
                                window.scrollTo({
                                  top: element?.offsetTop + 600,
                                  behavior: 'smooth'
                                });
                              }}
                            >
                              What we Do
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_5 et_pb_bg_layout_light"
                              href="#our-people"
                              onClick={(e) => {
                                // e.preventDefault();
                                // const element = document.querySelector('#our-people') as HTMLElement;
                                // console.log(element);
                                // console.log(element?.offsetTop);
                                // window.scrollTo({
                                //   top: element?.offsetTop + 600,
                                //   behavior: 'smooth'
                                // });
                              }}
                            >
                              Our People
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_6_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_6 et_pb_bg_layout_light"
                              href="#supporters"
                              onClick={(e) => {
                                // e.preventDefault();
                                // const element = document.querySelector('#supporters') as HTMLElement;
                                // console.log(element?.offsetTop);
                                // window.scrollTo({
                                //   top: element?.offsetTop + 400,
                                //   behavior: 'smooth'
                                // });
                              }}
                            >
                              Supporters
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_button_module_wrapper et_pb_button_7_wrapper et_pb_button_alignment_center et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_7 et_pb_bg_layout_light"
                              href="#contact-waka-eastern-bay"
                              onClick={(e) => {
                                // e.preventDefault();
                                // const element = document.querySelector('#contact-waka-eastern-bay') as HTMLElement;
                                // console.log(element?.offsetTop);
                                // window.scrollTo({
                                //   top: element?.offsetTop + 600,
                                //   behavior: 'smooth'
                                // });
                              }}
                            >
                              Get in touch
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_6 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 clearfix et_pb_text_align_right et_pb_bg_layout_light has_follow_button">
                            <li className="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link et-social-facebook">
                              <a
                                href="https://www.facebook.com/wakaeasternbay"
                                className="icon et_pb_with_border"
                                title="Follow on Facebook"
                                target="_blank"
                              >
                                <span
                                  className="et_pb_social_media_follow_network_name"
                                  aria-hidden="true"
                                >
                                  Follow
                                </span>
                              </a>
                              <a
                                href="https://www.facebook.com/wakaeasternbay"
                                className="follow_button"
                                title="Facebook"
                                target="_blank"
                              >
                                Follow
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_3 et_pb_equal_columns">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Our Vision</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                To help connect Eastern Bay communities and
                                ensure they are inclusive, safe and thriving.
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_12 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <strong>OUR PURPOSE </strong>
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                To support solutions ensuring equitable and
                                accessible travel options suitable for Eastern
                                Bay community
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="who-are-we"
                        className="et_pb_row et_pb_row_4 who-are-we et_pb_equal_columns"
                      >
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_13 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>WHO ARE WE?</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    WAKA EASTERN BAY fulfils an important role
                                    of providing accessible transport options to
                                    members of the communities outside the
                                    public transport network or with limited
                                    availability.
                                  </p>
                                  <p>
                                    We largely rely on the goodwill of the local
                                    community by recruiting volunteers to drive
                                    the vehicles and administer the Trust.
                                  </p>
                                  <p>
                                    We are a registered charitable trust, under
                                    the name of Eastern Bay Accessible Transport
                                    Charitable Trust, fully community-owned and
                                    operated and funded by grants and donations.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_button_module_wrapper et_pb_button_8_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_8 et_pb_bg_layout_light"
                              href="mailto:info@wakaeasternbay.org.nz"
                            >
                              Email Us Now
                            </a>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_2_5 et_pb_column_14 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_1">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="834"
                                height="828"
                                src={require('../assets/images/walking-stick.png')}
                                alt=""
                                srcSet={
                                  "https://wakaeasternbay.org.nz" +
                                  "/wp-content/uploads/2023/01/walking-stick.png 834w," +
                                  "https://wakaeasternbay.org.nz" +
                                  "/wp-content/uploads/2023/01/walking-stick-480x477.png 480w"
                                }
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 834px, 100vw"
                                className="wp-image-51"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        id="what-do-we-do"
                        className="et_pb_row et_pb_row_5 what-do-we-do et_pb_equal_columns"
                      >
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_15 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_2">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="700"
                                height="869"
                                src={require('../assets/images/wheelchair.png')}
                                alt=""
                                srcSet={
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/01/wheelchair.png 700w, " +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/01/wheelchair-480x596.png 480w"
                                }
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
                                className="wp-image-52"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_2_3 et_pb_column_16 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_1 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>What Do We Do?</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    We provide a means of transport for
                                    residents who may be unable to transport
                                    themselves, from their home to nearby towns
                                    or cities for medical appointments or
                                    shopping visits.
                                  </p>
                                  <p>
                                    Our drivers are volunteers who have been
                                    trained to support users and our staff.
                                  </p>
                                  <p>
                                    Trips are therefore able to be kept
                                    affordable for passengers, and destinations
                                    are specifically geared to the needs of the
                                    community.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_button_module_wrapper et_pb_button_9_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_9 et_pb_bg_layout_light"
                              href="mailto:info@wakaeasternbay.org.nz"
                            >
                              Email Us Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="our-service-details"
                        className="et_pb_row et_pb_row_6 our-service-details et_pb_equal_columns"
                      >
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_17 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Our Service</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Accessibility Transport</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                We have an accessible van to accommodate a
                                wheelchair and all our drivers are trained to
                                help support passengers.
                              </p>
                              <p>
                                In order to ensure we have a volunteer available
                                for your transport needs, all transport requests
                                must be booked 24 hours before transport is
                                required.
                              </p>
                              <p>
                                <strong>Days of Operation:</strong> Monday to
                                Friday
                                <br />
                                <strong>Times of Operation</strong>: 9am to 3pm
                                <br />
                                Booking Contact:
                                {/* <span style="text-decoration: underline"
                            ><strong
                              ><span style="color: #ffffff"
                                ><a
                                  href="mailto:info@wakaeasternbay.org.nz"
                                  style="
                                    color: #ffffff;
                                    text-decoration: underline;
                                  "
                                  >Email</a
                                ></span
                              ></strong
                            ></span
                          > */}
                                <span style={{ textDecoration: "underline" }}>
                                  <strong>
                                    <span style={{ color: "#ffffff" }}>
                                      <a
                                        href="mailto:info@wakaeasternbay.org.nz"
                                        style={{
                                          color: "#ffffff",
                                          textDecoration: "underline",
                                        }}
                                      >
                                        Email
                                      </a>
                                    </span>
                                  </strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_2_5 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_left et_pb_bg_layout_dark">
                            <div className="et_pb_text_inner">
                              <h4>Supporting Community</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Carpooling</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                We are currently offering support to encourage
                                community carpooling.
                              </p>
                              <p>
                                If you are interested in carpooling, please
                                contact:
                                {/* <span style="text-decoration: underline"
                            ><strong
                              ><span style="color: #ffffff"
                                ><a
                                  href="mailto:info@wakaeasternbay.org.nz"
                                  style="
                                    color: #ffffff;
                                    text-decoration: underline;
                                  "
                                  >info@wakaeasternbay.org.nz</a
                                ></span
                              ></strong
                            ></span
                          > */}
                                <span style={{ textDecoration: "underline" }}>
                                  <strong>
                                    <span style={{ color: "#ffffff" }}>
                                      <a
                                        href="mailto:info@wakaeasternbay.org.nz"
                                        style={{
                                          color: "#ffffff",
                                          textDecoration: "underline",
                                        }}
                                      >
                                        Email
                                      </a>
                                    </span>
                                  </strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                      <div
                        id="our-people"
                        className="et_pb_row et_pb_row_7 our-people et_pb_equal_columns"
                      >
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_19 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_2 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Our People</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="our-board"
                        className="et_pb_row et_pb_row_8 our-board et_pb_equal_columns et_pb_gutters2"
                      >
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_20 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_3 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Our Board</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_0 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                decoding="async"
                                src={require('../assets/images/Andrew-e1674698164196.jpg')}
                                alt="Andrew Iles"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Andrew Iles
                              </h4>
                              <p className="et_pb_member_position">
                                Chairperson
                              </p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_1 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                decoding="async"
                                src={require('../assets/images/David-e1674698121797.jpg')}
                                alt="David Poole"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                David Poole
                              </h4>
                              <p className="et_pb_member_position">Trustee</p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_21 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_divider_0 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_2 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                decoding="async"
                                src={require('../assets/images/Colleen-e1674698144901.jpg')}
                                alt="Colleen Banks"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Colleen Banks
                              </h4>
                              <p className="et_pb_member_position">Trustee</p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_3 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                decoding="async"
                                src={require('../assets/images/Amohaere-e1674698182699.jpg')}
                                alt="Amohaere Tangitu"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Amohaere Tangitu
                              </h4>
                              <p className="et_pb_member_position">Trustee</p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_22 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_divider_1 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_4 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                decoding="async"
                                src={require('../assets/images/Lee-e1674698075110.jpg')}
                                alt="Lee Colquhoun"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Lee Colquhoun
                              </h4>
                              <p className="et_pb_member_position">Trustee</p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_5 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off et-animated">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="750"
                                height="750"
                                src={require('../assets/images/Judy.jpg')}
                                alt="Judy Turner"
                                srcSet={
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/06/Judy.jpg         750w," +
                                  " https://wakaeasternbay.org.nz/wp-content/uploads/2023/06/Judy-480x480.jpg 480w"
                                }
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 750px, 100vw"
                                className="wp-image-166"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Judy Turner
                              </h4>
                              <p className="et_pb_member_position">Trustee</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="our-board"
                        className="et_pb_row et_pb_row_9 our-board et_pb_equal_columns et_pb_gutters2"
                      >
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_23 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_4 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Our Staff</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_6 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off">
                              <img
                                decoding="async"
                                src={require('../assets/images/IMG20221121141352-scaled-e1675734206691.jpg')}
                                alt="Ruth Gerzon"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Ruth Gerzon
                              </h4>
                              <p className="et_pb_member_position">
                                Communication and PR
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_24 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_divider_2 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_7 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1937"
                                height="1937"
                                src={require('../assets/images/KylieCarpenter.jpg')}
                                alt="Kylie Carpenter"
                                srcSet={
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/09/KylieCarpenter.jpg           1937w," +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/09/KylieCarpenter-1280x1280.jpg 1280w," +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/09/KylieCarpenter-980x980.jpg    980w," +
                                  " https://wakaeasternbay.org.nz/wp-content/uploads/2023/09/KylieCarpenter-480x480.jpg    480w"
                                }
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1937px, 100vw"
                                className="wp-image-232"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Kylie Carpenter
                              </h4>
                              <p className="et_pb_member_position">
                                Administrator
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_25 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_divider_3 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_team_member et_pb_team_member_8 clearfix et_pb_bg_layout_light">
                            <div className="et_pb_team_member_image et-waypoint et_pb_animation_off">
                              <img
                                decoding="async"
                                src={require('../assets/images/Renee-Lubbe-photo-for-website-e1678316201923.jpg')}
                                alt=" Reneē Lubbe"
                              />
                            </div>
                            <div className="et_pb_team_member_description">
                              <h4 className="et_pb_module_header">
                                Reneē Lubbe
                              </h4>
                              <p className="et_pb_member_position">
                                Project Manager/ Executive Officer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="supporters"
                        className="et_pb_row et_pb_row_10 supporters et_pb_equal_columns"
                      >
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_26 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_5 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Our Supporters</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="what-do-we-do"
                        className="et_pb_row et_pb_row_11 what-do-we-do et_pb_equal_columns et_pb_row_4col"
                      >
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_27 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_3">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="2364"
                                height="1638"
                                src={require('../assets/images/BT_wordmark_tagline_blue.png')}
                                alt=""
                                srcSet={
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/BT_wordmark_tagline_blue.png          2364w, " +
                                  " https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/BT_wordmark_tagline_blue-1280x887.png 1280w, " +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/BT_wordmark_tagline_blue-980x679.png   980w," +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/BT_wordmark_tagline_blue-480x333.png   480w"
                                }
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 2364px, 100vw"
                                className="wp-image-134"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_4">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="280"
                                src={require('../assets/images/1622587470_Aotearoa-Gaming-Trust-DARK-BLUE-RGB.png')}
                                alt=""
                                srcSet="
                                https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/1622587470_Aotearoa-Gaming-Trust-DARK-BLUE-RGB.png 800w,
                                https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/1622587470_Aotearoa-Gaming-Trust-DARK-BLUE-RGB-480x168.png 480w
                               "
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
                                className="wp-image-128"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_28 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_5">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="124"
                                src={require('../assets/images/waka-kotahi-logo-small.jpg')}
                                alt=""
                                srcSet={
                                  " https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/waka-kotahi-logo-small.jpg        400w, " +
                                  "https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/waka-kotahi-logo-small-300x93.jpg 300w                          "
                                }
                                sizes="(max-width: 400px) 100vw, 400px"
                                className="wp-image-126"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_6">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="327"
                                height="338"
                                src={require('../assets/images/WhakataneOhope-CommunityBoard.jpg')}
                                alt=""
                                srcSet="
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/WhakataneOhope-CommunityBoard.jpg         327w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/WhakataneOhope-CommunityBoard-290x300.jpg 290w
                          "
                                sizes="(max-width: 327px) 100vw, 327px"
                                className="wp-image-132"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_29 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_7">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1920"
                                height="566"
                                src={require("../assets/images/MSD-Logo.webp")}
                                alt=""
                                srcSet="
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/MSD-Logo.webp          1920w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/MSD-Logo-1280x377.webp 1280w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/MSD-Logo-980x289.webp   980w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/MSD-Logo-480x142.webp   480w
                          "
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1920px, 100vw"
                                className="wp-image-124"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_8">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="225"
                                height="225"
                                src={require("../assets/images/download.png")}
                                alt=""
                                srcSet="
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/download.png         225w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/download-150x150.png 150w
                          "
                                sizes="(max-width: 225px) 100vw, 225px"
                                className="wp-image-131"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_4 et_pb_column_30 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_9">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="1708"
                                height="592"
                                src={require("../assets/images/LNZ-LGB-3to1-RGB.png")}
                                alt=""
                                srcSet="
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/LNZ-LGB-3to1-RGB.png          1708w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/LNZ-LGB-3to1-RGB-1280x444.png 1280w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/LNZ-LGB-3to1-RGB-980x340.png   980w,
                            https://wakaeasternbay.org.nz/wp-content/uploads/2023/02/LNZ-LGB-3to1-RGB-480x166.png   480w
                          "
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1708px, 100vw"
                                className="wp-image-127"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_image et_pb_image_10">
                            <span className="et_pb_image_wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width="226"
                                height="223"
                                src={require("../assets/images/download-1.png")}
                                alt=""
                                className="wp-image-130"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular">
                      <div
                        id="contact-waka-eastern-bay"
                        className="et_pb_row et_pb_row_12 contact-waka-eastern-bay"
                      >
                        <div className="et_pb_column et_pb_column_2_5 et_pb_column_31 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>Want to Support Us?</h4>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                Get in touch today to find out how you can
                                support Waka Eastern Bay
                              </h2>
                            </div>
                          </div>
                          <div className="et_pb_button_module_wrapper et_pb_button_10_wrapper et_pb_module">
                            <a
                              className="et_pb_button et_pb_button_10 et_pb_bg_layout_light"
                              href="https://forms.microsoft.com/r/GMm6bRarzm"
                              target="_blank"
                            >
                              Passenger Feedback Form
                            </a>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h4>
                                <a href="tel:0274077526">027 407 7526</a>
                              </h4>
                            </div>
                          </div>
                          <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_1 clearfix et_pb_bg_layout_light has_follow_button">
                            <li className="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link et-social-facebook">
                              <a
                                href="https://www.facebook.com/wakaeasternbay"
                                className="icon et_pb_with_border"
                                title="Follow on Facebook"
                                target="_blank"
                              >
                                <span
                                  className="et_pb_social_media_follow_network_name"
                                  aria-hidden="true"
                                >
                                  Follow
                                </span>
                              </a>
                              <a
                                href="https://www.facebook.com/wakaeasternbay"
                                className="follow_button"
                                title="Facebook"
                                target="_blank"
                              >
                                Follow
                              </a>
                            </li>
                          </ul>
                          <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_6 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Visit Us:</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    Knox Presbyterian Church
                                    <br />
                                    83A Domain Road
                                    <br />
                                    Whakatane
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_32 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div
                            id="et_pb_contact_form_0"
                            className="et_pb_module et_pb_contact_form_0 et_pb_recaptcha_enabled et_pb_contact_form_container clearfix"
                            data-form_unique_num="0"
                            data-form_unique_id=""
                          >
                            <div className="et-pb-contact-message"></div>

                            <div className="et_pb_contact">
                              <form
                                className="et_pb_contact_form clearfix"
                                method="post"
                                action="https://wakaeasternbay.org.nz/"
                              >
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_last"
                                  data-id="name"
                                  data-type="input"
                                >
                                  <label
                                    htmlFor="et_pb_contact_name_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    id="et_pb_contact_name_0"
                                    className="input"
                                    value=""
                                    name="et_pb_contact_name_0"
                                    data-required_mark="required"
                                    data-field_type="input"
                                    data-original_id="name"
                                    placeholder="Name"
                                  />
                                </p>
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_last"
                                  data-id="email"
                                  data-type="email"
                                >
                                  <label
                                    htmlFor="et_pb_contact_email_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type="text"
                                    id="et_pb_contact_email_0"
                                    className="input"
                                    value=""
                                    name="et_pb_contact_email_0"
                                    data-required_mark="required"
                                    data-field_type="email"
                                    data-original_id="email"
                                    placeholder="Email Address"
                                  />
                                </p>
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_last"
                                  data-id="phone"
                                  data-type="input"
                                >
                                  <label
                                    htmlFor="et_pb_contact_phone_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="text"
                                    id="et_pb_contact_phone_0"
                                    className="input"
                                    value=""
                                    name="et_pb_contact_phone_0"
                                    data-required_mark="required"
                                    data-field_type="input"
                                    data-original_id="phone"
                                    placeholder="Phone Number"
                                    pattern="[0-9\s\-]*"
                                    title="Only numbers allowed."
                                  />
                                </p>
                                <p
                                  className="et_pb_contact_field et_pb_contact_field_3 et_pb_contact_field_last"
                                  data-id="message"
                                  data-type="text"
                                >
                                  <label
                                    htmlFor="et_pb_contact_message_0"
                                    className="et_pb_contact_form_label"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    name="et_pb_contact_message_0"
                                    id="et_pb_contact_message_0"
                                    className="et_pb_contact_message input"
                                    data-required_mark="required"
                                    data-field_type="text"
                                    data-original_id="message"
                                    placeholder="Message"
                                  ></textarea>
                                </p>
                                <input
                                  type="hidden"
                                  value="et_contact_proccess"
                                  name="et_pb_contactform_submit_0"
                                />
                                <div className="et_contact_bottom_container">
                                  <button
                                    type="submit"
                                    name="et_builder_submit_button"
                                    className="et_pb_contact_submit et_pb_button"
                                  >
                                    Submit
                                  </button>
                                </div>
                                <input
                                  type="hidden"
                                  id="_wpnonce-et-pb-contact-form-submitted-0"
                                  name="_wpnonce-et-pb-contact-form-submitted-0"
                                  value="a422363c86"
                                />
                                <input
                                  type="hidden"
                                  name="_wp_http_referer"
                                  value="/"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_row et_pb_row_13">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_33 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_dark">
                            <div className="et_pb_text_inner">
                              <p>
                                <span>Created by&nbsp;</span>
                                <a href="https://flatline.nz/for-business/website-services/">
                                Waka Eastern Bay
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <span
            className="et_pb_scroll_top et-pb-icon et-hidden"
            style={{ display: "inline" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
