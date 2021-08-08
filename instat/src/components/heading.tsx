import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {v4 as uuidv4} from 'uuid'
import { observer } from 'mobx-react-lite'
import { Store } from '../store'

const HeadingWrapper = styled.div`
    padding: 32px 0;
`

export const Heading = observer(() => {
    const [value, setValue] = useState('')

    const addTodo = () => {
        const ID = uuidv4()
        Store.addTodo({id:ID, name: value, done: false})
        setValue('')
    }

    useEffect(() => {
        if(value){
            const Enter = (event:KeyboardEvent) => {
                if(event.code === 'Enter') addTodo()
            }
            window.addEventListener('keydown', Enter)
            return () => {
                window.removeEventListener('keydown', Enter)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])
    
    return (
        <HeadingWrapper className='flex-row between'>
            <Input type='text' value={value} placeholder='Enter your deal' onChange={(e) => setValue(e.target.value)} />
            <Button onClick={addTodo}>Add</Button>
        </HeadingWrapper>
    )
})