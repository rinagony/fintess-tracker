import Button from "@mui/material/Button";

interface ButtonPrimraryProps {
  onClick: () => void;
  text: string;
}

export default function ButtonPrimary({ onClick, text }: ButtonPrimraryProps) {
  return (
    <Button sx={{textWrap: 'nowrap'}} color="secondary" variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
}
