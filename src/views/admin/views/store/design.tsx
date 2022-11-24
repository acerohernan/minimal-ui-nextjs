import ImageInput from "../../../../components/form/image";

const StoreDesign = () => {
  return (
    <div className="w-full card">
      <div className="mt-4 p-14 grid gap-12 lg:grid-cols-[1fr_2fr] items-start  max-w-4xl mx-auto lg:gap-8">
        <div className=" flex items-center justify-center flex-col">
          <div className="block w-40 text-start label mb-2">Logo</div>
          <ImageInput
            id="Store"
            width={180}
            height={160}
            url="sd"
            className="h-40 w-40"
            rounded="rounded-lg"
          />
          <span className="mt-4 text-sm text-center">
            Allowed *.jpeg, *.jpg, *.png, *.gif
          </span>
          <span className="text-sm">Max size of 3.1 MB</span>
        </div>
        <div className=" flex items-center justify-center flex-col ">
          <div className="block w-full text-start label mb-2">Banner</div>
          <ImageInput
            id="Store"
            width={500}
            height={160}
            url="zds"
            className="h-24 sm:h-40 w-full max-w-lg"
            rounded="rounded-lg"
          />
          <span className="mt-4 text-sm">Recommended (1000x300)</span>
          <span className="text-sm">Max size of 3.1 MB</span>
        </div>
      </div>
      <div className="flex justify-end mt-0 m-6">
        <button className="button text-sm" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default StoreDesign;
