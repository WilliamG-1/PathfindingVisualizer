import { Component } from 'react'

export default class Grid extends Component {
    constructor(props) {
        super(props)
    }
    grid = []

    createGrid(rows, columns) {
        for (let i = 0; i < rows; i++) {
            this.grid.push([])
            for (let j = 0; j < columns; j++) {
                this.grid[i].push(1)
            }
        }
    }
    printGrid() {
        for (let i = 0; i < this.grid.length; i++) {
            print(this.grid[i])
        }
    }

    render() {
        return (
            <div>
                This is jsx
            </div>
        )
    }
}