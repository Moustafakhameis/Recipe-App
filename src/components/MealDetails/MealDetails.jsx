import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Youtube, Link as Source } from "lucide-react";
import { HashLoader } from "react-spinners";

export default function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 overflow-hidden sm:ml-64">
        <div className="flex items-center min-h-screen ms-120">
          <HashLoader size={50} />
        </div>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">Meal not found</p>
      </div>
    );
  }

  const ingredients = Array.from({ length: 20 })
    .map((_, i) => {
      const ingredient = meal[`strIngredient${i + 1}`];
      const measure = meal[`strMeasure${i + 1}`];
      if (ingredient && ingredient.trim() !== "") {
        return { ingredient, measure };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
      <div className="p-8 w-full bg-stone-100">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meal content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-lg shadow-md mb-6"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/f87171/ffffff?text=Image+Error";
              }}
            />
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed mb-6">
              {meal.strInstructions}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  <Youtube className="w-5 h-5" /> Youtube
                </a>
              )}
              {meal.strSource && (
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  <Source className="w-5 h-5" /> Source
                </a>
              )}
            </div>
          </div>

          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">
                Ingredients
              </h2>
              <ul>
                {ingredients.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="text-gray-700">{item.ingredient}</span>
                    <span className="font-semibold">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
