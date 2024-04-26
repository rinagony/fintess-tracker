import { WorkoutLevelEnum } from "@/enums";
import React from "react";
import styled from "styled-components";
import { Label } from "./styles";
import colors from "@/shared/colors";

const RangeWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const RangeInput = styled.input`
  width: 100%;
  margin: 1rem 0 0.5rem 0;
  accent-color: ${colors.primary};
`;

const LevelLabel = styled.span`
  margin-left: 0;
  font-size: 1rem;
  font-weight: 500;
`;

interface RangeSliderProps {
  level: WorkoutLevelEnum;
  label: string;
  onChange: (value: number) => void;
}

const RangeSlider = ({ level, onChange, label }: RangeSliderProps) => {
  return (
    <RangeWrapper>
      <Label htmlFor="level">{label}</Label>
      <RangeInput
        type="range"
        id="level"
        min="0"
        max="100"
        step="1"
        value={
          level === WorkoutLevelEnum.BEGINNER
            ? 0
            : level === WorkoutLevelEnum.INTERMEDIATE
            ? 50
            : 100
        }
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <LevelLabel>{level}</LevelLabel>
    </RangeWrapper>
  );
};

export default RangeSlider;
