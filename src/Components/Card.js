import React from 'react'
import { NavLink } from 'react-router-dom';



const Card = ({detail}) => {
    console.log(detail);
  return (
    <div className='meals'>
        {!detail ? "" : detail.map((curItem)=>{
            return (
                <div className='mealImg'>
                    <img src={curItem.strMealThumb} />
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}><button> Recipie</button></NavLink>
                   

                    </div>

            )
        })
}
    </div>
  )
}

export default Card;




