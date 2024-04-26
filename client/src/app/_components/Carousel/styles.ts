import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 20rem;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SlideItem = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
  justify-content: center;
  width: 100%;
  position: relative;
`;

interface ImageBackgroundProps {
  image: string;
}

const ImageBackground = styled.div<ImageBackgroundProps>`
  width: 100%;
  height: 100%;
  height: 20rem;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.3);
`;

const Text = styled.div`
  text-align: right;
  margin-top: 20px;
  width: 50%;
  position: relative;
  z-index: 1;

  h3 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: #fff;
`;

const Button = styled.button`
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`
export { SliderContainer, SliderContent, SlideItem, ImageBackground, Text, Description, Button, ButtonWrapper}