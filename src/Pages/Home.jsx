import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// Using environment variables for S3 assets
const s3BaseUrl = import.meta.env.VITE_S3_BASE_HOME_URL;
const section1 = `${s3BaseUrl}/section1.jpg`;
const section2 = `${s3BaseUrl}/section2.jpg`;
const section3 = `${s3BaseUrl}/section3.jpg`;
const section4 = `${s3BaseUrl}/section4.jpg`;
const videoUrl = `${s3BaseUrl}/section5.mp4`;

// Array of all images for preloading
const imagesToPreload = [section1, section2, section3, section4];

const Section1 = () => (
  <section
    className="h-screen bg-cover bg-center relative m-0 p-0 flex items-start justify-between select-none"
    style={{
      backgroundImage: `url(${section1})`,
    }}
  >
    <header className="absolute top-0 left-0 right-0 md:p-8 p-0 flex items-center justify-between">
      <Link to="/home">
        <img
          src={Logo}
          alt="Camerawaalaa - Professional Photography and Videography"
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
            Ready for the moment
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
        image: section2,
        speed: -30,
      },
    ]}
    className="relative w-full h-[75vh] bg-cover bg-no-repeat bg-center"
  >
    <Link to="/films" className="text-yellow-500 text-lg">
      <div className="absolute inset-y-0 left-0 w-1/2 group">
        {/* Overlay background for mobile (shown by default) and desktop (shown on hover) */}
        <div className="h-full bg-black opacity-40 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Text content with reversed alignment for mobile */}
        <div className="absolute left-4 right-4 select-none top-0 bottom-0 flex flex-col justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider md:text-right text-left font-mythicalRomanceNormal md:border-none border-r border-r-yellow-500 w-full">
            films
          </p>
          <p className="text-white text-lg md:text-right text-left">
            In every frame, a story unfolds, captured in time for eternity.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/images" className="text-yellow-500 text-lg ">
      <div className="absolute inset-y-0 right-0 w-1/2 group">
        {/* Overlay background for mobile (shown by default) and desktop (shown on hover) */}
        <div className="h-full bg-black opacity-40 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Text content with reversed alignment for mobile */}
        <div className="absolute right-4 left-4 select-none top-0 bottom-0 flex flex-col justify-center md:items-start items-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-yellow-500 text-4xl md:text-5xl md:text-left text-right lg:text-6xl font-light tracking-wider font-mythicalRomanceNormal">
            images
          </p>
          <p className="text-white text-lg md:text-left text-right">
            Each image, a whisper of life&apos;s fleeting beauty, frozen in
            stillness.
          </p>
        </div>
      </div>
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
    <div className="absolute left-4 select-none md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left font-mythicalRomanceNormal">
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
    <div className="absolute left-4 select-none md:left-24 lg:left-32 bottom-1/3 transform -translate-y-1/2 text-left font-mythicalRomanceNormal">
      <p className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
        A man with BIG dreams can&apos;t sleep well
      </p>
    </div>
  </ParallaxBanner>
);

const VideoSection = () => (
  <section className="relative h-[75vh] flex items-center justify-start bg-black bg-opacity-50 font-AileronsNormal">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={videoUrl}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    ></video>
  </section>
);

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    // Function to mark when all images are loaded
    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    // Preload all images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = imageLoaded;
      img.onerror = imageLoaded; // Count errors as "loaded" to avoid blocking
    });

    // If images take too long, show content anyway
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    // Clean up
    return () => clearTimeout(timer);
  }, []);

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
          name="keywords"
          content="photography, videography, camerawaalaa, portfolio, india, professional photographer"
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
        <meta property="og:url" content="https://camerawaalaa.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Camerawaalaa" />
        <link rel="canonical" href="https://camerawaalaa.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href={section1} />
        <link rel="preload" as="image" href={Logo} />
      </Helmet>
      <Layout>
        <div
          className={`flex flex-col no-scrollbar ${
            !imagesLoaded
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <VideoSection />
        </div>
        {!imagesLoaded && (
          <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className="text-yellow-500 text-2xl">
              Loading amazing visuals...
            </div>
          </div>
        )}
      </Layout>
    </ParallaxProvider>
  );
};

export default Home;
