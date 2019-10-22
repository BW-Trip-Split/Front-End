import React from 'react';
import {Component} from 'react';

class Message extends Component {
    state = {}

    render(){
        return(
            <div>
                <h1>Message</h1>
                <p>You owe {this.props.owed.name} ${(parseFloat(this.props.friendOwes) * parseFloat(this.props.owed.percentageOwed)).toFixed(2)}, </p>
            </div>
        )
    }
}

export default Message;