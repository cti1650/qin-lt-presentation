import * as React from "react"

class Bell extends React.Component {
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
            <iframe
            src="https://bell.cti-tl.com/"
            height="500px"
            style={{background:'white'}}
          ></iframe>
        </div>
      </>
    )
  }
}
export default Bell
