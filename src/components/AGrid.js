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

    getNeighbors(Node) {
        let neighbors = []
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0)
                    continue
                const gridX = x + Node.column
                const gridY = y + Node.row
                // Check that the neighbors are valid (inside the grid)
                if (gridX >= 0 && gridX <= 19 && gridY >= 0 && gridY <= 19 && this.nodes[gridY][gridX].walkable === true) {
                    neighbors.push(this.nodes[gridY][gridX]);
                }
            }
        }
        neighbors.forEach(neighbor => {
            neighbor.changeDiscoverability('visited')
        })
        return neighbors
    }

    resetGrid() {
        this.nodes.forEach((row) => {
            row.forEach(node => {
                node.reset();
            });
        })
        this.setStartNode(0, 0);
        this.setTargetNode(9, 9);
    }
    clearPreviousPath() {
        this.nodes.forEach(row => {
            row.forEach(node => {
                if (node.walkable === true && node !== this.startNode && node != this.targetNode) {
                    node.reset();
                }
            })
        })
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
    toggleBarriers(row, column) {
        // Do nothing if trying to make the target/start node a barrier
        if (this.nodes[row][column] === this.targetNode || this.nodes[row][column] === this.startNode) {
            return;
        }
        else {
            this.nodes[row][column].toggleWalkable();
        }
    }
    get grid() {
        return this.nodes;
    }

}