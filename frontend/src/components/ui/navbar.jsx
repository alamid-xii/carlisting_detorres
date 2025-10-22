const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-600">CarBrand</h1>
      <div className="space-x-6 text-gray-700 font-medium">
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;
