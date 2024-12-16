import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams(); 
  const [info, setInfo] = useState(null);

  
  const getInfo = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await response.json();
      if (jsonData.meals && jsonData.meals.length > 0) {
        setInfo(jsonData.meals[0]);
      } else {
        setInfo(null); 
      }
    } catch (error) {
      console.error('Error fetching meal data:', error);
      setInfo(null); 
    }
  };

  
  useEffect(() => {
    getInfo();
  }, [mealid]); 

  if (!info) {
    return <div>Data Not Found</div>; 
  }

  return (
    <div>
      <div className="mealInfo">
        <img src={info.strMealThumb} alt={info.strMeal} />
        <div className="info">
          <h1>Recipe Detail</h1>
          <button>{info.strMeal}</button>
          <h3>Instructions</h3>
          <p>{info.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Mealinfo;
