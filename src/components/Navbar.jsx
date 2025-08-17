import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <Link to="/" className="font-bold">Recipe Finder</Link>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/add">Add Recipe</Link>
            </div>
        </nav>
    );
}

export default Navbar;
