import * as React from "react"
import Bell from "../../components/Tools/Bell/Bell"
import TimeKeeper from "../../components/Tools/TimeKeeper/TimeKeeper"

class MainTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }
  render() {
    return (
      <>
        <div>
          <div class="btn__wrapper">
            <audio id="belltower" src="./sounds/belltower.mp3"></audio>
            <audio id="gasp" src="./sounds/gasp.mp3"></audio>
            <audio id="applause" src="./sounds/applause.mp3"></audio>
            <audio id="tada" src="./sounds/tada.mp3"></audio>
            <audio id="footstep" src="./sounds/FootStep-DoorSqueak.mp3"></audio>
            <div id="buttons"></div>
          </div>
          <script src="./js/script.js"></script>
          <TimeKeeper t1="5:00" t2="7:00" t3="8:00" />
          <Bell height="280px" />
        </div>
      </>
    )
  }
}
export default MainTools
