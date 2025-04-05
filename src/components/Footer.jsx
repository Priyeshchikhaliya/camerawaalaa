import facebook from "../assets/Icons/facebook.svg";
import instagram from "../assets/Icons/instagram.svg";
import twitter from "../assets/Icons/twitter.svg";
// import whatsapp from "../assets/Icons/whatsapp.svg";
import youtube from "../assets/Icons/youtube.svg";
import mail from "../assets/Icons/mail.svg";

const Footer = () => (
  <section className="h-[50vh] flex justify-center items-center">
    <div className="bg-white py-16 px-8 text-center  h-full w-full">
      <h2 className="text-xl font-semibold mb-2">Join Our Journey</h2>
      <p className="text-gray-500 mb-6">
        Stay updated with our latest projects and adventures.
      </p>

      <div className="mt-8">
        <p className="text-xl font-light mb-4">Follow Us on Social Media</p>
        <div className="flex justify-center space-x-6 text-gray-700">
          <a target="_blank" href="mailto:info@camerawaalaa.com">
            <img
              src={mail}
              alt="Email Camerawaalaa"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/camerawaalaa/?_rdr">
            <img
              src={facebook}
              alt="Follow Camerawaalaa on Facebook"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/camerawaalaa/">
            <img
              src={instagram}
              alt="Follow Camerawaalaa on Instagram"
              className="h-[24px] w-[24px]"
            />
          </a>
          <a target="_blank" href="https://www.youtube.com/@camerawaalaa">
            <img
              src={youtube}
              alt="Subscribe to Camerawaalaa on YouTube"
              className="h-[24px] w-[24px]"
            />
          </a>
          {/* <a target="_blank" href="https://wa.me/4915510468109">
            <img
              src={whatsapp}
              alt="Chat with Camerawaalaa on WhatsApp"
              className="h-[24px] w-[24px]"
            />
          </a> */}
          <a target="_blank" href="https://x.com/camerawaalaa">
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

export default Footer;
