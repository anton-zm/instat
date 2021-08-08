import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

export type DealType = {
    id: string,
    name: string,
    done: boolean
}

const DealWrapper = styled.section`
    margin-top: 32px;
`

export const Deal = observer(({text}:{text:string}) => {
    return (
        <DealWrapper>
            <span>{text}</span>
        </DealWrapper>
    )
})