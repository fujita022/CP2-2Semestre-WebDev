function ProjetosCard({ id, title, image, description, tags, codeLink, liveLink }) {
  return (
    <div 
      id={id} 
      className="bg-[#0f1624] text-white rounded-lg shadow-md overflow-hidden p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl" 
      style={{ minHeight: '450px' }} 
    >
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" /> 
      
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-center mb-4">{title}</h3>
        <p className="text-gray-400 text-center mb-6">{description}</p>
      </div>

      <div className="flex justify-center flex-wrap mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#6d8484] text-lg rounded-full px-5 py-3 text-white mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <a
          href={codeLink}
          target="_blank"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Código
        </a>
        <a
          href={liveLink}
          target="_blank"
          className="px-6 py-3 bg-green-400 text-white rounded-md hover:bg-green-500 transition duration-300"
        >
          Visitar
        </a>
      </div>
    </div>
  );
}

export default ProjetosCard;
