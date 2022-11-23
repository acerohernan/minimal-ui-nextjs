import AdminHeader from "../header";

interface Props {
  children?: JSX.Element | string;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative grid lg:grid-cols-[288px_1fr]">
      <div />
      <div>
        <AdminHeader />
        <div className="mt-[72px] w-full lg:mt-0 p-6 lg:px-10">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
