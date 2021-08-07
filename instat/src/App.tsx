import React from 'react';
import { Content } from './components/content-wrapper';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Heading} from './components/heading'


function App() {
  return (
    <div className="App">
      <Header />
      <Content style={{minHeight:'85vh'}}>
        <Heading />
        
      </Content>
      <Footer />
    </div>
  );
}

export default App;
