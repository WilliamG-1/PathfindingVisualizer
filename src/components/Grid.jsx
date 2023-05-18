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
            startNode: new ANode(0, 0, true, 'discoverable'),
            targetNode: new ANode(0, 0, true, 'discoverable'),
        }
        this.createGrid(20, 20)


    }

    changeNodeDiscoverability(nodeRow, nodeCol, newDiscoverabilty) {
        let TempArray = [...this.state.nodeGrid];

        TempArray[nodeRow][nodeCol].changeDiscoverability(newDiscoverabilty);

        this.setState({
            nodeGrid: TempArray
        })

    }
    chooseNode = (e) => {
        // We will grab the node number to determine what node we need to change (note that the text is hidden in the actual button lol)
        const nodeNumber = parseInt(e.target.textContent);
        let TempArray = [...this.state.nodeGrid];

        const rowNumber = Math.floor(nodeNumber / 20);
        const colNumber = nodeNumber % 20;
        let selectedNode = TempArray[rowNumber][colNumber];

        if (this.props.nodeSelector === 0) {

            this.state.startNode.changeDiscoverability('discoverable');

            console.log("Changing start node!");
            TempArray[rowNumber][colNumber].changeDiscoverability('explored');
            let newStart = TempArray[rowNumber][colNumber];

            this.setState({
                startNode: newStart,
                nodeGrid: TempArray
            })
        }
        else if (this.props.nodeSelector === 1) {
            this.state.targetNode.changeDiscoverability('discoverable');
            console.log("Changing target node!");
            TempArray[rowNumber][colNumber].changeDiscoverability('target');
            let newTarget = TempArray[rowNumber][colNumber];

            this.setState({
                targetNode: newTarget,
                nodeGrid: TempArray
            });
        }

    }

    createGrid(rows, columns) {
        // Initialize grid of nodes
        let newArray2 = []
        for (let i = 0; i < rows; i++) {
            newArray2[i] = []
            for (let j = 0; j < columns; j++) {
                // Here, we create and define the i of jth element to be a Node component (pass props here too)
                newArray2[i][j] = new ANode(i, j, true, "discoverable")
            }
        }
        // Assign our state grid to the newly created array
        this.state.nodeGrid = newArray2;
    }

    displayGrid() {
        console.log(this.props.AGrid);
        const divsOfDivs = this.props.AGrid.map((rowList, rowIndex) => {
            return (rowList.map((N, nodeIndex) => {
                const classN = `${N.discoverability} Cell`;

                // {rowIndex * 20 + nodeIndex} This are the button numbers
                return (<button key={rowIndex * 20 + nodeIndex} className={classN} onClick={this.chooseNode}>{rowIndex * 20 + nodeIndex} </button>)
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