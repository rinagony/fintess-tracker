import React, { useState, memo } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { usePathname } from "next/navigation";
import { PageProps } from "@/interfaces/menu";
import MenuItemContent from "./MenuItem";
import {DrawerContainer, MenuItems, MenuItem, CollapseButton} from './styles'


const pages: PageProps[] = [
  {
    title: "Projects",
    link: "/projects",
    icon: <HomeOutlinedIcon />,
    authRequired: true,
  },
  {
    title: "Clients",
    link: "/",
    icon: <HomeOutlinedIcon />,
    authRequired: true,
  },
  {
    title: "My account",
    link: "/my-account",
    icon: <HomeOutlinedIcon />,
    authRequired: true,
  },
];

const DrawerComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContainer isOpen={isOpen}>
      <CollapseButton isOpen={isOpen} onClick={toggleDrawer}>
        {isOpen ? (
          <ArrowForwardIosIcon color="primary" />
        ) : (
          <ArrowBackIosNewIcon color="primary" />
        )}
      </CollapseButton>
      <MenuItems isOpen={isOpen}>
        {pages.map((page, index) => (
          <MenuItem key={index} isActive={usePathname() === page.link}>
            <MenuItemContent page={page} isOpen={isOpen} />
          </MenuItem>
        ))}
      </MenuItems>
    </DrawerContainer>
  );
};

export default memo(DrawerComponent);