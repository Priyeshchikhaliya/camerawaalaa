import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";

// Using environment variables for S3 images
const mainImage = import.meta.env.VITE_S3_IMAGES_MAIN;
const allImage = import.meta.env.VITE_S3_IMAGES_ALL;
const eventsImage = import.meta.env.VITE_S3_IMAGES_EVENTS;
const lifestyleImage = import.meta.env.VITE_S3_IMAGES_LIFESTYLE;
const portraitsImage = import.meta.env.VITE_S3_IMAGES_PORTRAITS;
const travelImage = import.meta.env.VITE_S3_IMAGES_TRAVEL;

// Category data with S3 images
const categories = [
  {
    id: "all",
    title: "All",
    description: "Complete collection of photographic works",
    image: allImage,
  },
  {
    id: "events",
    title: "Events",
    description: "Capturing special moments and celebrations",
    image: eventsImage,
  },
  {
    id: "life-style",
    title: "Life Style",
    description: "Everyday moments that tell a story",
    image: lifestyleImage,
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Personality and emotion in every frame",
    image: portraitsImage,
  },
  {
    id: "travel",
    title: "Travel",
    description: "Exploring the world through photography",
    image: travelImage,
  },
];

const Images = () => {
  const firstCategoryRef = useRef(null);

  const scrollToCategories = () => {
    if (firstCategoryRef.current) {
      firstCategoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Photography Portfolio | Camerawaalaa</title>
        <meta
          name="description"
          content="Explore the diverse photography portfolio of Camerawaalaa featuring stunning events, lifestyle, portraits, and travel photography captured with artistic vision."
        />
        <meta
          name="keywords"
          content="photography portfolio, professional photographer, portrait photography, event photography, travel photography, lifestyle photography, India"
        />
        <meta
          property="og:title"
          content="Photography Portfolio | Camerawaalaa"
        />
        <meta
          property="og:description"
          content="Explore the diverse photography portfolio of Camerawaalaa featuring stunning events, lifestyle, portraits, and travel photography captured with artistic vision."
        />
        <meta property="og:image" content={mainImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://camerawaalaa.com/images" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Photography Portfolio | Camerawaalaa"
        />
        <meta
          name="twitter:description"
          content="Explore Camerawaalaa's diverse photography portfolio featuring stunning events, portraits, and travel photography."
        />
        <meta name="twitter:image" content={mainImage} />
        <link rel="canonical" href="https://camerawaalaa.com/images" />
      </Helmet>

      {/* Hero Section - Full screen */}
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center text-white z-10 relative px-4 select-none">
          <h1 className="text-[80px] md:text-[100px] leading-[0.9] font-BELOGONormal text-[#ffdd6c] mb-4">
            IMAGES
          </h1>
          <p className="text-lg italic font-AileronsNormal max-w-xl mx-auto">
            Captured moments, frozen in time, to relive again.
          </p>

          {/* Scroll indicator */}
          <div
            className="flex items-center justify-center mt-8 cursor-pointer"
            onClick={scrollToCategories}
            aria-label="Scroll to view categories"
          >
            <div className="flex flex-col items-center">
              <p className="text-[#ffdd6c] mb-2 text-sm">SCROLL</p>
              <div className="w-6 h-10 rounded-full border-2 border-[#ffdd6c] flex justify-center">
                <div className="w-1 h-2 bg-[#ffdd6c] rounded-full mt-1 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <Link
          key={category.id}
          to={`/images/${category.id}`}
          className="block relative w-full h-[70vh] overflow-hidden group"
          ref={index === 0 ? firstCategoryRef : null}
          aria-label={`View ${category.title} photography`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 w-full will-change-transform"
            style={{ backgroundImage: `url(${category.image})` }}
            loading="lazy"
            aria-hidden="true"
          ></div>

          {/* Overlay only appears on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center transition-all duration-500 transform group-hover:scale-110 will-change-transform">
              <h2 className="text-[#ffdd6c] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mythicalRomanceNormal mb-4 drop-shadow-lg">
                {category.title}
              </h2>
              <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {category.description}
              </p>
              <div className="mt-4 md:mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="inline-block border border-[#ffdd6c] text-[#ffdd6c] px-4 py-1 md:px-6 md:py-2 hover:bg-[#ffdd6c] hover:text-black transition-colors duration-300 text-sm md:text-base">
                  View Gallery
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default Images;
