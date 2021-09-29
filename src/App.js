import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { jsonData } from './data/dataTest';
import { List, Input, Container } from 'semantic-ui-react'


const App = () => {
  const [data, setData] = useState(jsonData);
  const [duplicated, setDuplicated] = useState([]);

  const searchFunction = (value) => {
    const filtered = data.filter((item, i) => item["username"].toLowerCase().includes(value));
    setDuplicated(filtered);
    return; 
  };


  //render happening here!
  return (
    <React.Fragment>
      <Container>
        <Input onChange={(e) => searchFunction(e.target.value)} focus placeholder='Search...' />
      </Container>
      <Container>
        {duplicated.length ?
          duplicated.map((item, i) => {
            return (
              <List key={i}>
                <List.Item>{item["username"]}</List.Item>
                <List.Item>{item["email"]}</List.Item>
                <List.Item>{item["age"]}</List.Item>
              </List>
            )
          })
          :
          data.map((item, i) => {
            return (
              <List key={i}>
                <List.Item>{item["username"]}</List.Item>
                <List.Item>{item["email"]}</List.Item>
                <List.Item>{item["age"]}</List.Item>
              </List>
            )
          })
        }
      </Container>
    </React.Fragment>
  );
}

export default App;











