import { CameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Props {
  id: string;
}

const ImageInput: React.FC<Props> = ({ id }) => {
  return (
    <>
      <label
        className="p-2 rounded-full border border-dashed inline-block border-slate-400 relative group cursor-pointer"
        htmlFor={id}
      >
        <div className="z-10 bg-black/50 rounded-full w-full h-full absolute top-0 left-0 hidden group-hover:flex items-center justify-center flex-col">
          <CameraIcon className="w-5 h-5 text-white" />
          <span className="text-white text-sm">Update image</span>
        </div>
        <Image
          src="/avatar.jpg"
          alt="profile"
          width={120}
          height={120}
          className="rounded-full"
        />
        <input type="file" className="hidden" id={id} />
      </label>
    </>
  );
};

export default ImageInput;
