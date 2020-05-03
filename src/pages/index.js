import "../utils/frontPage.css"

// import Ideas from "../../content/assets/svg/ideas.svg"
import Ideas from "../../content/assets/svg/code_thinking.svg"
import React from "react"
import Wave from "../../content/assets/svg/wave.svg"
import WaveTwo from "../../content/assets/svg/wave2.svg"
import Header from "../components/header"

export default function Front() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="middleSection">
          <div className="titleBox">
            <div className="title">
              Krunal Web engineer from India
            </div>
            <div className="desc">
              I have propper recources that can give you the faster workflow and
              daily work update.
            </div>
          </div>
          <div className="manCodingSvg">
            <Ideas />
          </div>
        </div>
        <Wave />
        <WaveTwo />
      </div>
    </>
  )
}
