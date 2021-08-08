import React, { useState } from 'react'
import styled from 'styled-components'
import { Deal, DealType } from './deal'

const DealsWrapper = styled.section`
    margin-top: 64px;
`
const DealsTitle = styled.h2`
    color: #c1c1c1;
    font-style: italic;
    border-bottom: 2px solid #c1c1c1;
    padding-bottom: 16px;
`
const NoDeals = styled.p`
    color: #c1c1c1;
    font-size: 32px;

`

export const Deals = ({data}:{data:DealType[]}) => {
    return (
        <DealsWrapper>
            <DealsTitle>Your deals:</DealsTitle>
            {!data.length && <div style={{minHeight:400}}  className='flex-row centered w100'>
                 <NoDeals>No deals ...</NoDeals>
            </div>}
            <div className='flex-column w100'>
                {data.map((deal) => (
                    <Deal key={deal.id} text={deal.name} />
                ))}
            </div>
        </DealsWrapper>
    )
}