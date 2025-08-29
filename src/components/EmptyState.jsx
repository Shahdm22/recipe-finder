export default function EmptyState({ title = 'No results', desc = 'Try another search.' }) {
    return (
        <div className="text-center p-10 border rounded-2xl bg-white">
            <div className="text-5xl">🥣</div>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">{desc}</p>
        </div>
    )
}
