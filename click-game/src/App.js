import React from 'react';
import logo from './logo.svg';
import './App.css';
import gameArr from "./components/gameArr.json"
import Card from "./components/card/card"

class App extends React.Component {
  state = {
    gameArr,
  }
  render (){
    return (
      <div class="container">
        {this.state.gameArr.map(card => (
          <Card
            key={card.id}
            image={card.image}
            value={card.value}
        />))}
      </div>
    )
  }
}

export default App;
