import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Checkbox from "../../../../components/form/checkbox";
import Switch from "../../../../components/form/switch";
import TextInput from "../../../../components/form/text";
import OptionItem from "./components/option";

interface IOption {
  name: string;
  price: string;
  visible: boolean;
}

const ProductVariantForm = () => {
  const [numOptions, setNumOptions] = useState(1);
  const [options, setOptions] = useState<IOption[]>([
    {
      name: "",
      price: "",
      visible: true,
    },
    {
      name: "",
      price: "",
      visible: true,
    },
  ]);

  function handleAddOption() {
    setOptions([
      ...options,
      {
        name: "",
        price: "",
        visible: true,
      },
    ]);
  }

  return (
    <div className="grid gap-6">
      <div>
        <label className="label block mb-2">Nombre de la variante *</label>
        <div className="grid grid-cols-[1fr_50px] gap-4 items-center">
          <TextInput full inputProps={{ placeholder: "Talla" }} />
          <button className="input p-3 flex justify-center">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <span className="font-light text-sm block mt-2">
          Recomendamos utilizar solo 1 palabra. Ej.: Color, Talla, etc.
        </span>
      </div>

      <>
        <div>
          <div className="flex items-center">
            <Switch className="z-10" />
            <span className="label block ml-2">Obligatorio</span>
          </div>
          <span className="font-light text-sm block mt-2">
            Al activarlo, el usuario deberá indicar su elección para continuar.
          </span>
        </div>
        <div>
          <span className="label block">¿Cuantas opciones podrá elegir?</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              className="text-sm flex items-center"
              onClick={() => setNumOptions(1)}
            >
              <Checkbox checked={numOptions === 1} />
              <span className="block ml-2">Una</span>
            </button>
            <button
              className="text-sm flex items-center "
              onClick={() => setNumOptions(2)}
            >
              <div className="w-10">
                <Checkbox checked={numOptions !== 1} />
              </div>
              <span className="block ml-2">
                <input className="input w-full p-3" placeholder="Definir" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <label className="label block mt-2">Opciones</label>
          <div className="mt-4 grid gap-2">
            <div className="grid grid-cols-[2fr_1fr_50px]  lg:grid-cols-[3fr_1fr_50px] items-center gap-4">
              <span className="text-sm font-light">Nombre</span>
              <span className="text-sm font-light">Precio</span>
              <span className="text-sm font-light">Eliminar</span>
            </div>
            {options.map((opt, i) => (
              <OptionItem key={i} />
            ))}
          </div>
          <span className="text-sm font-light block mt-2">
            El precio que ingreses se sumará al valor base del producto.
          </span>
          <button
            className="mt-4 text-purple-800 dark:text-purple-400 hover:underline text-sm"
            onClick={handleAddOption}
          >
            + Agregar opción
          </button>
        </div>
      </>
    </div>
  );
};

export default ProductVariantForm;
