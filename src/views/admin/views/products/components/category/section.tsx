import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import useSWRImmutable from "swr/immutable";
import { useAdminProductsContext } from "../../context";

const ProuductCategorySection = () => {
  const {
    state: { categories },
    actions: { getAllCategories },
  } = useAdminProductsContext();

  useSWRImmutable("product/category", getAllCategories);

  return (
    <div className="py-6 flex items-center gap-2">
      {Object.values(categories).map((cat, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-xl shadow-md p-2 dark:bg-dark-500"
        >
          <Image
            src={cat.img_url}
            width={100}
            height={100}
            alt={cat.name}
            className="rounded-full w-10 h-10"
          />
          <span className="text-sm">{cat.name}</span>
          <button className="icon-buttom">
            <PencilSquareIcon className="icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProuductCategorySection;
