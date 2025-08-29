export function formatIngredients(meal) {
    const list = []
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`]
        const meas = meal[`strMeasure${i}`]
        if (ing && ing.trim()) list.push(meas ? `${ing} — ${meas}` : ing)
    }
    return list
}
