import { Component } from 'react'
import Grid from './components/Grid'
import TaskBar from './components/Taskbar'
import './App.css'
import aGrid from './components/AGrid'
import aNode from './components/ANode'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 0 means the start node is being selected, 1 means target node
      nodeSelector: 0,
      AGrid: new aGrid(20, 20),

    }
  }
  handleSelectNode = (e) => {
    // Gets the button's number
    const nodeNumber = parseInt(e.target.textContent);
    //let TempArray = [...this.state.nodeGrid];

    const rowNumber = Math.floor(nodeNumber / 20);
    const colNumber = nodeNumber % 20;
    if (this.state.nodeSelector === 0) {
      this.state.AGrid.setStartNode(rowNumber, colNumber);
      this.setState({
        nodeSelector: 0
      })
    }
    else if (this.state.nodeSelector === 1) {
      this.state.AGrid.setTargetNode(rowNumber, colNumber);
      this.setState({
        nodeSelector: 1
      })
    }

  }

  handleSelectTarget = (e) => {
    console.log("You are now selecting a target node")
    this.setState({
      nodeSelector: 1
    })
  }
  handleSelectStart = (e) => {
    console.log("Changed to selecting the start node!")
    this.setState({
      nodeSelector: 0
    })
  }
  handleFindPath = (e) => {

  }
  render() {
    return (
      <div>
        <Grid nodeSelector={this.state.nodeSelector} AGrid={this.state.AGrid.grid} selectNode={this.handleSelectNode} />
        <TaskBar onSelectStart={this.handleSelectStart} onSelectTarget={this.handleSelectTarget} />
      </div>
    )
  }
}

export default App
