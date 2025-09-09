const API = "https://www.themealdb.com/api/json/v1/1/"

// 🔍 Search recipes by name
export async function searchByName(q) {
    const res = await fetch(`${API}search.php?s=${q}`)
    const data = await res.json()
    return data.meals
}

// 🥩 Search recipes by ingredient
export async function searchByIngredient(q) {
    const res = await fetch(`${API}filter.php?i=${q}`)
    const data = await res.json()
    return data.meals
}

// 🗂️ List categories
export async function listCategories() {
    const res = await fetch(`${API}list.php?c=list`)
    const data = await res.json()
    return data.meals?.map(c => c.strCategory) || []
}

// 🍔 Filter by category
export async function filterByCategory(cat) {
    const res = await fetch(`${API}filter.php?c=${cat}`)
    const data = await res.json()
    return data.meals
}

// 🆕 Get recipe by ID 
export async function getRecipeById(id) {
    const res = await fetch(`${API}lookup.php?i=${id}`)
    const data = await res.json()
    return data.meals ? data.meals[0] : null
}
