import TextInput from "../../../../components/form/text";

const StoreDomain = () => {
  return (
    <div className="card w-full p-6 max-h-60">
      <span className="label block mb-2">Edita tu dominio</span>
      <div className="grid grid-cols-[120px_1fr] items-center gap-2 w-full">
        <span className="p-3">mitienda.com/</span>
        <TextInput className="w-full" />
      </div>
      <span className="block label mt-4">
        Te brindamos un subdominio de MiTienda. Se customiza con el nombre de tu
        marca. (Máximo 20 caracteres)
      </span>
      <div className="flex justify-end mt-4">
        <button className="button text-sm">Save Changes</button>
      </div>
    </div>
  );
};

export default StoreDomain;
