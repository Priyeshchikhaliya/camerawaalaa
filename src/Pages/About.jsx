import section from "../assets/Images/section.jpg";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${section})` }}
      >
        {/* Optional Content Overlay */}
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold mb-4">About</h1>
        </div>
      </div>
    </Layout>
  );
}

export default About;
