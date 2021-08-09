import React from 'react';
import styled from 'styled-components'
import { Content } from './content-wrapper'
import logo from '../assets/img/logo.svg'

const HeaderWrapper = styled.header`
    padding: 20px 0;
    background-color: rgba(0,0,0, 0.7);
    width: 100%;
`
const Logo = styled.img`
    width: 60px;
`
const MenuLink = styled.a`
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    margin:0 25px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    :hover {
        opacity: 1;
    }
`
// Pseudo-menu)))
const HeaderMenu = () => {   
    return (
        <nav className='flex-row'>
            {['football', 'ice hockey', 'basketball', 'handball', 'instat tv', 'media', 'blog'].map((item) => (
                <MenuLink key={item}>{item}</MenuLink>
            ))}
        </nav>
    )
}

export const Header = () => { 
    return (
        <HeaderWrapper className='header'>
            <Content className='flex-row between centered-align'>
                <Logo src={logo} alt='logo inStat' />
                <HeaderMenu />
            </Content>
        </HeaderWrapper>
    )
}

