import aNode from "./ANode";

export default class aGrid {
    constructor(rows, columns) {

        this.rows = rows;
        this.columns = columns;
        // Note that nodes is a 2d array of aNodes
        this.nodes = [];
        // These will be set when creating grid 
        this.startNode = null;
        this.targetNode = null;
        this.createGrid();

    };

    createGrid() {
        let newGrid = []
        for (let i = 0; i < this.rows; i++) {
            newGrid[i] = []
            for (let j = 0; j < this.columns; j++) {
                // Here, we create and define the i of jth element to be a Node component (pass props here too)
                newGrid[i][j] = new aNode(i, j, true, "discoverable")
            }
        }
        this.nodes = newGrid;
        this.setStartNode(0, 0);
        this.setTargetNode(9, 9);
    }


    setStartNode(row, column) {
        if (this.startNode) {
            this.startNode.changeDiscoverability('discoverable')
        }
        this.nodes[row][column].changeDiscoverability('start');
        this.startNode = this.nodes[row][column]
    }
    setTargetNode(row, column) {
        if (this.targetNode) {
            this.targetNode.changeDiscoverability('discoverable')
        }
        this.nodes[row][column].changeDiscoverability('target');
        this.targetNode = this.nodes[row][column]
    }
    get grid() {
        return this.nodes;
    }

}