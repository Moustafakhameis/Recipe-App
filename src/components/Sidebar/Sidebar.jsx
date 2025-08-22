import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-BfNap0Pe.png";

function MyIcon({ className }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path>
    </svg>
  );
}

export default function Sidebar() {

  return (
    <>
    <div className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" >
      <aside className="w-64 shadow-lg flex-shrink-0 z-10 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="p-6 flex justify-center">
          <img src={logo} alt="Recipe Logo" className="w-full h-auto" />
        </div>
        <nav className="mt-6 space-y-2 px-2">
          <Link
            to="/"
            className="flex items-center px-4 py-3 bg-orange-400 text-white rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 text-lg shadow-lg shadow-orange-300 font-semibold"
          >
            <MyIcon className="h-6 w-6 mr-3" />
            <span>Meals</span>
          </Link>
          <button className=" mb-6 w-full text-left flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
            <MyIcon className="h-6 w-6 mr-3" />
            <span>Ingredients</span>
          </button>
          <button className="w-full text-left flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
            <MyIcon className="h-6 w-6 mr-3" />
            <span>Area</span>
          </button>
        </nav>
      </aside>
      </div>
    </>
  );
}
