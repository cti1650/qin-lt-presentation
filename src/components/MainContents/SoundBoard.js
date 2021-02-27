import React from "react"
import "./js/script"
import belltower from "./sounds/belltower.mp3"
import gasp from "./sounds/gasp.mp3"
import applause from "./sounds/applause.mp3"
import tada from "./sounds/tada.mp3"
import footstep from "./sounds/FootStep-DoorSqueak.mp3"

const SoundBoard = () => {
  return (
    <div>
      <div class="btn__wrapper">
        <audio id="belltower" src={belltower} autoPlay></audio>
        <audio id="gasp" src={gasp}></audio>
        <audio id="applause" src={applause}></audio>
        <audio id="tada" src={tada}></audio>
        <audio id="footstep" src={footstep}></audio>
        <div id="buttons"></div>
      </div>
    </div>
  )
}

export default SoundBoard
