const ProfileBilling = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div>
        <div className="card w-full p-6">
          <span className="block text-xs font-medium  text-slate-600 dark:text-slate-400">
            YOUR PLAN
          </span>
          <span className="block font-medium text-3xl mt-4">MiTienda PRO</span>
          <div className="flex justify-end">
            <button className="button-outline mt-8 text-sm">
              Upgrade Plan
            </button>
          </div>
        </div>
        <div className="card p-6 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold block text-slate-600 dark:text-slate-400">
              Plan
            </span>
            <span className="text-sm">MiTienda PRO</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-semibold block text-slate-600 dark:text-slate-400">
              Fecha de vencimiento
            </span>
            <span className="text-sm">21/14/20</span>
          </div>
        </div>
      </div>
      <div className="card p-6">
        <span className="block text-xs font-medium  text-slate-600 dark:text-slate-400">
          INVOICE HISTORY
        </span>
        <div className="flex items-center justify-center h-full">
          <span>Todavía no tienes facturas</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBilling;
