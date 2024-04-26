import React from "react";
import styled from "styled-components";
import { ErrorMessage, Label } from "./styles";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type: string;
  label?: string;
  textarea?: boolean;
  disabled: boolean;
  errorMessage: string | null;
}

const inputStyles = `
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #767676;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  transition: 0.5s ease;
  font-size: 1rem;
  outline: none;
  color: #767676;

  &:focus {
    border-color: #f2f597;
  }
`;

const InputStyled = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
`;

export default function Input({
  value,
  onChange,
  textarea,
  errorMessage,
  label,
  ...props
}: InputProps) {
  return (
    <div>
      <Label>{label}</Label>
      {textarea ? (
        <TextArea value={value} onChange={onChange} {...props} />
      ) : (
        <InputStyled value={value} onChange={onChange} {...props} />
      )}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </div>
  );
}