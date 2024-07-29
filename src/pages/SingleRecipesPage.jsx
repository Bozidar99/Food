import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleRecipesPage() {

    const [singleRecipes, setSingleRecipes] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then((data) => setSingleRecipes(data));

    }, [])
    return (
        <div className='container mx-auto bg-gray-400 p-6'>
            <h2 className='text-3xl font-bold p-4 text-blue-900 text-center'>Details of Recipes</h2>
            <div className='flex flex-wrap  '>
                <div className='flex flex-col justify-between items-center p-4 border-4 border-yellow-500 m-2 bg-gray-300'>
                    <img src={singleRecipes.image} alt='' className='w-[300px] h-[300px] p-[10px] ' />
                    <h3 className='p-[10px]  font-bold text-xl text-blue-900'>{singleRecipes.name}</h3>
                    <h3 className='p-[10px]  font-bold text-xl text-blue-900'>{singleRecipes.tags}</h3>
                    <h3 className='p-[10px]  font-bold text-xl text-blue-900'>Rating: {singleRecipes.rating}</h3>
                    <p className='p-[10px]   text-l text-blue-900'><strong>ingredients:</strong> {singleRecipes.ingredients}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>instructions:</strong> {singleRecipes.instructions}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>prepTimeMinutes:</strong> {singleRecipes.prepTimeMinutes}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>cookTimeMinutes:</strong> {singleRecipes.cookTimeMinutes}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>servings:</strong> {singleRecipes.servings}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>difficulty:</strong> {singleRecipes.difficulty}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>cuisine:</strong> {singleRecipes.cuisine}</p>
                    <p className='p-[10px]   text-l text-blue-900'><strong>caloriesPerServing:</strong> {singleRecipes.caloriesPerServing}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleRecipesPage
