import React from "react";
import { TrainingInfoCard } from "../../../my-workouts/styles";

interface TrainingLevelProps {
  level: string;
}

const TrainingLevel = ({ level }: TrainingLevelProps) => {
  let levelText = "";
  let levelIcon = null;

  switch (level) {
    case "beginner":
      levelText = "Beginner";
      levelIcon = "★★";
      break;
    case "intermediate":
      levelText = "Intermediate";
      levelIcon = "★★★";
      break;
    case "advanced":
      levelText = "Advanced";
      levelIcon = "★★★★★";
      break;
    default:
      levelText = "Unknown";
      levelIcon = null;
  }

  return (
    <TrainingInfoCard>
      <p>
        Level:
        <span>
          {levelIcon} - {levelText}
        </span>
      </p>
    </TrainingInfoCard>
  );
};

export default TrainingLevel;