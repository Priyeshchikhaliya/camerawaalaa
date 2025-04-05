import section from "../assets/Images/section.jpg";
import Layout from "../components/Layout";

const Films = () => {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${section})` }}
      >
        {/* Optional Content Overlay */}
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold mb-4">Films Gallery</h1>
          <p className="text-lg italic">
            Captured moments, frozen in time, to relive again.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Films;
