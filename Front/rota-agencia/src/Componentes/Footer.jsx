const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secundario p-4 text-black">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold text-black">
          &copy; {currentYear} ROTA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
