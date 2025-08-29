import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
            <div className="container-prose flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand text-white flex items-center justify-center text-lg">🍳</div>
                    <div className="text-lg font-semibold">Recipe Finder</div>
                </Link>

                <nav className="flex items-center gap-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-700'}>Home</NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-700'}>Favorites</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-700'}>About</NavLink>
                </nav>
            </div>
        </header>
    )
}
