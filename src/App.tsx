import LinkButton from "./components/LinkButton";
import "./App.css";
import { CgWebsite } from "react-icons/cg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import Links from "types/links";

const App = () => {
  const links: Links[] = [
    {
      href: "https://www.irfannm.xyz",
      text: "Visit my website and blog",
      icon: <CgWebsite />,
    },
    {
      href: "https://github.com/irfan44",
      text: "Visit my GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://linkedin.com/in/irfannm",
      text: "Connect to my LinkedIn",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.instagram.com/irfannm44",
      text: "Follow me on Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://twitter.com/irfannm44",
      text: "Follow me on Twitter",
      icon: <FaTwitter />,
    },
    {
      href: "https://open.spotify.com/user/22je64f7uorzzgddigufzncoq",
      text: "Listen on Spotify",
      icon: <FaSpotify />,
    },
  ];

  return (
    <div className="min-h-screen py-10 px-5">
      <div className="container max-w-2xl mx-auto text-center space-y-6">
        <div>
          <img
            className="rounded-full mx-auto"
            src="/irfan.jpeg"
            alt="Irfan"
            height={150}
            width={150}
          />
        </div>
        <div>
          <h4>Irfan Nurghiffari Muhajir</h4>
          <p>Frontend Engineer | Software Engineering Student</p>
        </div>
        <div className="space-y-4">
          {links.map((link) => {
            return (
              <LinkButton href={link.href} icon={link.icon} text={link.text} />
            );
          })}
        </div>
      </div>
      <div className="text-center mt-6">
        <div className="text-sm">
          <p>© 2022 Irfan Nurghiffari Muhajir</p>
          <p>With 😻 using React & Tailwind CSS</p>
        </div>
        <div className="flex justify-center text-sm mt-4">
          <a href="https://github.com/irfan44/socialtree" target="_blank">
            <div className="flex items-center">
              <span className="mr-2">
                <FaGithub />
              </span>
              Source code
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
