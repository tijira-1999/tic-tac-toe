import React, {Component} from 'react';
import './App.css';

class App extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            board: Array(9).fill(null)
        }
    }

    handleClick = (index)=>{

        let newBoard = this.state.board;

        newBoard[index]= 'X';

        this.setState({
            board: newBoard
        })

        // this.state.board[index]= 'X';
        console.log(this.state.board); 
    }

    render() {

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
            
        )
    }

}


export default App;
