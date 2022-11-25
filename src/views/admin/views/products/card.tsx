import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-full p-2 rounded-lgdark:hover:bg-gray-500/10 cursor-pointer dark:border-slate-700 mx-auto relative group">
      <div className="rounded-lg absolute top-0 bottom-0 left-0 right-0 z-10 w-full hidden h-full dark:bg-black/20 bg-gray-400/10 group-hover:block" />
      <Image
        src="/mouse.jpeg"
        alt="product-img"
        width={500}
        height={500}
        className="w-full rounded-lg h-52 object-cover"
      />
      <div>
        <span className="text-lg font-light mt-2 block">Mouse Gamer</span>
        <span className="text-sm block font-light text-slate-400 line-through mt-2">
          $ 10.00
        </span>
        <span className="block font-bold text-lg -mt-1">$ 9.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
