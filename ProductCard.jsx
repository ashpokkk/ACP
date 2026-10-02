function ProductCard({ title, price, category }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "15px",
      margin: "10px",
      width: "200px"
    }}>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default ProductCard;