# 🍳 Recipe Finder App

A simple and modern web application built with **React** that allows users to search for recipes by dish name or ingredient, filter recipes by categories, and view detailed information about each recipe (ingredients, instructions, and more).  
This project was built as part of the **ALX Frontend Capstone Project**.

---

## 🚀 Features

- 🔍 **Search Recipes**
  - Search by **dish name** (e.g., "Pizza")
  - Search by **ingredient** (e.g., "Chicken")
  - Quick and responsive results.

- 🗂️ **Filter by Category**
  - Browse recipes organized by category (e.g., Seafood, Dessert, Pasta).

- 📄 **Recipe Details**
  - View recipe name, image, category, ingredients, and cooking instructions.

- ⭐ **Favorites**
  - Save your favorite recipes for quick access later.
  - Persisted using React Context.

- ⚠️ **Error Handling**
  - Displays clear error messages if something goes wrong with the API.
  - Prevents invalid searches (e.g., typing less than 2 characters).

- 📱 **Responsive Design**
  - Works seamlessly on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- **React 18** (with Vite)
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for managing favorites
- **TheMealDB API** ([https://www.themealdb.com/api.php](https://www.themealdb.com/api.php))

---

## 📂 Project Structure

recipe-finder/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── SearchBar.jsx
│ │ ├── RecipeCard.jsx
│ │ ├── CategoryFilter.jsx
│ │ ├── EmptyState.jsx
│ │ └── SkeletonCard.jsx
│ │
│ ├── context/ # Favorites Context
│ │ └── FavoritesContext.jsx
│ │
│ ├── hooks/ # Custom hooks
│ │ └── useDebounce.js
│ │
│ ├── lib/ # API helper functions
│ │ └── api.js
│ │
│ ├── pages/ # Application pages
│ │ ├── Home.jsx
│ │ ├── RecipeDetail.jsx
│ │ ├── Favorites.jsx
│ │ └── About.jsx
│ │
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point
│
├── package.json
└── README.md
## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shahdm22/recipe-finder.git
cd recipe-finder
npm install
npm run dev
npm run build

📖 Usage Guide

Type a recipe name or ingredient in the search bar.

Example: search for chicken.

Switch between search modes:

By Name

By Ingredient

Browse categories from the filter bar.

Example: "Seafood", "Dessert".

Click a recipe card to view details:

Ingredients

Instructions

Thumbnail image

Save recipes to your Favorites list.
 
 rror Handling & Validation

Prevents invalid inputs (must be at least 2 characters).

Shows friendly error messages instead of crashing.

✅ Add user authentication (login/signup).

✅ Allow users to create and share their own recipes.

✅ Add dark mode.

✅ Add pagination or infinite scroll for search results.

👩‍💻 Author

Shahd Hussin

GitHub: @Shahdm22

Built with ❤️ as part of ALX Frontend Capstone.