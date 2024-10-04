import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#0f1624] text-white py-6 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 text-center md:text-left">
            <span className="text-xl md:text-3xl">
              Developed by{" "}
              <span className="text-blue-900 text-4xl md:text-5xl font-semibold animate-pulse bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent shadow-lg">
                Erick Fujita
              </span>{" "}
              in 2024
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqLPGDjntHRnvNnRsgFWfVGmgnsLmbfZGlWjmHGSZJmFtgnFMMCvRrKDDpCTMPQZtzNq"
              className="flex items-center p-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#6d8484] transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={30} />
              <span className="ml-2 text-lg md:text-xl">Email</span>
            </a>
            <a
              href="https://github.com/fujita022"
              className="flex items-center p-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#6d8484] transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
              <span className="ml-2 text-lg md:text-xl">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/erickfujita/"
              className="flex items-center p-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#6d8484] transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
              <span className="ml-2 text-lg md:text-xl">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
