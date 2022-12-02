import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-full">
      <Image
        className="w-full border rounded-xl"
        alt="product"
        src="/mouse.jpeg"
        width={800}
        height={800}
      />
      <div className="mt-1">
        <span className="text-slate-700 font-light">
          Start Wars - Cortina luces LED
        </span>
        <span className="text-black font-medium text-xl block">S/ 80.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
