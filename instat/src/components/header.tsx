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

const HeaderMenu = () => {   
    return (
        <nav>
            
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

