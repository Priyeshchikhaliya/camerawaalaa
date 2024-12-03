/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo.png";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    {
      link: "/",
      text: "Home",
      description:
        "Where every frame tells a story and every moment becomes timeless.",
    },
    {
      link: "/films",
      text: "Films",
      description:
        "Moving portraits of life, capturing emotions in motion and stories in light.",
    },
    {
      link: "/images",
      text: "Images",
      description:
        "A collection of visual poetry, each image a window to a unique perspective.",
    },
    {
      link: "/about",
      text: "About",
      description:
        "The journey behind the lens, where passion meets precision.",
    },
    {
      link: "/review",
      text: "Review",
      description:
        "Echoes of satisfaction, stories from those who trusted our vision.",
    },
    {
      link: "/contact",
      text: "Contact",
      description: "Let&apos;s create something extraordinary together.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Link to="/">
        <img
          src={Logo}
          alt="Camerawaalaa"
          className="h-[60px] w-auto fixed z-[99] left-5 top-5"
        />
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-[1001] flex flex-col gap-1.5 w-8"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-opacity ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 bg-black/95 transition-transform duration-500 z-[1000] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-row-reverse items-center justify-between px-8 md:px-16 select-none">
          <div className="md:w-1/2 w-full md:pl-8 pt-24 md:pt-0">
            <nav className="space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.link}
                  className="relative overflow-hidden text-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? "slideIn 0.5s forwards" : "none",
                  }}
                >
                  <Link
                    to={item.link}
                    className="text-4xl md:text-5xl block font-light text-white hover:text-yellow-500 transition-colors font-BELOGONormal py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="md:w-1/2 w-full md:block hidden text-left">
            {menuItems.map((item, index) => (
              <div
                key={`desc-${item.link}`}
                className={`transition-all duration-500 absolute left-16 top-1/2 -translate-y-1/2 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-2xl font-light text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main>{children}</main>
      <Footer />

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
