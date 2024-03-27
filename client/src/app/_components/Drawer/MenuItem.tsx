import React from "react";
import Link from "next/link";
import { PageProps, SubpageProps } from "@/interfaces/menu";
import { MenuItemWrapper } from "./styles";

interface MenuItemProps {
  page?: PageProps;
  isOpen: boolean;
  subpage?: SubpageProps;
}

const MenuItemContent = ({ page, isOpen, subpage }: MenuItemProps) => {
  const link = subpage ? subpage.link : (page && page.link) || '#';

  return (
    <Link href={link}>
      {isOpen ? (
        <MenuItemWrapper hasSubpages={Boolean(page?.subpages)}>
          {page && page.icon}
          <span>{subpage ? subpage.title : (page && page.title)}</span>
        </MenuItemWrapper>
      ) : (
        page && page.icon
      )}
    </Link>
  );
};

export default MenuItemContent;