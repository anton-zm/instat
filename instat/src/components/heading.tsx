import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './ui/button'
import { Input } from './ui/input'

const HeadingWrapper = styled.div`
    padding: 32px 0;
`

export const Heading = () => {
    const [value, setValue] = useState('')

    return (
        <HeadingWrapper className='flex-row between'>
            <Input type='text' value={value} placeholder='Enter your deal' onChange={(e) => setValue(e.target.value)} />
            <Button onClick={()=>{}}>Add</Button>
        </HeadingWrapper>
    )
}