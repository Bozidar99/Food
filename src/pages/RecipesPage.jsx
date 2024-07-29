import { useEffect, useState } from 'react'
import RecipesCardComponent from '../components/RecipesCardComponent';

function RecipesPage() {
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([])

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        setAllRecipes(data.recipes);
        setLoading(false);});

  }, [])
  return (
    <div className='container mx-auto bg-gray-400'>
      <h2 className='text-3xl font-bold p-4 text-blue-900 text-center'>All Recipes</h2>
      <div className='flex flex-wrap'>
        { loading ? (
        <h2 className='text-3xl font-bold p-4 text-blue-900 text-center
        '>Loading...</h2>
      ) : (
        allRecipes.map((recipes) => {
          return <RecipesCardComponent key={recipes.id} recipes={recipes} />
        }))}
      </div>
    </div>
  )
}

export default RecipesPage
