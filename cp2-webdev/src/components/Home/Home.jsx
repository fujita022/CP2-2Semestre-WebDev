function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Olá
          </h1>
          <p className="text-4xl md:text-5xl leading-relaxed text-[#B0B0B0]">
            Meu nome é{' '}
            <a
              href="https://github.com/fujita022/"
              target="_blank"
              className="text-blue-900 font-bold transition duration-300 hover:underline"
              rel="noopener noreferrer"
            >
              Erick Fujita
            </a>
            , mas sou mais conhecido como Fujita. Sou estudante de Engenharia de Software na{' '}
            <a
              href="https://www.fiap.com.br/"
              target="_blank"
              className="text-red-400 font-bold transition duration-300 hover:underline"
              rel="noopener noreferrer"
            >
              FIAP
            </a>{' '}
            e tive meu primeiro contato com o mundo tecnológico e de marketing desde cedo. Iniciei minha carreira criando uma
            empresa dedicada à venda e à gestão logística de produtos da{' '}
            <a
              href="https://cloudybr.com.br/"
              target="_blank"
              className="text-blue-300 font-bold transition duration-300 hover:underline"
              rel="noopener noreferrer"
            >
              Cloudy
            </a>
            , onde pude desenvolver habilidades valiosas nesse campo dinâmico.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=ecf05e47isdhdtxqxnbphj8ciripxdi58q2a6c80k2ga1h3s&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
            alt="imagem direita" 
            className="w-full h-auto object-cover rounded-full" 
          />
        </div>
      </div>
    </>
  );
}

export default Home;
