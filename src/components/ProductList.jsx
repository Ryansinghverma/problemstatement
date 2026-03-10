function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">₹{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found</p>
      )}
    </div>
  )
}

export default ProductList
