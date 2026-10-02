import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <h1>React Tasks</h1>

      <h2>Products</h2>

      <ProductCard
        title="Laptop"
        price="800"
        category="Electronics"
      />

      <ProductCard
        title="Shoes"
        price="50"
        category="Fashion"
      />

      <h2>Like Button</h2>
      <LikeButton />

      <StudentList />
    </div>
  );
}

export default App;