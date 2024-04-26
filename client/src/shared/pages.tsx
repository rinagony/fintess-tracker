import { PageProps } from "@/interfaces/menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';

const pages: PageProps[] = [
  {
    title: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "My goals",
    link: "/my-goals",
    icon: <FlagCircleOutlinedIcon />,
  },
  {
    title: "My habits",
    link: "/my-habits",
    icon: <CheckCircleOutlineIcon />,
  },
  {
    title: "Sport & Food",
    link: "/available-plans",
    icon: <SportsHandballOutlinedIcon />,
  },
  {
    title: "Network",
    link: "/clients",
    icon: <EggAltOutlinedIcon />,
  },
];

export default pages;