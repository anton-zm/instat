import React from 'react';
import { Content } from './components/content-wrapper';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Heading} from './components/heading'
import { Deals } from './components/deals'
import { observer } from 'mobx-react-lite'
import { Store } from './store';

const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <Content style={{minHeight:'85vh'}}>
        <Heading />
        <Deals data={Store.Todos}/>
      </Content>
      <Footer />
    </div>
  );
})

export default App;
