import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertInterface {
  message: string
}

function AlertComponent({ message}: AlertInterface) {
  return (
    <Alert sx={{mt: 4}} variant="filled" severity="error">
      {message}
    </Alert>
  )
}

export default AlertComponent