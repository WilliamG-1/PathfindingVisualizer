import aGrid from "./AGrid";
import aNode from "./ANode";
import React from "react";


export default class aStar {

    constructor(AGrid, callback) {
        this.grid = new aGrid(20, 20);
        this.grid = AGrid;
        this.callback = callback;
    }

    updateGrid(newGrid) {
        this.grid = newGrid;
    }

    refreshNodes() {
        this.callback();
    }

    findPath(callback) {
        // First reset grid to reset any previous paths
        this.grid.clearPreviousPath();
        // The open set and closed set, open denoting nodes which are visited, closed are those which are fully explored
        let open = [];
        let closed = [];
        // First, add the starting node to the open set
        open.push(this.grid.startNode);
        // this.grid.startNode.changeDiscoverability('visited');      

        let IntervalID = setInterval(() => {

            if (open.length <= 0) {
                console.log("No path found!");
                clearInterval(IntervalID);
                IntervalID = null;
                return;
            }
            let currentNode = open[0]
            for (let i = 0; i < open.length; i++) {
                // Check if any node in the current set is a more feasable node than our current node, then update our current node
                if (open[i].fCost < currentNode.fCost || (open[i].fCost === currentNode.fCost && open[i].hCost < currentNode.hCost)) {
                    currentNode = open[i];
                }
            }
            // Make node fully explored, remove from open set, then add it to the closed set!

            currentNode.changeDiscoverability('explored');

            this.removeNodeFromOpen(open, currentNode);
            closed.push(currentNode);

            if (currentNode === this.grid.targetNode) {
                clearInterval(IntervalID);
                IntervalID = null;
                console.log("FOund path!")
                this.retracePath(this.grid.startNode, this.grid.targetNode);
                console.log("Dne retracing");
                return;
            }
            this.grid.getNeighbors(currentNode).forEach(neighbor => {
                console.log("Testing neigbor!");
                if (!neighbor.walkable || closed.includes(neighbor)) {
                    console.log("Nofin~")
                }
                else {
                    console.log("Somefin!")
                    let distanceFromCurrentToNeighbor = currentNode.gCost + this.getGridDistance(currentNode, neighbor);
                    // Update f cost, and other if new distance is less than the node's current g cost, or if neighbor is not in open set (not yet visited)
                    if (distanceFromCurrentToNeighbor < neighbor.gCost || !(open.includes(neighbor))) {
                        neighbor.updateGCost(distanceFromCurrentToNeighbor);
                        neighbor.updateHCost(this.getGridDistance(neighbor, this.grid.targetNode));
                        neighbor.updateParent(currentNode);
                        // Add to open set if not yet in it
                        if (!(open.includes[neighbor])) {
                            open.push(neighbor);

                            neighbor.changeDiscoverability('visited');
                            console.log(`Open set size: ${open.length}`)
                        }
                    }
                }

            })
            this.grid.startNode.changeDiscoverability('start');
            this.refreshNodes();
        }, 50);
        console.log("HellO!")

    }

    retracePath(startNode, targetNode) {
        let path = []
        let currentNode = targetNode;
        currentNode.changeDiscoverability('target');
        while (currentNode != startNode) {
            console.log("Retracing path!")
            console.log(`Current Node coorods: ${currentNode.column}, ${currentNode.row}`)
            path.push(currentNode);
            if (currentNode !== targetNode)
                currentNode.changeDiscoverability('path');
            currentNode = currentNode.parent;
        }
        // Since the loop breaks on the start node, we also change it's discoverability to path
        currentNode.changeDiscoverability('start');
        path = path.reverse();
        console.log("New Path:")
        console.log(path);
        this.refreshNodes();
    }

    getGridDistance(nodeA, nodeB) {
        const distX = Math.abs(nodeA.column - nodeB.column);
        const distY = Math.abs(nodeA.row - nodeB.row);

        if (distX > distY) {
            return (14 * distY + 10 * (distX - distY));
        }
        else {
            return (14 * distX + 10 * (distY - distX));
        }
    }

    removeNodeFromOpen(open, node) {
        let index = open.indexOf(node);
        if (index > -1) {
            open.splice(index, 1);
            console.log("Removed something from open set")
        }
    }
}