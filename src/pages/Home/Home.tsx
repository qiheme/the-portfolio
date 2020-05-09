import React from 'react';

function Home() {
  return (
    <>
      <div className="fh5co-loader"></div>

      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-2">
                  <div id="fh5co-logo">
                    <a href="index.html">
                      Air<span>.</span>
                    </a>
                  </div>
                </div>
                <div className="col-xs-10 text-right menu-1">
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="blog.html">Blog</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">eCommerce</a>
                        </li>
                        <li>
                          <a href="#">Branding</a>
                        </li>
                        <li>
                          <a href="#">API</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="btn-cta">
                      <a href="#">
                        <span>Login</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <h1>Creativity Is A Wild Mind &amp; A Disciplined Eye</h1>
                    <h2>
                      Free html5 templates Made by{" "}
                      <a href="http://freehtml5.co/" target="_blank">
                        freehtml5.co
                      </a>
                    </h2>
                    <p>
                      <a className="btn btn-primary btn-lg btn-demo" href="#">
                        {" "}
                        View Demo
                      </a>{" "}
                      <a className="btn btn-primary btn-lg btn-learn">
                        Learn More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="fh5co-features">
          <div className="container">
            <div className="services-padding">
              <div className="row">
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-hotairballoon"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Marketing</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-search"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Search Engine</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-wallet"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Earn Money</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-wine"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Entrepreneur</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-genius"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Stragic Plan</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-chat"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Support</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                      <p>
                        <a href="#">
                          Learn More <i className="icon-arrow-right22"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-wireframe">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Wireframe Connects the Underlying Conceptual Structure</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 animate-box">
                <div className="user-frame">
                  <h3>
                    Wireframe Connects the Underlying Conceptual Structure
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts far from the countries Vokalia and Consonantia, there
                    live the blind texts.{" "}
                  </p>
                  <span>Louie Jie Mahusay</span>
                  <br />
                  <small>CEO, Founder</small>
                </div>
              </div>
              <div className="col-md-7 animate-box">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.{" "}
                </p>
                <blockquote>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts far from the countries Vokalia and Consonantia, there
                    live the blind texts.{" "}
                  </p>
                </blockquote>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts. far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-6 animate-box">
                <div className="heading">
                  <h2>Download Our Latest Free HTML5 Bootstrap Template</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-md-push-1 animate-box">
                <aside id="fh5co-hero">
                  <div className="flexslider">
                    <ul className="slides">
                      <li
                        style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}
                      >
                        <div className="overlay-gradient"></div>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                              <div className="slider-text-inner">
                                <div className="desc">
                                  <h2>Air Free HTML5 Bootstrap Template</h2>
                                  <p>
                                    Ink is a free html5 bootstrap and a
                                    multi-purpose template perfect for any type
                                    of websites. A combination of a minimal and
                                    modern design template. The features are big
                                    slider on homepage, smooth animation,
                                    product listing and many more
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}
                      >
                        <div className="overlay-gradient"></div>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                              <div className="slider-text-inner">
                                <div className="desc">
                                  <h2>Ink Free HTML5 Bootstrap Template</h2>
                                  <p>
                                    Ink is a free html5 bootstrap and a
                                    multi-purpose template perfect for any type
                                    of websites. A combination of a minimal and
                                    modern design template. The features are big
                                    slider on homepage, smooth animation,
                                    product listing and many more
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}
                      >
                        <div className="overlay-gradient"></div>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                              <div className="slider-text-inner">
                                <div className="desc">
                                  <h2>Travel Free HTML5 Bootstrap Template</h2>
                                  <p>
                                    Ink is a free html5 bootstrap and a
                                    multi-purpose template perfect for any type
                                    of websites. A combination of a minimal and
                                    modern design template. The features are big
                                    slider on homepage, smooth animation,
                                    product listing and many more
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-blog">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Recent Post</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/blog-1.jpg)" }}
                  ></a>
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2016</span>
                    <h3>
                      <a href="#">Photoshoot On The Street</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2"></i>249
                      </li>
                      <li>
                        <i className="icon-eye2"></i>1,308
                      </li>
                      <li>
                        <a href="#">
                          Read More<i className="icon-arrow-right22"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/blog-2.jpg)" }}
                  ></a>
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2016</span>
                    <h3>
                      <a href="#">Surfing at Philippines</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2"></i>249
                      </li>
                      <li>
                        <i className="icon-eye2"></i>1,308
                      </li>
                      <li>
                        <a href="#">
                          Read More<i className="icon-arrow-right22"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/blog-3.jpg)" }}
                  ></a>
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2016</span>
                    <h3>
                      <a href="#">Focus On Uderwater</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2"></i>249
                      </li>
                      <li>
                        <i className="icon-eye2"></i>1,308
                      </li>
                      <li>
                        <a href="#">
                          Read More<i className="icon-arrow-right22"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-started">
          <div className="overlay"></div>
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Hire Us!</h2>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
                <p>
                  <a href="#" className="btn btn-default btn-lg">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-4 fh5co-widget">
                <h4>Air</h4>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
              </div>
              <div className="col-md-2 col-md-push-1 fh5co-widget">
                <h4>Links</h4>
                <ul className="fh5co-footer-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 col-md-push-1 fh5co-widget">
                <h4>Categories</h4>
                <ul className="fh5co-footer-links">
                  <li>
                    <a href="#">Landing Page</a>
                  </li>
                  <li>
                    <a href="#">Real Estate</a>
                  </li>
                  <li>
                    <a href="#">Personal</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">e-Commerce</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-md-push-1 fh5co-widget">
                <h4>Contact Information</h4>
                <ul className="fh5co-footer-links">
                  <li>
                    198 West 21th Street, <br /> Suite 721 New York NY 10016
                  </li>
                  <li>
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </li>
                  <li>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </li>
                  <li>
                    <a href="http://https://freehtml5.co">freehtml5.co</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">
                    &copy; 2016 Free HTML5. All Rights Reserved.
                  </small>
                  <small className="block">
                    Designed by{" "}
                    <a href="http://freehtml5.co/" target="_blank">
                      FreeHTML5.co
                    </a>{" "}
                    Demo Images:{" "}
                    <a href="http://unsplash.co/" target="_blank">
                      Unsplash
                    </a>
                  </small>
                </p>
                <p>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up22"></i>
        </a>
      </div>
    </>
  );
}

export default Home;