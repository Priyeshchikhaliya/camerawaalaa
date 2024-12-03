import section from "../assets/Images/Home/section.jpg";
import Layout from "../components/Layout";

const Images = () => {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${section})` }}
      >
        {/* Optional Content Overlay */}
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg italic">
            Captured moments, frozen in time, to relive again.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Images;
