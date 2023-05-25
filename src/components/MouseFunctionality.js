import aNode from "./ANode";

export default class MouseEventer {

    constructor(nodesArray) {
        this.nodes = nodesArray;
        this.mouseDown = false;
        this.buttonsAlreadyDraggedOver = [];
        this.shouldSetBarriers = false;
    }

    mousePressed = (e) => {
        this.mouseDown = true;
    }
    mouseLifted = (e) => {
        this.mouseDown = false;
        // Reset buttons that have already been dragged over!
        this.buttonsAlreadyDraggedOver = [];
    }
    setShouldSetBarriers(boolean) {
        this.shouldSetBarriers = boolean;
    }

    dragButtons = (e) => {
        e.preventDefault();
        console.log("Dragging!")
        if (this.mouseDown && this.shouldSetBarriers) {
            console.log("you're doing something right!")
            const btnNumber = parseInt(e.target.textContent);
            if (!this.buttonsAlreadyDraggedOver.includes(btnNumber)) {
                this.buttonsAlreadyDraggedOver.push(btnNumber);

                const rowNumber = Math.floor(btnNumber / 20);
                const colNumber = btnNumber % 20;
                this.nodes[rowNumber][colNumber].toggleWalkable();
                console.log("New barrier!");
            }
        }

    }
}

