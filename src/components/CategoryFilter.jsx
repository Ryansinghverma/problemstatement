function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Electronics', 'Clothing', 'Home']

  return (
    <div className="category-filter">
      <h3>Filter by Category:</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
