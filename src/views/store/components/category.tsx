import ProductCategoryCard from "./category/card";
import ProductCard from "./product/card";

const CategorySection = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <ProductCategoryCard name="Hogar & Deco" />
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-6 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategorySection;
