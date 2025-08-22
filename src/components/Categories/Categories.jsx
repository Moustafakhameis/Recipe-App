import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories([
          "All",
          ...response.data.categories.map((c) => c.strCategory),
        ]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <ul className="mb-20 pb-10 sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
       {categories.map((category) => (
        <li key={category} className="me-2">
          <button
            onClick={() => onSelectCategory(category)}
            className={`inline-block px-4 py-2 catLink border border-gray-400 transition-all hover:shadow-xl shadow duration-300 rounded-full
              ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
