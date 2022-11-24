import Link from "next/link";
import PhoneInput from "../../../components/form/phone";
import TextInput from "../../../components/form/text";

const AdminProfileView = () => {
  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">Profile</span>
        <div className="flex items-center gap-5 mt-3">
          <Link
            href="/admin"
            className="text-sm dark:text-white hover:underline"
          >
            Admin
          </Link>
          <div className="w-1 h-1 bg-slate-400 dark:bg-slate-50 rounded-full" />
          <span className="text-sm text-slate-400">Profile</span>
        </div>
      </div>
      <div>
        <form className="w-full shadow-lg mt-4 rounded-xl p-6 grid gap-5 dark:bg-dark-500">
          <TextInput
            label="Name"
            full={true}
            error="Error example"
            inputProps={{ placeholder: "MiTienda" }}
          />
          <TextInput
            label="Email Addres"
            full={true}
            inputProps={{ placeholder: "example@text.com" }}
          />
          <PhoneInput
            label="Phone Number"
            full={true}
            inputProps={{ placeholder: "999113934" }}
          />
          <div className="flex justify-end mt-4">
            <button className="button" type="button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProfileView;
