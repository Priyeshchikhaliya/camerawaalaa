// Home.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Logo from "../assets/Images/Logo.png";
import hamburger_icon from "../assets/Icons/hamburger_icon.svg";

import section1 from "../assets/Images/section1.png";
import section2 from "../assets/Images/section2.png";
import section3 from "../assets/Images/section3.png";
import section4 from "../assets/Images/section4.png";

import Video from "../assets/Videos/Video.mp4";

import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.svg";
import twitter from "../assets/Icons/twitter.svg";
import whatsapp from "../assets/Icons/whatsapp.svg";
import youtube from "../assets/Icons/youtube.svg";
import mail from "../assets/Icons/mail.svg";

// Sections array
const sections = [
  {
    id: 2,
    image: section2,
    text: "LIMITED EDITION PRINTS",
    linkText: "Shop Limited Edition Prints →",
  },
  {
    id: 3,
    image: section3,
    text: "Explore Photography Artworks",
    linkText: "Explore Photography Artworks →",
  },
  {
    id: 4,
    image: section4,
    text: "Discover Video Projects",
    linkText: "Discover Our Video Projects →",
  },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ParallaxProvider>
      <Helmet>
        <title>
          Camerawaalaa | Professional Photography and Videography Portfolio
        </title>
        <meta
          name="description"
          content="Explore the portfolio of Camerawaalaa, showcasing professional photography and videography services. Discover limited edition prints, artistic video projects, and more."
        />
        <meta
          property="og:title"
          content="Camerawaalaa | Professional Photography and Videography"
        />
        <meta
          property="og:description"
          content="Explore stunning photography and videography projects by Camerawaalaa. Discover limited edition prints and more."
        />
        <meta property="og:image" content={section1} />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>

      <div className="flex flex-col no-scrollbar">
        {/* First Section with Header */}
        <section
          className="h-screen bg-cover bg-center relative m-0 p-0 flex items-start justify-between"
          style={{ backgroundImage: `url(${section1})` }}
        >
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 md:p-8 p-0 flex items-center justify-between">
            {/* Logo */}
            <img
              src={Logo}
              alt="Camerawaalaa Logo"
              className="h-[60px] w-auto cursor-pointer"
            />

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={hamburger_icon} alt="Open Menu" className="h-6 w-6" />
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute md:static top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-8 bg-white md:bg-transparent p-4 md:p-0`}
            >
              <a
                href="#"
                className="block md:inline text-black text-sm font-light tracking-wider hover:underline"
              >
                SHOP
              </a>
              <a
                href="#"
                className="block md:inline text-black text-sm font-light tracking-wider hover:underline"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="block md:inline text-black text-sm font-light tracking-wider hover:underline"
              >
                CONTACT
              </a>
            </nav>
          </header>
        </section>

        {/* Subsequent Sections */}
        {sections.map((section) => (
          <ParallaxBanner
            key={section.id}
            layers={[
              {
                image: section.image,
                speed: -30,
              },
            ]}
            className="h-[75vh] flex items-center justify-start bg-black bg-opacity-50 relative"
          >
            <div className="absolute left-4 md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left">
              <p className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
                {section.text}
              </p>
              <a
                href="#"
                className="mt-4 text-yellow-500 text-lg font-semibold underline block"
              >
                {section.linkText}
              </a>
            </div>
          </ParallaxBanner>
        ))}

        {/* Video Section */}
        <section className="relative h-[75vh] flex items-center justify-start bg-black bg-opacity-50">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Video}
            autoPlay
            muted
            loop
            playsInline
          ></video>

          {/* Text Overlay */}
          <div className="absolute left-4 md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left z-10">
            <p className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
              Explore Our YouTube Channel
            </p>
            <a
              href="https://www.youtube.com/@camerawaalaa"
              className="mt-4 text-yellow-500 text-lg font-semibold underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More Videos →
            </a>
          </div>
        </section>

        {/* Footer */}
        <section className="h-[50vh] flex justify-center items-center">
          {/* Footer Section */}
          <div className="bg-white py-16 px-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Join Our Journey</h2>
            <p className="text-gray-500 mb-6">
              Stay updated with our latest projects and adventures.
            </p>

            {/* Social Media Links */}
            <div className="mt-8">
              <p className="text-xl font-light mb-4">
                Follow Us on Social Media
              </p>
              <div className="flex justify-center space-x-6 text-gray-700">
                <a
                  href="mailto:info@camerawaalaa.com"
                  aria-label="Email Camerawaalaa"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mail}
                    alt="Email Camerawaalaa"
                    className="h-[24px] w-[24px]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/camerawaalaa/?_rdr"
                  aria-label="Follow on Facebook"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Follow Camerawaalaa on Facebook"
                    className="h-[24px] w-[24px]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/camerawaalaa/"
                  aria-label="Follow on Instagram"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Follow Camerawaalaa on Instagram"
                    className="h-[24px] w-[24px]"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@camerawaalaa"
                  aria-label="Subscribe on YouTube"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={youtube}
                    alt="Subscribe to Camerawaalaa on YouTube"
                    className="h-[24px] w-[24px]"
                  />
                </a>
                <a
                  href="https://wa.me/4915510468109"
                  aria-label="Chat on WhatsApp"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatsapp}
                    alt="Chat with Camerawaalaa on WhatsApp"
                    className="h-[24px] w-[24px]"
                  />
                </a>
                <a
                  href="https://x.com/camerawaalaa"
                  aria-label="Follow on Twitter"
                  className="hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Follow Camerawaalaa on Twitter"
                    className="h-[24px] w-[24px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
