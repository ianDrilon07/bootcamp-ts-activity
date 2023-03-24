import {FC } from "react"
import { toggleButtonTypes } from '../type';


const ToggleButton: FC<toggleButtonTypes> = ({
  buttonText,
  state,
  setState
}) => {

  console.log(state)

  return (
    <button
      onClick={() => setState(state)}
    >
      {buttonText}
    </button>
  )
}

export default ToggleButton
