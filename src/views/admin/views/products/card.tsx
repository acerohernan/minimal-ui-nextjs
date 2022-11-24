import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-full p-2 rounded-lg hover:bg-gray-400/10 cursor-pointer dark:border-slate-700 max-w-[250px]">
      <Image
        src="/avatar.jpg"
        alt="product-img"
        width={100}
        height={100}
        className="w-full rounded-lg"
      />
      <div>
        <span className="text-lg mt-2 block font-light">Mouse Gamer</span>
        <span className="text-sm block font-ligh text-slate-400 line-through mt-2">
          $ 10.00
        </span>
        <span className="block font-ligh text-lg -mt-1">$ 9.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
