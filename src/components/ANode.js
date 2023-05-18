export default class ANode {
    constructor(row, column, walkable, discoverability) {
        this.row = row;
        this.column = column;
        this.walkable = walkable;
        this.discoverability = discoverability;
        this.fCost = 0;
        this.hCost = 0;
        this.gCost = 0;

    }
    changeDiscoverability(newDiscoverabilty) {
        this.discoverability = newDiscoverabilty;
    }

}