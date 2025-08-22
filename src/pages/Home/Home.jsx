import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../../components/Categories/Categories";
import MealCard from "../../components/MealCard/MealCard";
import { HashLoader } from "react-spinners";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const getRecipes = async (term = "All", type = "category") => {
    try {
      setLoading(true);
      let response;
      let mealsData = [];

      if (term === "All") {
        response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        mealsData = response.data.meals || [];
      } else {
        response = await axios.get(
          type === "area"
            ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`
            : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`
        );

        const meals = response.data.meals || [];

        const detailedMeals = await Promise.all(
          meals.map(async (meal) => {
            const detailRes = await axios.get(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            return detailRes.data.meals[0];
          })
        );

        mealsData = detailedMeals;
      }

      setMeals(mealsData);
      setSelectedCategory(term);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes("All");
  }, []);
  if (loading) {
    return (
      <div className="p-4 overflow-hidden sm:ml-64">
        <div className="flex items-center min-h-screen ms-130">
          <HashLoader size={50} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 overflow-hidden w-full sm:ml-64 min-h-screen bg-[#F4F2EE]">
      <div className="container py-8 px-4">
        <h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-[#F29625] via-[#ff3b3b] to-[#c90519] bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h1>

        <Categories
          onSelectCategory={getRecipes}
          selectedCategory={selectedCategory}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-3xl h-80 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20 mt-24">
            {meals.length > 0 ? (
              meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No recipes found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
