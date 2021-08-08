import React from 'react';
import { Content } from './components/content-wrapper';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Heading} from './components/heading'
import { Deals } from './components/deals'


function App() {
  return (
    <div className="App">
      <Header />
      <Content style={{minHeight:'85vh'}}>
        <Heading />
        <Deals data={[{id:1, name: 'cook the dinner'},{id:2, name: 'find a job'}]}/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
