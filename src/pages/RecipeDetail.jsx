import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../lib/api'
import { formatIngredients } from '../utils/format'
import { useFavorites } from '../context/FavoritesContext'

export default function RecipeDetail() {
    const { id } = useParams()
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const { isFav, toggleFav } = useFavorites()

    useEffect(() => { (async () => { setMeal(await getRecipeById(id)); setLoading(false) })() }, [id])

    const ingredients = useMemo(() => meal ? formatIngredients(meal) : [], [meal])

    if (loading) return <div className="py-10 text-center">Loading…</div>
    if (!meal) return <div className="py-10 text-center">Recipe not found.</div>

    const fav = isFav(meal.idMeal)

    return (
        <article className="py-6">
            <div className="grid md:grid-cols-2 gap-6">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-2xl border" />
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        {meal.strMeal}
                        <button onClick={() => toggleFav(meal)} className={`btn ${fav ? 'bg-rose-100 text-rose-600' : 'btn-ghost'}`}>{fav ? '♥' : '♡'} Favorite</button>
                    </h1>
                    <p className="text-gray-600 mt-1">{meal.strArea} · {meal.strCategory}</p>

                    <section className="mt-4">
                        <h2 className="font-semibold">Ingredients</h2>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            {ingredients.map((it, i) => (<li key={i}>{it}</li>))}
                        </ul>
                    </section>

                    <section className="mt-4">
                        <h2 className="font-semibold">Instructions</h2>
                        <p className="mt-2 whitespace-pre-line leading-relaxed">{meal.strInstructions}</p>
                    </section>

                    {meal.strYoutube && (
                        <section className="mt-4">
                            <a className="btn-primary" href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
                        </section>
                    )}
                </div>
            </div>
        </article>
    )
}
