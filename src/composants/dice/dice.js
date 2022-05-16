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
        if (this.state.num) {
            return (
                <p>Vous avez roulé un {this.state.num}</p>
            )
        };

        return (
            <div>
                <p>Cliquer sur le dé pour le lancer :</p>
                <ReactDice
                    numDice={1}
                    rollDone={this.rollDoneCallback}
                    ref={dice => this.reactDice = dice}
                />
            </div>
        )
    }
    



    rollAll() {
        this.reactDice.rollAll()
    }

    rollDoneCallback = (num) => {
        this.setState({num: num})
    }
}