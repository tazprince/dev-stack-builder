import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="hidden md:flex justify-between items-center">
          <img src={Logo} className="h-8" alt="Dev-Stack-Logo" />
          <ul className="flex gap-6">
            <li>
              <a
                href=""
                className="text-pink-500 hover:text-pink-600 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-gray-600">
                Technologies
              </a>
            </li>
            <li>
              <a href="" className="text-gray-600">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-gray-600">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="text-sm text-gray-700 cursor-pointer">
              Sign In
            </button>
            <button className="btn btn-sm rounded-full bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
              SignUp
            </button>
          </div>
        </div>
        {/* mobile view */}

        <div className="flex md:hidden h-16 items-center justify-between">
          {/* Hamburger */}
          <button className="text-gray-600 text-2xl">
            <FiMenu />
          </button>
          <img src={Logo} className="h-8" alt="Dev-Stack-Logo" />
          <div className="flex gap-4">
            <button className="text-sm text-gray-700 cursor-pointer">
              Sign In
            </button>
            <button className="btn btn-sm rounded-full bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
