function Footer() {
  return ( 
    <>
    <footer className="bg-[#0f1624] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-lg">Developed by Erick Fujita</span>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:seuemail@example.com" className="flex items-center">
            <span className="ml-2">Email</span>
          </a>
          <a href="tel:+5511999999999" className="flex items-center">
            <span className="ml-2">Telefone</span>
          </a>
        </div>
      </div>
    </footer>
    </>
   );
}

export default Footer;