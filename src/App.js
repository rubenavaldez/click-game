import React, { Component } from 'react';
// import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard'
import Icons from './icons.json'

// import ".components/IconCard.css";

const shuffleArray = array => {
  let counter = array.length;

  while (counter > 0 ){
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked:[],
    Icons,
    gameOver: false
  };

  componentDidMount(){
    this.setState({result:"Click a player to get started"})
  }

  clickedPlayer = id =>{
    console.log(`picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver:false
      });
    }else {
        this.resetGame();
    }
    }

    pointIncrease = () =>{
      let score = this.state.currentScore + 1
      console.log(`the score is ${score}`);
      if (score === this.state.Icons.length){
        this.setState({
          result: "You win! Start clicking to play again!",
          topScore: score,
          currentScore: 0,
          clicked: [],
          Icons,
          gameOver: false
        });
      }else{
        this.setState({
          currentScore: score,
          result: "Correct!"
        });
      }
      this.resetIconArray();
      }

      resetGame= () => {
        this.setState({
          points: 0,
          currentScore: 0,
          topScore: this.state.topScore,
          result: "You Lose!",
          clicked: [],
          Icons,
          gameOver: true
        });
        console.log('Game over? ', this.state.gameOver)
        this.resetIconArray();
      }
      resetIconArray = () => {
        let newScramble = shuffleArray(Icons);
        this.setState({Icons: newScramble})
      }

      render(){
        return(
          <div className='responsive-container' 
          // style={{"backgroundColor":"black"}}
          >
            <NavBar 
            topScore={this.state.topScore} 
            currentScore={this.state.currentScore}
            status={this.state.result} 
            />
            <Banner />
            <div className = 'row'>
            <div className="col l12">
              {this.state.Icons.map(icon => (
                <IconCard
                  id={icon.id}
                  image={icon.image}
                  clickedPlayer={this.clickedPlayer}
                  key={icon.id}
                  />
              ))}
              </div>
            </div>
          </div>
        );
      }


    }

  


export default App;
