import colors from '@/shared/colors';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
`;

const YellowCircle = styled.div`
  width: 30px;
  height: 30px;
  background: ${colors.yellow};
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 10px;
`;

const RedCircle = styled.div`
  width: 30px;
  height: 28px;
  background: ${colors.primary};
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
`;

const Logo = () => {
  return (
    <Container>
      <YellowCircle />
      <RedCircle />
    </Container>
  );
};

export default Logo;