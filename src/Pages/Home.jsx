// Home.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Logo from "../assets/Images/logo.png";
import hamburger_icon from "../assets/Icons/hamburger_icon.svg";

import section1 from "../assets/Images/Home/section1.jpg";
import section2 from "../assets/Images/Home/section2.jpg";
import section3 from "../assets/Images/Home/section3.jpg";
import section4 from "../assets/Images/Home/section4.jpg";
import Video from "../assets/Images/Home/section5.mov";

import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.svg";
import twitter from "../assets/Icons/twitter.svg";
import whatsapp from "../assets/Icons/whatsapp.svg";
import youtube from "../assets/Icons/youtube.svg";
import mail from "../assets/Icons/mail.svg";
import { Link } from "react-router-dom";

const Section1 = () => (
  <section
    className="h-screen bg-cover bg-center relative m-0 p-0 flex items-start justify-between select-none"
    style={{ backgroundImage: `url(${section1})` }}
  >
    <header className="absolute top-0 left-0 right-0 md:p-8 p-0 flex items-center justify-between">
      <Link to="/home">
        <img
          src={Logo}
          alt="Camerawaalaa"
          className="h-[60px] w-auto cursor-pointer absolute z-[99] left-5 top-5"
        />
      </Link>
      <div className="w-full h-screen absolute top-0 left-0 opacity-40 bg-black"></div>
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center items-center">
        <div className="text-center">
          <p className="text-[#ffdd6c] text-[100px] leading-[80px] font-BELOGONormal">
            C A M E R A W A A L A A{" "}
          </p>
          <p className="text-[#fff] font-AileronsNormal text-[35px]">
            ready for the moment
          </p>
        </div>
      </div>
    </header>
  </section>
);

const Section2 = () => (
  <ParallaxBanner
    layers={[
      {
        image: section2, // Use one seamless background image
        speed: -30, // Parallax speed
      },
    ]}
    className="relative w-full h-[75vh] bg-cover bg-no-repeat bg-center"
  >
    {/* Left Section with Overlay */}
    <Link to="/films" className="text-yellow-500 text-lg ">
      <div className="absolute inset-y-0 left-0 w-1/2 group">
        <div className="h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute left-4 select-none  top-0 bottom-0 flex flex-col justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider font-NewakeFontNormal">
            films
          </p>
          <p className="text-yellow-500 text-lg ">
            In every frame, a story unfolds, captured in time for eternity.
          </p>
        </div>
      </div>
    </Link>
    {/* Right Section with Overlay */}
    <Link to="/images" className="text-yellow-500 text-lg ">
      <div className="absolute inset-y-0 right-0 w-1/2 group">
        <div className="h-full bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute right-4 select-none top-0 bottom-0 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider font-NewakeFontNormal">
            images
          </p>
          <p className="text-yellow-500 text-lg ">
            Each image, a whisper of life’s fleeting beauty, frozen in
            stillness.
          </p>
        </div>
      </div>{" "}
    </Link>
  </ParallaxBanner>
);

const Section3 = () => (
  <ParallaxBanner
    layers={[
      {
        image: section3,
        speed: -30,
      },
    ]}
    className="h-[75vh] flex items-center justify-start bg-black bg-opacity-50 relative"
  >
    <div className="absolute left-4 select-none md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left font-NewakeFontNormal">
      <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
        Things I find comfort in
      </p>
    </div>
  </ParallaxBanner>
);

const Section4 = () => (
  <ParallaxBanner
    layers={[
      {
        image: section4,
        speed: -30,
      },
    ]}
    className="h-[75vh] flex items-center justify-start bg-black bg-opacity-50 relative"
  >
    <div className="absolute left-4 select-none md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left font-NewakeFontNormal">
      <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
        A man with BIG dreams can't sleep well
      </p>
    </div>
  </ParallaxBanner>
);

const VideoSection = () => (
  <section className="relative h-[75vh] flex items-center justify-start bg-black bg-opacity-50 font-AileronsNormal">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={Video}
      autoPlay
      muted
      loop
      playsInline
    ></video>
  </section>
);

const Footer = () => (
  <section className="h-[50vh] flex justify-center items-center">
    <div className="bg-white py-16 px-8 text-center">
      <h2 className="text-xl font-semibold mb-2">Join Our Journey</h2>
      <p className="text-gray-500 mb-6">
        Stay updated with our latest projects and adventures.
      </p>

      <div className="mt-8">
        <p className="text-xl font-light mb-4">Follow Us on Social Media</p>
        <div className="flex justify-center space-x-6 text-gray-700">
          <a href="mailto:info@camerawaalaa.com">
            <img
              src={mail}
              alt="Email Camerawaalaa"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a href="https://www.facebook.com/camerawaalaa/?_rdr">
            <img
              src={facebook}
              alt="Follow Camerawaalaa on Facebook"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a href="https://www.instagram.com/camerawaalaa/">
            <img
              src={instagram}
              alt="Follow Camerawaalaa on Instagram"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a href="https://www.youtube.com/@camerawaalaa">
            <img
              src={youtube}
              alt="Subscribe to Camerawaalaa on YouTube"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a href="https://wa.me/4915510468109">
            <img
              src={whatsapp}
              alt="Chat with Camerawaalaa on WhatsApp"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a href="https://x.com/camerawaalaa">
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
);

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
        {/* Section 1 */}
        <Section1 />

        {/* Section 2 */}
        <Section2 />

        {/* Section 3 */}
        <Section3 />

        {/* Section 4 */}
        <Section4 />

        {/* Video Section */}
        <VideoSection />

        {/* Footer */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Home;
