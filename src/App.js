import React, {Component} from 'react';
import './App.css';

class App extends React.Component{

    constructor(props)
    {
        super(props);
        this.state= {
            board: Array(9).fill("X")
        }
    }

    render() {

        const box = this.state.board.map( box => <div className="box">{box}</div>  )

        return(
            <div className="container">

                <h1>Tic tac toe App</h1> 

                <div className="board">
                    
                    <div className="box"></div> 
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div>  
                    <div className="box"></div> 

                </div> 

            </div> 
            
        )
    }

}


export default App;
