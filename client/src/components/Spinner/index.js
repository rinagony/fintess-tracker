import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 90vh;
align-items: center;
`

export default function Spinner() {
  return (
    <SpinnerWrapper>
    <CircularProgress color="primary" />
    </SpinnerWrapper>
  )
}
