import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'
import SkeletonCard from '../components/SkeletonCard'
import EmptyState from '../components/EmptyState'
import { listCategories, searchByIngredient, searchByName, filterByCategory } from '../lib/api'

export default function Home() {
    const [q, setQ] = useState('')
    const [mode, setMode] = useState('name')
    const [cat, setCat] = useState('')
    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => { (async () => { setCategories(await listCategories()) })() }, [])

    function handleSearch({ q, mode }) { setQ(q); setMode(mode) }

    useEffect(() => {
        let ignore = false
        async function run() {
            setLoading(true)
            let data = []
            try {
                if (cat) data = await filterByCategory(cat)
                else if (q) data = mode === 'name' ? await searchByName(q) : await searchByIngredient(q)
            } catch (e) { /* ignore */ }
            if (!ignore) setMeals(data || [])
            setLoading(false)
        }
        run()
        return () => { ignore = true }
    }, [q, mode, cat])

    const grid = useMemo(() => (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading ? Array.from({ length: 8 }).map((_, i) => (<SkeletonCard key={i} />)) :
                (meals?.map(m => <RecipeCard key={m.idMeal} meal={m} />))}
        </div>
    ), [loading, meals])

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-emerald-50 to-sky-50 py-14 rounded-2xl mb-8">
                <div className="container-prose text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Find your next favorite recipe</h1>
                    <p className="mt-2 text-gray-600">Search by dish name or ingredient — fast, simple, and delicious.</p>
                    <div className="mt-6">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>
            </section>

            <div className="container-prose">
                {categories.length > 0 && (
                    <section className="mb-6">
                        <CategoryFilter categories={categories} active={cat} onChange={setCat} />
                    </section>
                )}

                <section>
                    {(!meals || meals.length === 0) && !loading ? (
                        <EmptyState title="No recipes found" desc="Try searching for 'chicken' or a specific ingredient." />
                    ) : grid}
                </section>
            </div>
        </div>
    )
}
