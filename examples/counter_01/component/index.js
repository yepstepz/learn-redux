import React from 'react';
class Counter extends React.Component {
    render(){
        return(
            <div> Clicked {this.props.value} times
                <p onClick={this.props.onIncrement} > + </p>
                <p onClick={this.props.onDecrement}> - </p>
            </div>
        )
    }
}
export default Counter;