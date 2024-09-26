import React, { ChangeEvent } from "react";

export const InputText = ({
  name,
  label,
  type,
  placeholder,
  onChangeState
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  onChangeState: (e: any) => void;
}) => {
  return (
    <>
      <div className="input-box">
        <span>{label}</span>
        <input
          name={name}
          className="input-login"
          type={type}
          placeholder={placeholder}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChangeState(event.target.value);
          }}
        />
      </div>
    </>
  );
};
