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
          <TimeKeeper t1="5:00" t2="7:00" t3="8:00" />
          <Bell height="280px" />
        </div>
      </>
    )
  }
}
export default MainTools
