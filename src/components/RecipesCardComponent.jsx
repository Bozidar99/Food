import React from 'react'
import { Link } from 'react-router-dom'

function RecipesCardComponent({ recipes }) {
    return (
        <div className='flex flex-wrap  '>
            <div className='flex flex-col justify-between items-center p-4 border-4 border-yellow-500 m-2 bg-gray-300'>
                <img src={recipes.image} alt='' className='w-[300px] h-[300px] p-[10px] ' />
                <h3 className='p-[10px]  font-bold text-xl text-blue-900'>{recipes.name}</h3>
                <h3 className='p-[10px]  font-bold text-xl text-blue-900'>{recipes.tags}</h3>
                <h3 className='p-[10px]  font-bold text-xl text-blue-900'>Rating: {recipes.rating}</h3>

                <Link to={`/singleRecipe/${recipes.id}`} className='p-[10px]  font-bold text-xl text-blue-900  bg-yellow-500 rounded-2xl'>Read More</Link>
            </div>
        </div>
    )
}

export default RecipesCardComponent
