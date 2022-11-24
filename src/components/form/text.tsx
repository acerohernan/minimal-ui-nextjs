interface Props {
  label?: string;
  full?: boolean;
  error?: string;
  inputProps?: Object;
  className?: string;
}

const TextInput: React.FC<Props> = ({
  className,
  full,
  label,
  error,
  inputProps,
}) => {
  return (
    <div>
      {label ? (
        <label htmlFor="name" className="label mb-2 inline-block">
          {label}
        </label>
      ) : null}
      <input
        id="name"
        className={`input p-3 ${className} ${full && "w-full"}`}
        type="text"
        {...inputProps}
      />
      {error ? (
        <span className="input-error mt-2 inline-block">{error}</span>
      ) : null}
    </div>
  );
};

export default TextInput;
