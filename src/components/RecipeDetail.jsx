import { useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Recipe Detail - {id}</h1>
            <h2 className="text-lg font-semibold">Ingredients</h2>
            <ul className="list-disc ml-6">
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
            </ul>
            <h2 className="text-lg font-semibold mt-4">Instructions</h2>
            <ol className="list-decimal ml-6">
                <li>Step 1</li>
                <li>Step 2</li>
            </ol>
        </div>
    );
}

export default RecipeDetail;
