import React from 'react';

function Contact() {
  return (
    <>
      <div className="fh5co-loader"></div>
	
	<div id="page">
	<nav className="fh5co-nav" role="navigation">
		<div className="top-menu">
			<div className="container">
				<div className="row">
					<div className="col-xs-2">
						<div id="fh5co-logo"><a href="index.html">Air<span>.</span></a></div>
					</div>
					<div className="col-xs-10 text-right menu-1">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="portfolio.html">Portfolio</a></li>
							<li className="has-dropdown">
								<a href="blog.html">Blog</a>
								<ul className="dropdown">
									<li><a href="#">Web Design</a></li>
									<li><a href="#">eCommerce</a></li>
									<li><a href="#">Branding</a></li>
									<li><a href="#">API</a></li>
								</ul>
							</li>
							<li><a href="about.html">About</a></li>
							<li className="active"><a href="contact.html">Contact</a></li>
							<li className="btn-cta"><a href="#"><span>Login</span></a></li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</nav>

	<div id="fh5co-contact">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Contact us</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
				</div>
			</div>
		</div>
		<div className="container">
				<div className="row">
					<div className="col-md-3 col-md-push-1 animate-box">
						<h3>Our Address</h3>
						<ul className="contact-info">
							<li><i className="icon-location"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
							<li><i className="icon-old-phone"></i>+ 1235 2355 98</li>
							<li><i className="icon-mail22"></i><a href="#">info@yoursite.com</a></li>
							<li><i className="icon-globe2"></i><a href="#">www.yoursite.com</a></li>
						</ul>
					</div>
					<div className="col-md-7 col-md-push-1 animate-box">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Name" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Email" />
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<textarea name="" className="form-control" id="" cols={30} rows={7} placeholder="Message"></textarea>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input type="submit" value="Send Message" className="btn btn-primary" />
								</div>
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
					<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
					<p><a href="#" className="btn btn-default btn-lg">Contact Us</a></p>
				</div>
			</div>
		</div>
	</div>

	<footer id="fh5co-footer" role="contentinfo">
		<div className="container">
			<div className="row row-pb-md">
				<div className="col-md-4 fh5co-widget">
					<h4>Air</h4>
					<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
				</div>
				<div className="col-md-2 col-md-push-1 fh5co-widget">
					<h4>Links</h4>
					<ul className="fh5co-footer-links">
						<li><a href="#">Home</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">About</a></li>
					</ul>
				</div>

				<div className="col-md-2 col-md-push-1 fh5co-widget">
					<h4>Categories</h4>
					<ul className="fh5co-footer-links">
						<li><a href="#">Landing Page</a></li>
						<li><a href="#">Real Estate</a></li>
						<li><a href="#">Personal</a></li>
						<li><a href="#">Business</a></li>
						<li><a href="#">e-Commerce</a></li>
					</ul>
				</div>

				<div className="col-md-4 col-md-push-1 fh5co-widget">
					<h4>Contact Information</h4>
					<ul className="fh5co-footer-links">
						<li>198 West 21th Street, <br /> Suite 721 New York NY 10016</li>
						<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
						<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
						<li><a href="http://https://freehtml5.co">freehtml5.co</a></li>
					</ul>
				</div>

			</div>

			<div className="row copyright">
				<div className="col-md-12 text-center">
					<p>
						<small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
						<small className="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
					</p>
					<p>
						<ul className="fh5co-social-icons">
							<li><a href="#"><i className="icon-twitter"></i></a></li>
							<li><a href="#"><i className="icon-facebook"></i></a></li>
							<li><a href="#"><i className="icon-linkedin"></i></a></li>
							<li><a href="#"><i className="icon-dribbble"></i></a></li>
						</ul>
					</p>
				</div>
			</div>

		</div>
	</footer>
	</div>

	<div className="gototop js-top">
		<a href="#" className="js-gotop"><i className="icon-arrow-up22"></i></a>
	</div>
    </>
  )
}

export default Contact;