import React, { useState, memo } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { usePathname } from "next/navigation";
import MenuItemContent from "./MenuItem";
import {DrawerContainer, MenuItems, MenuItem, CollapseButton} from './styles'
import { useSession } from "next-auth/react";
import pages from "@/shared/pages";

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
          </MenuItem>
        ))}
      </MenuItems>
    </DrawerContainer>
  );
};

export default memo(DrawerComponent);