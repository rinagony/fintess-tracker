import pages from '@/shared/pages';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuItem } from '../Drawer/styles';
import MenuItemContent from '../Drawer/MenuItem';
import { usePathname } from 'next/navigation';

interface MobileMenuContainerProps {
  isopen: boolean;
}

const MobileMenuContainer = styled.div<MobileMenuContainerProps>`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: ${({ isopen }) => (isopen ? '18rem' : '0')};
  transition: 0.3s;
  background: #eaf6f6;
  overflow-y: auto;
  z-index: 999;
  box-shadow: rgba(99,99,99,0.2) 0px 2px 8px 0px;
`;

const MobileMenuContent = styled.div`
  padding: 0 20px 20px 20px;
`;

const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    if(pathname && isOpen) {
      setIsOpen(false)
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileMenuButton onClick={toggleMenu}>☰</MobileMenuButton>
      <MobileMenuContainer isopen={isOpen}>
        <MobileMenuContent>
        {pages.map((page, index) => (
          <MenuItem issubpage={false} key={index} isactive={Boolean(pathname === page.link)}>
            <MenuItemContent page={page} isOpen={isOpen} />
          </MenuItem>
        ))}
        </MobileMenuContent>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;