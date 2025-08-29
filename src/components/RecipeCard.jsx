import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function RecipeCard({ meal }) {
    const { isFav, toggleFav } = useFavorites()
    const fav = isFav(meal.idMeal)

    return (
        <article className="card group">
            <div className="aspect-w-16 aspect-h-11">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <button onClick={() => toggleFav(meal)} aria-label="toggle favorite" className="absolute right-3 top-3 z-10 bg-white/80 rounded-full p-2">
                    {fav ? '♥' : '♡'}
                </button>
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-2">{meal.strMeal}</h3>
                <p className="text-sm text-gray-500 mt-1">{meal.strArea} · {meal.strCategory}</p>
                <div className="mt-3 flex items-center justify-between">
                    <Link to={`/recipe/${meal.idMeal}`} className="text-sm text-brand font-medium">View details →</Link>
                    <span className="text-xs text-gray-400">Quick</span>
                </div>
            </div>
        </article>
    )
}
