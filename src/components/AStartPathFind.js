export default class AStar {
    constructor(Grid) {
        this.grid = Grid;
        this.open = [];
        this.closed = {};
    }

    updateGrid(newGrid) {
        this.grid = newGrid;
    }
    findPath() {
        // First, add the starting node to the open set
        this.open.push(this.grid.startNode);

        while (this.open.length > 0) {

        }
    }
}