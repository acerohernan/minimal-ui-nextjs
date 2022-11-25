import { useState } from "react";
import Checkbox from "../../../../components/form/checkbox";
import Switch from "../../../../components/form/switch";
import TextInput from "../../../../components/form/text";

const ProductVariantForm = () => {
  const [numOptions, setNumOptions] = useState(1);

  return (
    <div className="grid gap-6 py-6">
      <div>
        <TextInput
          label="Nombre de la variante"
          full
          inputProps={{ placeholder: "Talla" }}
        />
        <span className="font-light text-sm block mt-2">
          Recomendamos utilizar solo 1 palabra. Ej.: Color, Talla, etc.
        </span>
      </div>
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
            className="input p-3 text-sm flex items-center"
            onClick={() => setNumOptions(1)}
          >
            <Checkbox checked={numOptions === 1} />
            <span className="block ml-2">Una</span>
          </button>
          <button
            className="input p-3 text-sm flex items-center"
            onClick={() => setNumOptions(2)}
          >
            <Checkbox checked={numOptions !== 1} />
            <span className="block ml-2">Definir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVariantForm;
