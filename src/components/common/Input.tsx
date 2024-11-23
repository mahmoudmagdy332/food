
import { forwardRef } from "react";

interface InputProps {
  label: string;
  color: string;
  focusColor: string;
  value?: string;
  isTextArea?: boolean;
  textColor?: string;
  type?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      error,
      type = "text",
      ...rest
    },
  ) => {

    // Determine if RTL styles should be applied


    return (
      <div className="w-full">
        <input
          placeholder={label}
          type={type}
          value={value}
          {...rest}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

export default Input;
