import RecipeCard from '../components/RecipeCard'
import EmptyState from '../components/EmptyState'
import { useFavorites } from '../context/FavoritesContext'

export default function Favorites() {
    const { favorites } = useFavorites()
    return (
        <div className="py-6">
            <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
            {favorites.length === 0 ? (
                <EmptyState title="No favorites yet" desc="Browse recipes and tap the heart to save them." />
            ) : (
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {favorites.map(m => <RecipeCard key={m.idMeal} meal={m} />)}
                </div>
            )}
        </div>
    )
}
