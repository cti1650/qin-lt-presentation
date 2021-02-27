import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import MainTools from "../components/MainContents/MainTools"
import Chat from "../components/Tools/Chat/Chat"
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
      <section className={Styles.chat}>
        <Chat height="100%" />
      </section>
      <Footer />
    </div>
  </>
)
