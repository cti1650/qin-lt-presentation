import React from "react"
import Header from "./header"
import Footer from "./footer"
import MainTools from "./MainContents/MainTools"
import Styles from "./layout.module.css"

export default ({ children }) => (
  <>
    {" "}
    {/* <React.Fragment>の省略形 */}
    <div className={Styles.f}>
      <Header />
      <section className={Styles.test}>{children}</section>
      <section className={Styles.tools}>
        <MainTools />
      </section>
      <Footer />
    </div>
  </>
)
