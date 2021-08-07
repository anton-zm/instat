import React from 'react';
import { Content } from './components/content-wrapper';
import {Header} from './components/header'
import {Footer} from './components/footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Content style={{minHeight:'85vh'}}>
        
      </Content>
      <Footer />
    </div>
  );
}

export default App;
