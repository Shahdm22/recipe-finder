import { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

export default function SearchBar({ onSearch, initial = '' }) {
    const [q, setQ] = useState(initial)
    const [mode, setMode] = useState('name')
    const debounced = useDebounce(q, 450)

    useEffect(() => {
        onSearch({ q: debounced.trim(), mode })
    }, [debounced, mode])

    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex-1 card p-4">
                    <div className="relative input-with-icon">
                        <span className="input-icon">🔎</span>
                        <input
                            value={q}
                            onChange={e => setQ(e.target.value)}
                            placeholder={mode === 'name' ? 'Search by dish name…' : 'Search by ingredient…'}
                            className="input text-base"
                            aria-label="Search recipes"
                        />
                    </div>
                    <div className="mt-3 flex gap-2">
                        <button onClick={() => setMode('name')} className={`btn ${mode === 'name' ? 'bg-brand text-white' : 'btn-ghost'}`}>By name</button>
                        <button onClick={() => setMode('ingredient')} className={`btn ${mode === 'ingredient' ? 'bg-brand text-white' : 'btn-ghost'}`}>By ingredient</button>
                    </div>
                </div>

                <div className="w-full sm:w-52 flex items-center">
                    <button className="btn-primary w-full py-4">Quick Search</button>
                </div>
            </div>
        </div>
    )
}
