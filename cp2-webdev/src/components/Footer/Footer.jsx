function Footer() {
  return ( 
    <>
    <footer className="bg-[#0f1624] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
        <span className="text-3xl">
  Developed by{" "}
  <span className="text-blue-900 text-5xl font-semibold animate-pulse bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent shadow-lg">
    Erick Fujita
  </span>{" "}
  in 2024
</span>        </div>
        <div className="flex space-x-4">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqLPGDjntHRnvNnRsgFWfVGmgnsLmbfZGlWjmHGSZJmFtgnFMMCvRrKDDpCTMPQZtzNq" className="flex items-center">
            <span className="ml-2">Email</span>
          </a>

        </div>
      </div>
    </footer>
    </>
   );
}

export default Footer;