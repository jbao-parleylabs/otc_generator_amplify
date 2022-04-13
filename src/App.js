import React from 'react'
import './App.css';
import { Container, Header, Segment, Image } from 'semantic-ui-react';
import CodeGenerator from "./components/CodeGenerator"
import parleylabsLogo from "./assets/images/PL_Logo_Horizontal.png"

function App() {

  return (
    <div className="App">
      <Segment style={{"backgroundColor": "#fafafa"}} clearing>
        <Header as='h2' floated='right'>
        </Header>
        <Image src={parleylabsLogo}  size='medium' floated='left'/>
      </Segment>
      <Container>
          <CodeGenerator />
      </Container>
      <Segment style={{"backgroundColor": "#333333", "color": "#fff"}} clearing>
        <center>
            © 2022, Parley Labs. All rights reserved
        </center>
      </Segment>
    </div>
  );
}

export default App;
