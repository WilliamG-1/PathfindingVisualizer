import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './Grid.css'
import ANode from './ANode';

import TaskBar from './Taskbar';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Grid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nodeGrid: [],
        }
    }

    displayGrid() {
        //console.log(this.props.AGrid);
        const divsOfDivs = this.props.AGrid.map((rowList, rowIndex) => {
            return (rowList.map((N, nodeIndex) => {
                const classN = `${N.discoverability} Cell`;

                // {rowIndex * 20 + nodeIndex} This are the button numbers
                return (<button key={rowIndex * 20 + nodeIndex} className={classN} onClick={this.props.selectNode} onDrag={this.props.dragCreateBarriers}>{rowIndex * 20 + nodeIndex} </button>)
            }))
        })
        return divsOfDivs
    }

    render() {
        return (
            <div id="Grid">
                {this.displayGrid()}
            </div>

        )
    }
}