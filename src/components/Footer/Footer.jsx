import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-BfNap0Pe.png";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm  z-[55] relative w-ful py-4 px-8 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 pt-0 md:pb-8">
        <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 sm:mx-auto my-6 pb-6 dark:border-gray-700 lg:my-8">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} alt="Logo" className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Recipe
            </span>
          </Link>
          <span className="text-blue-700 font-bold text-2xl">Route</span>
        </div>
        <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          <span>
            © 2025{" "}
            <a
              href="https://www.linkedin.com/in/moustafaly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 font-medium"
            >
              𝐌𝐎𝐒𝐓𝐀𝐅𝐀 𖤍 
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
