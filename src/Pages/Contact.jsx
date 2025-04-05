import { useState } from "react";
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
      // Using EmailJS for form submission - you'll need to set up an account
      // and add your service ID, template ID, and user ID
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name || "Website Visitor",
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
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
        <script>
          {`
      (function() {
        emailjs.init("${import.meta.env.VITE_EMAILJS_USER_ID}");
      })();
    `}
        </script>
      </Helmet>
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${contactBgUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-md mx-auto bg-black bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border border-yellow-500/30">
            <h1 className="text-4xl font-light mb-6 text-yellow-500 font-mythicalRomanceNormal">
              Get in Touch
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-yellow-500 text-sm mb-1"
                >
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-yellow-500 text-sm mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-yellow-500 text-sm mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <div className="mt-8 text-gray-400 text-sm">
              <p>You can also reach out directly at:</p>
              <p className="text-yellow-500 mt-1">hello@camerawaalaa.com</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </Layout>
  );
}

export default Contact;
