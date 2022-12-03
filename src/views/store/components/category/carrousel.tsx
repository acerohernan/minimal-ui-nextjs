import Image from "next/image";
import Link from "next/link";

const CategoryCarrousel = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <span className="text-xl">Categorías</span>
      <div className="scrollbar-hide scrollbar-store overflow-x-auto whitespace-nowrap gap-4 flex pl-1 p-6 pt-4">
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
      </div>
    </div>
  );
};

interface ItemProps {}

export const CarrouselItem: React.FC<ItemProps> = () => {
  return (
    <Link
      className="grid grid-cols-[35px_1fr] gap-3 items-center rounded-3xl shadow-md p-4 py-2"
      href="/"
    >
      <Image
        src="/category.jpeg"
        alt="category"
        width={100}
        height={100}
        className="rounded-full w-[35px] h-[35px]"
      />
      <span className="text-sm">Mouses Informáticos</span>
    </Link>
  );
};

export default CategoryCarrousel;
