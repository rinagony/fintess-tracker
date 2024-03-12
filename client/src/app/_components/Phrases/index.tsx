import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Text = styled.p`
  color: #F2F597;
  font-size: 0.8rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Wrapper = styled.div`
  padding: 10px;
`

export default function Phrases() {
  const motivationalTexts = [
    "Success isn't given, it's earned. Go out and earn it.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only bad workout is the one that didn't happen.",
    "Strive for progress, not perfection.",
    "You are stronger than you think. Push through the pain, and you'll come out stronger on the other side.",
    "The only limit is the one you set for yourself.",
    "Sweat now, shine later.",
    "Remember why you started. Keep going.",
    "Success starts with self-discipline.",
    "Every step you take is a step closer to your goal. Keep moving forward."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % motivationalTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that effect runs only once on component mount

  return (
    <Wrapper>
      <Text>{motivationalTexts[currentTextIndex]}</Text>
    </Wrapper>
  );
}