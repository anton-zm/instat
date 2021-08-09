import React, { useEffect, useState } from 'react';
import { Content } from './components/content-wrapper';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Heading} from './components/heading'
import { Deals } from './components/deals'
import { DealType } from './components/deal';
import { observer } from 'mobx-react-lite'
import { Store } from './store';

const App = observer(() => {
  const todos = Store.Todos.slice().reverse()
  const [filter, setFilter] = useState<DealType[]>(todos)
  const [text, setText] = useState('')

  useEffect(() => {
    if(text){
      const filteredArr = todos.filter((e) => e.name.startsWith(text))
      setFilter(filteredArr)
    }else setFilter(todos)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[text])

  
  return (
    <div className="App">
      <Header />
      <Content style={{minHeight:'85vh'}}>
        <Heading onUpdate={setText}  />
        <Deals data={filter}/>
      </Content>
      <Footer />
    </div>
  );
})

export default App;
