import { Component } from "react";

export default class TaskBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="taskbar">
                <button id="pathfind">Find Path</button>
                <button id="setstart" onClick={this.props.onSelectStartq}>Set Start</button>
                <button id="settarget" onClick={this.props.onSelectTarget}>Set Target</button>
            </div>
        )
    }
}