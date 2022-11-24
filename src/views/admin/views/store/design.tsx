import ImageInput from "../../../../components/form/image";

const StoreDesign = () => {
  return (
    <div className="w-full card mt-4 p-14 grid gap-10 lg:grid-cols-2 lg:gap-0 items-center">
      <div className=" flex items-center justify-center flex-col">
        <ImageInput id="Store" />
        <span className="mt-4 text-sm">
          Allowed *.jpeg, *.jpg, *.png, *.gif
        </span>
        <span className="text-sm">Max size of 3.1 MB</span>
      </div>
      <div className=" flex items-center justify-center flex-col">
        <ImageInput id="Store" />
        <span className="mt-4 text-sm">
          Allowed *.jpeg, *.jpg, *.png, *.gif
        </span>
        <span className="text-sm">Max size of 3.1 MB</span>
      </div>
    </div>
  );
};

export default StoreDesign;
