import Link from "next/link";

const AdminProductsView = () => {
  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">Products</span>
        <div className="flex items-center gap-5 mt-3">
          <Link href="/admin" className="text-sm text-white hover:underline">
            Admin
          </Link>
          <div className="w-1 h-1 bg-slate-50 rounded-full" />
          <span className="text-sm">Products</span>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsView;
