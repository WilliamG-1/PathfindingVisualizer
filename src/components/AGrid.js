import aNode from "./ANode";

export default class aGrid {
    constructor(rows, columns) {

        this.rows = rows;
        this.columns = columns;
        this.nodes = [];

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
        this.nodes[row][column].changeDiscoverability('start');
    }
    setTargetNode(row, column) {
        this.nodes[row][column].changeDiscoverability('target');
    }
    get grid() {
        return this.nodes;
    }

}