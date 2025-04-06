import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import sectionImage from "../assets/Images/section.jpg";

// Category information
const categoryInfo = {
  all: {
    title: "All Photography",
    description: "Complete collection of photographic works",
  },
  events: {
    title: "Event Photography",
    description: "Capturing special moments and celebrations",
  },
  "life-style": {
    title: "Lifestyle Photography",
    description: "Everyday moments that tell a story",
  },
  portraits: {
    title: "Portrait Photography",
    description: "Personality and emotion in every frame",
  },
  travel: {
    title: "Travel Photography",
    description: "Exploring the world through photography",
  },
};

const ImageCategory = () => {
  const { category } = useParams();
  const info = categoryInfo[category] || {
    title: "Photography",
    description: "Explore our photography collection",
  };

  return (
    <Layout>
      <Helmet>
        <title>{info.title} | Camerawaalaa</title>
        <meta name="description" content={info.description} />
      </Helmet>

      {/* Category Hero Section */}
      <div
        className="h-[50vh] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${sectionImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-center text-white z-10 relative px-4">
          <h1 className="text-6xl md:text-7xl font-mythicalRomanceNormal text-[#ffdd6c] mb-4">
            {info.title}
          </h1>
          <p className="text-lg italic max-w-2xl mx-auto">{info.description}</p>
        </div>
      </div>

      {/* Back to Categories Link */}
      <div className="bg-black py-6 px-4">
        <div className="container mx-auto">
          <Link to="/images" className="text-[#ffdd6c] hover:underline">
            ← Back to Categories
          </Link>
        </div>
      </div>

      {/* Placeholder for Gallery */}
      <div className="bg-black min-h-screen py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <p className="mb-8">
            Gallery under construction for {category} category.
          </p>

          {/* This is where you'll implement your gallery grid later */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-800 relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sectionImage})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageCategory;
