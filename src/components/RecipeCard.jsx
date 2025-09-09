import { Link } from 'react-router-dom'

export default function RecipeCard({ meal }) {
    if (!meal) return null;
    const thumb = meal.strMealThumb || '/placeholder.png';

    return (
        <article className="rounded-2xl shadow p-3 bg-white hover:shadow-md transition" role="group">
            <img
                src={thumb}
                alt={meal.strMeal || 'Recipe image'}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/placeholder.png' }}
                className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-3 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm line-clamp-2" title={meal.strMeal}>{meal.strMeal}</h3>
            </div>
            <Link to={`/recipe/${meal.idMeal}`} className="mt-2 w-full block rounded-xl border py-2 text-center hover:bg-gray-50" aria-label={`Open details for ${meal.strMeal}`}>
                Details
            </Link>
        </article>
    )
}
