// import { Component } from "react";

// export default class Test extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             status: "unkown"
//         }
//         this.updateStatus = this.updateStatus.bind(this);
//     }

//     updateStatus() {
//         this.setState({
//             status: "explored"
//         })
//     }

//     changeStatus(newStatus) {
//         this.setState({
//             status: newStatus
//         })
//     }

//     render() {
//         return (
//             <button className={this.state.status} onClick={this.updateStatus}></button>
//         )
//     }
// }