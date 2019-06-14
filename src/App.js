import React, {Component} from 'react';
import './App.css';
import Status from './components/Status';

class App extends Component
{

    constructor(props)
    {
        super(props);
        this.state= {
            board: Array(9).fill(null),
            player: null,
            winner: null
        }
    }

    checkWinner = () =>{

        let winLines =
        [
            ['0','1','2'],
            ['3','4','5'],
            ['6','7','8'],
            ['0','3','6'],
            ['1','4','7'],
            ['2','5','8'],
            ['0','4','8'],
            ['2','4','6'],

        ]

        for (let index= 0; index < winLines.length; index++){
            const [a,b,c] = winLines[index];

            if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
                alert('{this.state.player} wins');

                this.setState({
                    winner: this.state.player
                })
            }

        }
    }

  

    handleClick = (index)=>
    {

        let newBoard = this.state.board;

        if(this.state.player && !this.state.winner){

            if(newBoard[index] === null)
            {

                newBoard[index]= this.state.player;
            
                let newPlayer = this.state.player === 'X'?"O":"X"


                this.setState(
                {
                    board: newBoard,
                    player: newPlayer
                })

                this.checkWinner()


                // this.state.board[index]= 'X';
               // console.log(this.state.board); 
            
            }
        }       
       
    }

    setPlayer = (player)=>{

        this.setState({
            player : player
        })

        // console.log(player);

    }

    renderBoxes = () =>{
        return this.state.board.map( 
            (box,index) => 
            <div className="box" 
            key={index} 
            onClick={() => this.handleClick(index)}>
            {box}
            </div> 
             );
    }
    
    render() 
    {

        return(
            <div className="container">

                <h1>Tic tac toe App</h1> 

                <Status player = {this.state.player} setPlayer = {(e) => this.setPlayer(e)} />
                
                <div className="board">
                    
                    {this.renderBoxes()}

                </div> 

            </div> 
            
        );
    }

}


export default App;
