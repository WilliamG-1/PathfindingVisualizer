import { Component } from "react";

export default class TaskBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="taskbar">
                <button id="pathfind" onClick={this.props.onFindPath}>Find Path</button>
                <button id="setstart" onClick={this.props.onSelectStart}>Set Start</button>
                <button id="settarget" onClick={this.props.onSelectTarget}>Set Target</button>
                <button id="setbarriers" onClick={this.props.onSelectBarrier}>Set Barriers</button>
                <button id="resetgrid" onClick={this.props.onResetGrid}>Reset</button>
            </div>
        )
    }
}