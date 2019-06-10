import React, {Component} from 'react';
import './App.css';

class App extends Component
{

    constructor(props)
    {
        super(props);
        this.state= {
            board: Array(9).fill(null),
            player: "X"

        }
    }

    checkWinner = () =>{

        let WinLines =
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
    }

    handleClick = (index)=>
    {

        let newBoard = this.state.board;

        if(newBoard[index] === null){

            newBoard[index]= this.state.player;
           
            let newPlayer = this.state.player === 'X'?"O":"X"

            this.setState({
                board: newBoard,
                player: newPlayer
            })

            this.checkWinner()

            

        }

               
        // this.state.board[index]= 'X';
        // console.log(this.state.board); 
    }

    render() 
    {

        const box = this.state.board.map( 
            (box,index) => 
            <div className="box" 
            key={index} 
            onClick={() => this.handleClick(index)}>
            {box}
            </div> 
             );

        return(
            <div className="container">

                <h1>Tic tac toe App</h1> 

                <div className="board">
                    
                    {box}

                </div> 

            </div> 
            
        );
    }

}


export default App;
