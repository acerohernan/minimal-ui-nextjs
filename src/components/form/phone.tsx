import Image from "next/image";
import { PREFIXES } from "../../constants/number";
import Select from "./select";

interface Props {
  label?: string;
  full?: boolean;
  error?: string;
  inputProps?: Object;
  className?: string;
}

const PhoneInput: React.FC<Props> = ({
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
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center px-2">
          <Select
            items={PREFIXES.map((prefix) => ({
              value: prefix.prefix,
              component: (
                <div className="flex items-center">
                  <Image
                    src={`/icons/countries/${prefix.country_code}.svg`}
                    alt={prefix.country_code}
                    width={15}
                    height={15}
                    className="rounded-sm mr-2"
                  />
                  <span>({prefix.prefix})</span>
                </div>
              ),
            }))}
            className="p-1"
            selectedOption={{
              value: "54",
              component: (
                <div className="flex items-center">
                  <Image
                    src={`/icons/countries/${"AR"}.svg`}
                    alt={"AR"}
                    width={15}
                    height={15}
                    className="rounded-sm mr-2"
                  />
                  <span>({"54"})</span>
                </div>
              ),
            }}
            optionsContainerClassname="w-20"
          />
        </span>
        <input
          id="name"
          className={`input ${className} ${full && "w-full"} p-3 pl-24`}
          type="text"
          {...inputProps}
        />
      </div>
      {error ? (
        <span className="input-error-message mt-2 inline-block">{error}</span>
      ) : null}
    </div>
  );
};

export default PhoneInput;
