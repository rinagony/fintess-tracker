import React, { useEffect, useRef } from "react";
import { SliderContainer, SliderContent, SlideItem, ImageBackground, Text, Description, Button, ButtonWrapper } from "./styles";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";

interface Slide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const nextIndex = (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth) ? 0 : sliderRef.current.scrollLeft + sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: nextIndex,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const prevIndex = (sliderRef.current.scrollLeft === 0) ? sliderRef.current.scrollWidth - sliderRef.current.offsetWidth : sliderRef.current.scrollLeft - sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: prevIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <SliderContainer ref={sliderRef}>
        <SliderContent>
          {slides.map((slide, index) => (
            <SlideItem key={index}>
              <ImageBackground image={slide.image} />
              <Text>
                <h3>{slide.title}</h3>
                <Description>{slide.description}</Description>
              </Text>
            </SlideItem>
          ))}
        </SliderContent>
      </SliderContainer>
      <ButtonWrapper>
        <Button onClick={prevSlide}>
          <UndoOutlinedIcon color="primary" />
        </Button>
        <Button onClick={nextSlide}>
          <RedoOutlinedIcon color="primary" />
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Slider;