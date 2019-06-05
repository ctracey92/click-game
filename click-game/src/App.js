import React from 'react';
import logo from './logo.svg';
import './App.css';
import gameArr from "./components/gameArr.json"
import Card from "./components/card/card"

class App extends React.Component {
  state = {
    gameArr,
    count: 0,
    clicked: [],
  }

  checkForWin = () => {
    if(this.state.count === this.state.gameArr.length){
      alert("You won!")
      this.setState({count: 0})
      this.setState({clicked: []})
    }
  }
  gameCheck = (e) => {
    if(this.state.clicked.includes(e.target.id)){
      alert("Sorry you clicked this one twice")
      this.setState({count: 0})
      this.setState({clicked: []})
    }
    else{
      const newValue = e.target.id;
      this.setState(
        {count: this.state.count+1})
      this.setState({clicked: [...this.state.clicked,newValue]})
    }
  }

  cardClick = (e) => {
    this.gameCheck(e)
  }

  render (){
    return (
      <div className="container">
        
        <h1>Score: {this.state.count}</h1>
        {this.state.gameArr.map(card => (
          <Card
            key={card.id}
            cardId={card.id}
            image={card.image}
            value={card.value}
            function={this.cardClick}
            function2={this.checkForWin}
        />))}
      </div>
    )
  }
}

export default App;
