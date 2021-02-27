import * as React from "react"
// import SoundBoard from "./SoundBoard"

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
          {/* <SoundBoard /> */}
          <iframe
            src="http://maruta.github.io/timekeeper/#t1=15:00&t2=20:00&t3=25:00&m=Click%20to%20edit%20this%20message"
            height="380px"
          ></iframe>
        </div>
      </>
    )
  }
}
export default MainTools
