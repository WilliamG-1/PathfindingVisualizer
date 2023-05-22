import aNode from "./ANode";

export default class MouseEventer {

    constructor(nodesArray) {
        this.nodes = nodesArray;
        this.mouseDown = false;
        this.buttonsAlreadyDraggedOver = [];
    }

    mousePressed = (e) => {
        this.mouseDown = true;
    }
    mouseLifted = (e) => {
        this.mouseDown = false;
        // Reset buttons that have already been dragged over!
        this.buttonsAlreadyDraggedOver = [];
    }
    dragButtons = (e) => {
        e.preventDefault();

        if (this.mouseDown) {
            const btnNumber = parseint(e.target.textContent);
            if (!this.buttonsAlreadyDraggedOver.includes(btnNumber)) {
                this.buttonsAlreadyDraggedOver.push(btnNumber);

                const rowNumber = Math.floor(btnNumber / 20);
                const colNumber = btnNumber % 20;
                this.nodes[rowNumber][colNumber].toggleWalkable();
            }
        }

    }
}

