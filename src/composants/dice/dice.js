import React, { Component } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export class Dice extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            num: ""
        };
    }

    render() {

        return (
            <div>
                <p>Cliquer sur le dé pour le lancer :</p>
                <ReactDice
                    numDice={1}
                    defaultRoll={null} 
                    rollDone={this.rollDoneCallback}
                />
                {this.state.num ? 
                    <p>Vous avez roulé un {this.state.num}</p>
                    : null
                }
            </div>
        )
    }

    rollDoneCallback = (num) => {
        this.setState({num: num})
    }
}