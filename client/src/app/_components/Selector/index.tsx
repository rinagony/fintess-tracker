import { SelectorOption } from "@/interfaces";
import React from "react";
import styled from "styled-components";
import { Label } from "../Input/styles";

const Selector = styled.select`
  padding: 0.4rem;
  border: 1px solid #767676;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

interface SelectorProps {
  options: SelectorOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const SelectorComponent = ({
  options,
  value,
  onChange,
  label,
}: SelectorProps) => {
  return (
    <div>
      <Label>{label}</Label>
          <Selector
            id="selector"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Not Selected</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Selector>
    </div>
  );
};

export default SelectorComponent;
