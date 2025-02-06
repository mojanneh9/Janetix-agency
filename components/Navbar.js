export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gradient-to-r from-black to-gray-900 backdrop-blur-md p-4 flex justify-center space-x-8 text-gray-200 shadow-md z-50">
        <a
          href="#services"
          className="hover:text-purple-400 transition-all text-lg font-semibold tracking-wide"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="hover:text-purple-400 transition-all text-lg font-semibold tracking-wide"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="hover:text-purple-400 transition-all text-lg font-semibold tracking-wide"
        >
          Contact
        </a>
      </nav>
    );
  }