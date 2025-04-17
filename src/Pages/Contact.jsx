import  { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Environment variable for the contact page background
  const contactBgUrl = import.meta.env.VITE_S3_CONTACT_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

      // Using EmailJS for form submission
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name || "Website Visitor",
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID // Public key
      );

      if (response.status === 200) {
        toast.success(
          "Your message has been sent! We'll get back to you soon.",
          {
            position: "top-center",
            autoClose: 5000,
          }
        );
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Something went wrong. Please try again or email us directly.",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Camerawaalaa</title>
        <meta
          name="description"
          content="Get in touch with Camerawaalaa for professional photography and videography services."
        />
      </Helmet>
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4 py-16 md:py-0"
        style={{ backgroundImage: `url(${contactBgUrl})` }}
      >
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

        <div className="container mx-auto px-4 z-10 max-w-lg">
          {/* Main form container */}
          <div className="bg-black/60 p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Glass effects container (separate from content) */}
            <div className="absolute inset-0 backdrop-blur-md pointer-events-none"></div>

            {/* Content container - positioned above the glass effects */}
            <div className="relative z-10">
              <p className="text-4xl font-light mb-6 text-yellow-500 font-mythicalRomanceNormal select-none">
                Get in Touch
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-yellow-500 text-sm mb-1 select-none"
                  >
                    Name (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/70 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-yellow-500 text-sm mb-1 select-none"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/70 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-yellow-500 text-sm mb-1 select-none"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-black/70 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 placeholder-gray-500 transition-all duration-300"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </form>

              <div className="mt-8 text-gray-300 text-sm select-none">
                <p className="">You can also reach out directly at:</p>
                <div className="flex items-center mt-1">
                  <p className="text-yellow-500">info@camerawaalaa.com</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("info@camerawaalaa.com");
                      toast.success("Email copied to clipboard!", {
                        position: "top-center",
                        autoClose: 2000,
                      });
                    }}
                    className="ml-2 p-1 text-yellow-500 hover:text-yellow-400 transition-colors bg-black/70 rounded-md"
                    aria-label="Copy email address"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        theme="dark"
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="bg-black/90 border border-yellow-500/20 shadow-xl text-white"
      />
    </Layout>
  );
}

export default Contact;
