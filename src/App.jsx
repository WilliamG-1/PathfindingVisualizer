import { Component } from 'react'
import Grid from './components/Grid'
import TaskBar from './components/Taskbar'
import './App.css'
import aGrid from './components/AGrid'
import aNode from './components/ANode'
import aStar from './components/AStartPathfind'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rerender: false,
      mouseDown: false,
      // 0 means the start node is being selected, 1 means target node, 2 means select barriers, 3 means get neighbors
      nodeSelector: 0,
      AGrid: new aGrid(20, 20),
      AStar: new aStar(null)
    }
    this.state.AStar = new aStar(this.state.AGrid);
  }

  // handleFindNeighbors = (e) => {
  //   // Gets the button's number
  //   const buttonNumber = parseInt(e.target.textContent);
  //   const rowNumber = Math.floor(nodeNumber / 20);
  //   const colNumber = nodeNumber % 20;

  // }

  handleSelectNode = (e) => {
    // Gets the button's number
    const buttonNumber = parseInt(e.target.textContent);
    //let TempArray = [...this.state.nodeGrid];

    const rowNumber = Math.floor(buttonNumber / 20);
    const colNumber = buttonNumber % 20;


    // We set state to rerender the components lol
    // Select Start Mode
    if (this.state.nodeSelector === 0) {
      this.state.AGrid.setStartNode(rowNumber, colNumber);
      this.setState({
        nodeSelector: 0
      })
    }
    // Select Target Mode
    else if (this.state.nodeSelector === 1) {
      this.state.AGrid.setTargetNode(rowNumber, colNumber);
      this.setState({
        nodeSelector: 1
      })
    }
    // Select Barrier Mode
    else if (this.state.nodeSelector === 2) {
      this.state.AGrid.toggleBarriers(rowNumber, colNumber);

      this.setState({
        nodeSelector: 2,
        mouseDown: true
      })
    }

    // // This is temporary for testing lol
    // else if (this.state.nodeSelector === 3) {
    //   const centerNode = this.state.AGrid.nodes[rowNumber][colNumber];
    //   const neighbors = this.state.AGrid.getNeighbors(centerNode);
    //   this.setState({ nodeSelector: 3 });
    // }


  }
  handleSelectBarriers = (e) => {
    console.log("You are now selecting barriers!");
    this.setState({
      nodeSelector: 2
    })
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
  handleSelectNeighbors = (e) => {
    this.setState({ nodeSelector: 3 })
  }
  handleReset = (e) => {
    this.state.AGrid.resetGrid();
    this.setState({});
  }
  handleFindPath = (e) => {
    //const NewStar = new aStar(this.state.AGrid);
    //console.log(NewStar);
    console.log("Finding path in sjc!")
    console.log(this.state.AGrid)
    console.log("Get the grid!");
    console.log(this.state.AStar);
    this.setState({ rerender: true });
    this.state.AStar.findPath();
    this.setState({ rerender: false });
  }
  handleDragToggleBarriers = (e) => {
    e.preventDefault();
    console.log("Dragging!")
    if (mouseDown && this.state.nodeSelector === 2) {
      // Gets the button's number
      const buttonNumber = parseInt(e.target.textContent);
      //let TempArray = [...this.state.nodeGrid];

      const rowNumber = Math.floor(buttonNumber / 20);
      const colNumber = buttonNumber % 20;

      this.state.AGrid.toggleBarriers(rowNumber, colNumber);
      this.setState({});
    }
  }


  render() {
    return (
      <div>
        <Grid nodeSelector={this.state.nodeSelector} AGrid={this.state.AGrid.grid} selectNode={this.handleSelectNode} dragCreateBarriers={this.handleDragToggleBarriers} />
        <TaskBar onSelectStart={this.handleSelectStart} onSelectTarget={this.handleSelectTarget} onSelectBarrier={this.handleSelectBarriers} onResetGrid={this.handleReset} onFindPath={this.handleFindPath}
        />
      </div>
    )
  }
}

export default App
