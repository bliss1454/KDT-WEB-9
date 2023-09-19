import { Component } from "react";

class EventP extends Component {

    handleClick = () => {
        alert(this.props.message);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Show Message</button>
            </>
        )
    }
}

export default EventP;