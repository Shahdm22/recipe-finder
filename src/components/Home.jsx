import RecipeCard from "../components/RecipeCard";

function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Recipes</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {/* Example RecipeCard */}
                <RecipeCard
                    title="Spaghetti Bolognese"
                    description="A classic Italian pasta dish"
                />
            </div>
        </div>
    );
}

export default Home;
