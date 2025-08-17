import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!title) newErrors.title = "Title is required";
        if (!ingredients) newErrors.ingredients = "Ingredients are required";
        if (!steps) newErrors.steps = "Steps are required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log({ title, ingredients, steps });
        alert("Recipe added successfully!");
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 rounded shadow mt-4"
        >
            <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

            <div className="mb-3">
                <label className="block">Title</label>
                <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="mb-3">
                <label className="block">Ingredients</label>
                <textarea
                    className="w-full border p-2 rounded"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                {errors.ingredients && (
                    <p className="text-red-500 text-sm">{errors.ingredients}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="block">Steps</label>
                <textarea
                    className="w-full border p-2 rounded"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                />
                {errors.steps && (
                    <p className="text-red-500 text-sm">{errors.steps}</p>
                )}
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
}

export default AddRecipeForm;
