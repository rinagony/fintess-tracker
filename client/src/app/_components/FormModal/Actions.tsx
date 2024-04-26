import React from 'react'
import styled from 'styled-components';
import Button from "@mui/material/Button";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
`;

interface ActionProps {
  handleCancel: () => void;
  isDisabledConfirm: boolean;
  confirmText: string;
}

export default function Actions({handleCancel, isDisabledConfirm, confirmText}: ActionProps) {
  return (
    <ActionsWrapper>
    <Button variant="text" onClick={handleCancel}>
      Cancel
    </Button>
    <Button
      disabled={isDisabledConfirm}
      variant="contained"
      type="submit"
    >
     {confirmText}
    </Button>
  </ActionsWrapper>
  )
}
