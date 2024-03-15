import Button from "@mui/material/Button";

interface ButtonPrimraryProps {
  onClick: () => void;
  text: string;
}

export default function ButtonPrimary({ onClick, text }: ButtonPrimraryProps) {
  return (
    <Button sx={{textWrap: 'nowrap', padding: '7px'}} color="secondary" variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
}
