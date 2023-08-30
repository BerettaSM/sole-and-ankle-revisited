/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <StyledDialogOverlay isOpen={isOpen} onClick={onDismiss}>
      <StyledDialogContent aria-label='Menu'>

        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={1.5} />
        </CloseButton>

        <Spacer />

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Spacer>
          <MenuFooter>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </MenuFooter>
        </Spacer>

      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};


const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-backdrop);
`

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: calc(100% - max(75px, 20vw));
  padding: 32px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.medium};
`

const Spacer = styled.div`
  flex: 1;
  display: flex;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default MobileMenu;
