import React from 'react'
import {useState, useEffect} from 'react'

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
      const data = await res.json();
      console.log(data)
      setMeals(data.meals);
    }
    fetchMeals();
  }, []);

  
  return (
    <div>
      <h1>Meals List</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default MealsList