import * as React from "react"

class TimeKeeper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: this.props.height || "380px",
      width: this.props.width || "100%",
      t1: this.props.t1 || "15:00",
      t2: this.props.t2 || "20:00",
      t3: this.props.t3 || "25:00",
      ...props,
    }
  }
  render() {
    return (
      <>
        <div>
          <iframe
            src={`http://maruta.github.io/timekeeper/#t1=${this.state.h1}&t2=${this.state.h2}&t3=${this.state.h3}&m=Click%20to%20edit%20this%20message`}
            height={this.state.height}
            width={this.state.width}
            title="TimeKeeper"
          ></iframe>
        </div>
      </>
    )
  }
}
export default TimeKeeper
