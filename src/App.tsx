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
      href: "https://irfannm.me",
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
      href: "https://www.instagram.com/irfan_nm44",
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
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto pb-5 pt-10 px-5 text-center space-y-6">
        <img
          className="rounded-full mx-auto"
          src="/irfan.jpeg"
          alt="Irfan"
          height={150}
          width={150}
        />
        <div>
          <h4>Irfan Nurghiffari Muhajir</h4>
          <p>Front-end engineer | Software engineering student</p>
        </div>
        <div className="space-y-4">
          {links.map((link) => {
            return (
              <LinkButton href={link.href} icon={link.icon} text={link.text} />
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5 mb-10">
        <div>
          <p className="text-sm">© 2022 Irfan Nurghiffari Muhajir</p>
          <p className="text-sm">With 😻 using React & Tailwind CSS</p>
        </div>
        <div className="flex justify-center text-sm">
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
