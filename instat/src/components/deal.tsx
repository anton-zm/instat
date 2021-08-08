import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Store } from '../store'

export type DealType = {
    id: string,
    name: string,
    done: boolean
}

const DealWrapper = styled.section`
    margin-top: 32px;
    border-bottom: 1px solid #c1c1c1;
    padding:0 0 24px 0;
`
const DealText = styled.p<{done:boolean}>`
    color: #c1c1c1;
    font-size: 18px;
    text-decoration: ${(props) => props.done ? 'line-through' : 'none'};
`
const DealCheckBox = styled.div<{done:boolean}>`
    width: 20px;
    height: 20px;
    border: 2px solid #c1c1c1;
    border-radius: 3px;
    margin-right: 24px;
    background-color: ${(props) => props.done ? 'blue' : 'transparent'};
`

export const Deal = observer(({todo}:{todo:DealType}) => {

    return (
        <DealWrapper className='flex-row'>
            <DealCheckBox done={todo.done} onClick={() => Store.doneTodo(todo.id)} />
            <DealText done={todo.done}>{todo.name}</DealText>
        </DealWrapper>
    )
})