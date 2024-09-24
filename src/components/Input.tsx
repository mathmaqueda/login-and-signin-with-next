import React, { ChangeEvent } from "react";

interface InputProps {
    type: string;
    name: string;
    className?: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type, value, className, placeholder, name, required, onChange}) => {
    return (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className={className}
          required={required}
        />
    );
}

export default Input;