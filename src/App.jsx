import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'

function App() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
    { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
    { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="app-container">
      <h1>Product Search & Filter</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
