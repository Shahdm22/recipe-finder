import { createContext, useContext, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const Ctx = createContext(null)

export function FavoritesProvider({ children }) {
    const [stored, setStored] = useLocalStorage('rf:favorites', [])
    const [favorites, setFavorites] = useState(stored)

    function toggleFav(meal) {
        setFavorites(prev => {
            const exists = prev.some(m => m.idMeal === meal.idMeal)
            const next = exists ? prev.filter(m => m.idMeal !== meal.idMeal) : [...prev, meal]
            setStored(next)
            return next
        })
    }

    function isFav(id) { return favorites.some(m => m.idMeal === id) }

    const value = useMemo(() => ({ favorites, toggleFav, isFav }), [favorites])
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useFavorites() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
    return ctx
}
