import { Component } from 'react'
import Grid from './components/Grid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskBar from './components/Taskbar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 0 means the start node is being selected, 1 means target node
      nodeSelector: 0

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

  render() {
    return (
      <div>
        <Grid nodeSelector={this.state.nodeSelector} />
        <TaskBar onSelectStart={this.handleSelectStart} onSelectTarget={this.handleSelectTarget} />
      </div>
    )
  }
}

export default App
