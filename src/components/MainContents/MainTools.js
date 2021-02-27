import * as React from "react"
import Bell from "../../components/Tools/Bell/Bell"

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
          <iframe
            src="http://maruta.github.io/timekeeper/#t1=15:00&t2=20:00&t3=25:00&m=Click%20to%20edit%20this%20message"
            height="380px"
          ></iframe>
          <Bell />
        </div>
      </>
    )
  }
}
export default MainTools
