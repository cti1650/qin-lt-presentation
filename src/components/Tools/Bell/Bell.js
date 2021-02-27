import * as React from "react"

class Bell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: this.props.height || "500px",
      width: this.props.width || "100%",
      ...props,
    }
  }
  render() {
    return (
      <>
        <div>
          <iframe
            src="https://bell.cti-tl.com/"
            height={this.state.height}
            width={this.state.width}
            title="bell"
          ></iframe>
        </div>
      </>
    )
  }
}
export default Bell
