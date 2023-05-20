export default class aNode {
    constructor(row, column, walkable, discoverability) {
        this.row = row;
        this.column = column;
        this.walkable = walkable;
        this.discoverability = discoverability;
        this._gCost = 0;
        this._hCost = 0;
        this._parent = null;
    }
    changeDiscoverability(newDiscoverabilty) {
        this.discoverability = newDiscoverabilty;
    }
    updateGCost(newGCost) {
        this._gCost = newGCost;
    }
    updateHCost(newHCost) {
        this._hCost = newHCost;
    }
    updateParent(node) {
        this._parent = node;
    }
    get fCost() {
        return this._gCost + this._hCost;
    }
    get gCost() { return this._gCost; }
    get hCost() { return this._hCost; }
    get parent() { return this._parent; }



}