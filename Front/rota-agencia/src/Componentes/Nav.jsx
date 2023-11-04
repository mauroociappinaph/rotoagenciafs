import Logo from "../asset/ro-removebg-preview.png";

const Nav = () => {
  return (
    <nav className="bg-white py-5 text-black fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Rota Logo" className="h-24" />
      </div>
    </nav>
  );
};

export default Nav;
