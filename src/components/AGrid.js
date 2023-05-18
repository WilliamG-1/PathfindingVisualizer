import ANode from "./ANode";

export default class AGrid {
    constructor(rows, columns) {

        this.rows = rows;
        this.columns = columns;
        this.nodes = [];

        this.createGrid();
    };

    createGrid() {
        let newGrid = []
        for (let i = 0; i < this.rows; i++) {
            newGrid = []
            for (let j = 0; j < this.columns; j++) {
                // Here, we create and define the i of jth element to be a Node component (pass props here too)
                newGrid[i][j] = new ANode(i, j, true, "discoverable")
            }
        }
        this.nodes = newGrid;
    }


}