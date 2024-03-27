import React, { useState, memo } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { usePathname } from "next/navigation";
import { PageProps } from "@/interfaces/menu";
import MenuItemContent from "./MenuItem";
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import {DrawerContainer, MenuItems, MenuItem, CollapseButton, SubpageWrapper} from './styles'
import { useSession } from "next-auth/react";


const pages: PageProps[] = [
  {
    title: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Workouts",
    icon: <SportsKabaddiIcon />,
    subpages: [
      {
        title: "Available Plans",
        link: "/training-plans/available",
      },
      {
        title: "My Workouts",
        link: "/training-plans/my-workouts",
      },
    ],
  },
  {
    title: "Nutrition plans",
    link: "/clients",
    icon: <EggAltOutlinedIcon />,
  },
  {
    title: "My goals",
    link: "/my-goals",
    icon: <FlagCircleOutlinedIcon />,
  },
];

const DrawerComponent: React.FC = () => {
  const { data: session }: any = useSession();
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (!session) return null;

  return (
    <DrawerContainer isopen={isOpen}>
      <CollapseButton isopen={isOpen} onClick={toggleDrawer}>
        {isOpen ? (
          <ArrowForwardIosIcon color="primary" />
        ) : (
          <ArrowBackIosNewIcon color="primary" />
        )}
      </CollapseButton>
      <MenuItems isopen={isOpen}>
        {pages.map((page, index) => (
          <MenuItem issubpage={false} key={index} isactive={Boolean(usePathname() === page.link)}>
            <MenuItemContent page={page} isOpen={isOpen} />
            {page.subpages && isOpen && (
              <SubpageWrapper>
                {page.subpages.map((subpage, subindex) => (
                  <MenuItem issubpage={true} key={subindex} isactive={Boolean(usePathname() === subpage.link)}>
                    <MenuItemContent subpage={subpage} isOpen={isOpen} />
                  </MenuItem>
                ))}
              </SubpageWrapper>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </DrawerContainer>
  );
};

export default memo(DrawerComponent);