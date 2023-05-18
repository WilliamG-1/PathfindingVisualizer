import { Component } from "react";

export default class Node extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: "unkown"
        }
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus() {
        this.setState({
            status: "explored"
        })
    }

    changeStatus(newStatus) {
        this.setState({
            status: newStatus
        })
    }

    render() {
        return (
            <button key={this.props.keyid} className={this.state.status} onClick={this.updateStatus} onEventTriggered={this.props.customeventa}></button>
        )
    }
}