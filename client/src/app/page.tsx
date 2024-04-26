"use client";
import React from "react";
import Carousel from "./_components/Carousel";
import Grid from "@mui/material/Grid";
import FeatureList from "./_components/FeatureList";
import { useSession } from "next-auth/react";
import { PageWrapper, Title } from "@/shared";

const slides = [
  {
    image: "/run.webp",
    alt: "Run Image",
    title: "Track Your Workouts Anywhere",
    description:
      "With our fitness tracker app, you can easily monitor your workouts whether you are at the gym, outdoors, or at home. Stay motivated and track your progress seamlessly.",
  },
  {
    image: "/food.jpeg",
    alt: "Food Image",
    title: "Fuel Your Body",
    description: "Nutrition is key to achieving your fitness goals. Access meal plans, recipes, and nutritional guidance to fuel your body for optimal performance and recovery.",
  },
  {
    image: "/workout.jpeg",
    alt: "Workout Image",
    title: "Empower Your Workouts",
    description: "Take control of your fitness journey with a customizable training plan. Choose from a variety of workout options tailored to your preferences and goals. Access comprehensive resources to enhance your performance and achieve sustainable results.",
  },
];

const Home = () => {
  const { data: session } = useSession();
  return (
    <PageWrapper>
      <Title>HabitsPro. Improve your life and make your dreams come true.</Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Carousel slides={slides} />
        </Grid>
        <Grid item xs={12}>
         <FeatureList isLoggedIn={Boolean(session)}/>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Home;