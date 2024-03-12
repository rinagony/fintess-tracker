"use client";
import React from "react";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import { StyledList, StyledListItem, Wrapper } from "./styles";
import Link from "next/link";

const featureList = [
  "Nutrition plans",
  "Goal tracking",
  "Workout plans",
  "Community and events",
  "Exciting effects",
];

interface FeatureListProps {
  isLoggedIn: boolean;
}

const FeatureList = ({ isLoggedIn }: FeatureListProps) => {
  return (
    <Wrapper>
      <h2>
        {isLoggedIn
          ? "You already logged in and you have access to:"
          : "Sign in to get full access to:"}
      </h2>
      <StyledList>
        {featureList.map((feature, index) => (
          <StyledListItem key={index}>{feature}</StyledListItem>
        ))}
      </StyledList>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => (isLoggedIn ? null : signIn("google"))}
      >
        {isLoggedIn ? <Link href="/my-account">My profile</Link> : "Sign in"}
      </Button>
    </Wrapper>
  );
};

export default FeatureList;
