import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Sociais() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <h2 className="text-white text-3xl font-bold mb-4 text-center">Minhas Redes Sociais</h2>
      <div className="flex flex-wrap justify-center space-x-6">
        <a
          href="https://www.instagram.com/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition duration-300 mb-4"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://github.com/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300 mb-4"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/seu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300 mb-4"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}

export default Sociais;
