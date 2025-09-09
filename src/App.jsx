import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import About from './pages/About'
import { FavoritesProvider } from './context/FavoritesContext'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-prose py-6">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<p className="p-6">Not found</p>} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  )
}
