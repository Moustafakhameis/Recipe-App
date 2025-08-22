import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function MealCard({ meal }) {
  const navigate = useNavigate();
  const area = meal.strArea || "Unknown";

  return (
    <div className="bg-stone-50 rounded-3xl shadow-md p-6 pt-35 relative flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-105 group">

      <div className="absolute -top-10 w-40 h-40">
        <img
          className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]"
          src={meal.strMealThumb}
          alt={meal.strMeal}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/160x160/f87171/ffffff?text=Error";
          }}
        />
      </div>


      <h3 className="font-bold text-lg text-gray-800 text-center mt-4">
        {meal.strMeal}
      </h3>


      {area && (
        <p className="text-sm text-teal-600 font-semibold mb-4 flex items-center gap-1">
          <MapPin className="w-4 h-4" /> {area}
        </p>
      )}


      <button
       onClick={() => navigate(`/meal/${meal.idMeal}`)}
        className="w-full bg-[#21ba75] text-white font-semibold py-2 px-4 rounded-full hover:bg-emerald-600 transition duration-300 mt-auto"
      >
        View Recipe
      </button>
    </div>
  );
}
