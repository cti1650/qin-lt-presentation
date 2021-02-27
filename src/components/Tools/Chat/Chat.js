import * as React from "react"

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: this.props.height || "100%",
      width: this.props.width || "100%",
      ...props,
    }
  }
  render() {
    return (
      <>
        <div height="100%" width="100%">
          <iframe
            src="https://qin-lt.vercel.app/"
            height={this.state.height}
            width={this.state.width}
            title="Chat"
          ></iframe>
        </div>
      </>
    )
  }
}
export default Chat
