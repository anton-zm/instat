import React from 'react';
import styled from 'styled-components'
import { Content } from './content-wrapper'
import logo from '../assets/img/logo.svg'

const FooterWrapper = styled.footer`
    background: linear-gradient(150deg, #090D0D 0%, #090D0D 50%, #243233 100%);
    padding: 55px 0 40px 0;
`

export const Footer = () => { 
    return ( 
        <FooterWrapper> 
            <span>Footer</span>
        </FooterWrapper> 
    )
}

