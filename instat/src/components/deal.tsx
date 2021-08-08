import React, { useState } from 'react'
import styled from 'styled-components'

export type DealType = {
    id: string | number,
    name: string
}

const DealWrapper = styled.section`
    margin-top: 32px;
`

export const Deal = ({text}:{text:string}) => {
    return (
        <DealWrapper>
            <span>{text}</span>
        </DealWrapper>
    )
}