import * as React from "react"

class SoundBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: this.props.height || "30%",
      width: this.props.width || "100%",
      ...props,
    }
  }
  render() {
    return (
      <>
        <div height="30%" width="100%">
          <iframe
            src="https://kotaro-club-meow01.netlify.app/"
            height={this.state.height}
            width={this.state.width}
            title="SoundBoard"
          ></iframe>
        </div>
      </>
    )
  }
}
export default SoundBoard
