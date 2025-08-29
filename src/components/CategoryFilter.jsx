export default function CategoryFilter({ categories = [], active = '', onChange }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => onChange('')} className={`badge ${active === '' ? 'ring-2 ring-brand' : ''}`}>All</button>
            {categories.map(c => (
                <button key={c} onClick={() => onChange(c)} className={`badge ${active === c ? 'ring-2 ring-brand' : ''}`}>{c}</button>
            ))}
        </div>
    )
}
