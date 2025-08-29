const BASE = 'https://www.themealdb.com/api/json/v1/1'

async function get(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Network error')
    return res.json()
}

export async function searchByName(q) {
    if (!q) return []
    const { meals } = await get(`${BASE}/search.php?s=${encodeURIComponent(q)}`)
    return meals || []
}

export async function searchByIngredient(q) {
    if (!q) return []
    const { meals } = await get(`${BASE}/filter.php?i=${encodeURIComponent(q)}`)
    return meals || []
}

export async function getRecipeById(id) {
    if (!id) return null
    const { meals } = await get(`${BASE}/lookup.php?i=${encodeURIComponent(id)}`)
    return meals ? meals[0] : null
}

export async function listCategories() {
    const { categories } = await get(`${BASE}/categories.php`)
    return (categories || []).map(c => c.strCategory)
}

export async function filterByCategory(cat) {
    if (!cat) return []
    const { meals } = await get(`${BASE}/filter.php?c=${encodeURIComponent(cat)}`)
    return meals || []
}
