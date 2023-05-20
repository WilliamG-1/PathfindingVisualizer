export default class aNode {
    constructor(row, column, walkable, discoverability) {
        this.row = row;
        this.column = column;
        this.walkable = walkable;
        this.discoverability = discoverability;
        this.fCost = 0;
        this.hCost = 0;
    }
    get fCost() {
        return this.gCost + this.hCost;
    }
    changeDiscoverability(newDiscoverabilty) {
        this.discoverability = newDiscoverabilty;
    }

}