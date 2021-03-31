import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { useDispatch, useStore } from '../../../store/provider';
import { types } from '../../../store/types';

import { routes } from '../../../routes';
import Button from '../Button/Button';
import { 
  HeaderContainer,
  NavbarLinkContainer,
  StyledLink,
  HeaderText
} from './Header.styles';
import ConnectedLabel from '../ConnectedLabel/ConnectedLabel';

interface HeaderProps {};

const Header: React.FC<HeaderProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { wallet: { currentAccount } } = useStore();
  const [activeRoute, setActiveRoute] = useState<number>(null);
  
  const links: {[p: string]: string | number}[] = [
    {path: routes.HOME, label: 'Home', id: 1},
    {path: routes.GALLERY, label: 'Gallery', id: 2},
    {path: routes.FUN_ZONE, label: 'Fun Zone', id: 3}
  ];

  useEffect(() => {
    const pathname = window.location.pathname;
    const currentRoute = links.find(({ path }) => path === pathname)?.id;
    setActiveRoute(currentRoute as number);
  }, []);

  const navigateTo = ({ path, id}: {[p: string]: string | number}): void => {
    history.push(path);
    setActiveRoute(id as number);
  }

  return (
    <HeaderContainer>
      <HeaderText>Mainnet</HeaderText>
      <NavbarLinkContainer>
        {
          links.map(link => (
            <StyledLink
              key={link.path + `${link.id}`}
              active={activeRoute === link.id}
              onClick={() => navigateTo(link)}
            ><span>{link.label}</span></StyledLink>
          ))
        }
      </NavbarLinkContainer>
      {
        currentAccount ? (
          <ConnectedLabel account={currentAccount}/>
        ) : (
          <Button
            outline
            label="Connect Wallet"
            height="50px"
            width="150px"
            onClick={() => dispatch({ type: types.ui.handleWalletModal, payload: true})}
          />
        )
      }
    </HeaderContainer>
  )
}

export default Header;
