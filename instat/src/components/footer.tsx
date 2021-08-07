import React from 'react';
import styled from 'styled-components'
import { Content } from './content-wrapper'
import logo from '../assets/img/logo.svg'

const FooterWrapper = styled.footer`
    background: linear-gradient(150deg, #090D0D 0%, #090D0D 50%, #243233 100%);
    padding: 55px 0 40px 0;
`
const FooterSubtitle = styled.h2`
    color: #c1c1c1;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 15px;
`
const FooterLink = styled.a<{dotted?:boolean}>`
    color:#c1c1c1;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 12px;
    cursor: pointer;
    border-bottom: ${(props) => props.dotted ? '1px dotted #c1c1c1' : 'none'};
    display: inline-block;
`
const Column = styled.div`
    width: calc(100% / 6);
`

export const Footer = () => { 
    return ( 
        <FooterWrapper> 
            <Content className='flex-row between'>
                <Column className='flex-column'>
                    <FooterSubtitle>Football</FooterSubtitle>
                    {['Instat Scout','InStat Index', 'Statistical reports','Analytical reports', 'Scouting reports', 'Instat fitness', 'For players', 'For academies', 'For referees', 'InStat Autocrop'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
                <Column className='flex-column'>
                    <FooterSubtitle>Ice hockey</FooterSubtitle>
                    {['Instat Scout','InStat Index','Instat reports'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                    <FooterSubtitle style={{marginTop:30}}>basketball</FooterSubtitle>
                    {['Instat Scout','Instat reports'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
                <Column className='flex-column'>
                    <FooterSubtitle>media</FooterSubtitle>
                    {['For mass media','InStat Autocrop','Broadcasting'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                    <FooterSubtitle style={{marginTop:30}}>handball</FooterSubtitle>
                    {['Instat Scout','Instat reports'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
                <Column className='flex-column'>
                    <FooterSubtitle>instat tv</FooterSubtitle>
                    {['Broadcasting','OTT Platform', 'InStat Autocrop','Recorder', 'On-Screen Graphics', 'Automatic Highlights'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
                <Column className='flex-column'>
                    <FooterSubtitle>company</FooterSubtitle>
                    {['Career','Data protection'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
                <Column >
                    <FooterSubtitle>contacts</FooterSubtitle>
                    {['+ 353 1 513 6855','+ 44 207 193 2715 (Support)', '+ 7 915 232 7860 (tech. support)'].map((e)=>(
                        <FooterLink dotted key={e}>{e}</FooterLink>
                    ))}
                    {['support@instatsport.com','hr@instatsport.com', 'requests@instatfootball.com', 'sales@instatsport.com'].map((e)=>(
                        <FooterLink key={e}>{e}</FooterLink>
                    ))}
                </Column>
            </Content>
        </FooterWrapper> 
    )
}

