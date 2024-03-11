import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageProps } from "@/interfaces/menu";
import { MenuItemWrapper } from "./styles";

interface MenuItemProps {
  page: PageProps;
  isOpen: boolean;
}

const MenuItemContent = ({page, isOpen}: MenuItemProps) => {
  return (
    <Link href={page.link}>
      {isOpen ? (
        <MenuItemWrapper>
          {page.icon}
          <span>{page.title}</span>
        </MenuItemWrapper>
      ) : (
        page.icon
      )}
    </Link>
  );
};

export default MenuItemContent;
