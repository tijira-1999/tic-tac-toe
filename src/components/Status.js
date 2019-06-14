import React from 'react';
import Player from './playerselect';


class Status extends React.Component{

    handleSetPlayer(e){
        this.props.setPlayer(e);
    }

    render(){
        return(
            this.props.player ? 

            <h2>Next player is {this.props.player} </h2> :
            
            <Player player={(e) => this.handleSetPlayer(e)} />

        );
    }
}

export default Status;